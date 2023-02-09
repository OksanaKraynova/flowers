import { async } from '@firebase/util';
import { addDoc, collection, getDocs, deleteDoc, doc, setDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import db from '../../firebase';

const Tab2 = (props) => {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const id = props.product.id;
    const emailField = document.querySelector('.email-red')
    const nameField = document.querySelector('.name-red')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    const colComments = query(collection(db, 'catalog', id, 'comments'))

    let payload

    onSnapshot(colComments, snapshot => {
        payload = snapshot.docs.map(doc => (
            {
                data: doc.data(),
                id: doc.id
            }
        ))
    })

    const emailHandler = e => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase()) && e.target.value.length !== 0) {
            emailField.classList.add('err')
            setEmailError(true)
        } else {
            emailField.classList.remove('err')
            setEmailError(false)
        }
    }
    const nameHandler = e => {
        setName(e.target.value)
        if (e.target.value.length < 3 && e.target.value.length !== 0) {
            nameField.classList.add('err')
            setNameError(true)
        } else {
            nameField.classList.remove('err')
            setNameError(false)
        }
    }

    const deleteComment = async () => {
        payload.map(comm => deleteDoc(doc(db, 'catalog', id, 'comments', comm.id)))
    }
    const sendComment = async e => {
        e.preventDefault()
        const commentToSend = comment
        setComment('')
        setEmail('')
        setName('')
        await addDoc(collection(db, 'catalog', id, 'comments'), {
            comment: commentToSend,
            userName: props.user.displayName,
            userimage: props.user.photoURL,
            // id: new Date().getTime()
            // timestamp: dateComment
        })
    }

    useEffect(() => {
        if ((emailError || nameError) || !comment.trim()) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, nameError, comment])

    useEffect(() => onSnapshot(query(collection(db, 'catalog', id, 'comments'), orderBy('comment', 'desc')), snapshot => setComments(snapshot.docs)), [db, id])
    return (
        <Feedback>
            {
                comments.length > 0 ?
                    (<Comments>
                        {comments.map(comment => (
                            <Comment key={comment.id}>
                                <img alt='' src='/images/ticks.svg' />
                                <p>{comment.data().comment}</p>
                                <div>
                                    <img alt='' src='/images/star.svg' />
                                    <img alt='' src='/images/star.svg' />
                                    <img alt='' src='/images/star.svg' />
                                    <img alt='' src='/images/star.svg' />
                                    <img alt='' src='/images/star.svg' />
                                </div>
                                <Row>
                                    <Date>{comment.data().userName}</Date>
                                    <DeleteComment onClick={deleteComment}>удалить</DeleteComment>
                                </Row>

                            </Comment>
                        ))}
                    </Comments>)
                    :
                    <span>Отзывов пока нет</span>
            }
            <p className='green'>Будьте первым, кто оставил отзыв на “{props.product.name}”
                {/* <span>Оставьте свой отзыв на “Рубиновые искры”</span> */}
            </p>
            <span>Ваш адрес email не будет опубликован. Обязательные поля помечены *</span>
            <Estimation>
                <span>Ваша оценка:</span>
                <div>
                    <img alt='' src='/images/star.svg' />
                    <img alt='' src='/images/star.svg' />
                    <img alt='' src='/images/star.svg' />
                    <img alt='' src='/images/star.svg' />
                    <img alt='' src='/images/star.svg' />
                </div>
            </Estimation>
            <Form>
                <label>Ваш отзыв*<CommentField type='text' placeholder='Введите комментарий' value={comment} onChange={e => setComment(e.target.value)} /></label>
                <label >Имя*<input type='text' className='name-red' placeholder='Введите ваше имя' onChange={(e) => nameHandler(e)} value={name} /></label>
                <label >E-mail*<input className='email-red' type='email' value={email} onChange={(e) => emailHandler(e)} placeholder='Введите вашу почту' /></label>
                <button className='link link__green' onClick={sendComment} disabled={!formValid}>отправить</button>
                <p>Нажимая на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span>Политикой конфиденциальности</span></p>
            </Form>
        </Feedback>
    );
};

export default Tab2;

const Feedback = styled.div`
span{
    text-transform: none;
    letter-spacing: 0.06em;
    line-height: 1.5;
    font-size: 14px;
}
p{
    font-size: 14px;
    line-height: 1.5;
    margin: 60px 0px 4px 0px;
    @media(max-width: 1109px){
        margin-top: calc(40px + (60 - 40) * ((100vw - 768px) / (1110 - 768)));
    }
        @media(max-width: 768px){
            margin-top: 40px;
        }
}
`

const Estimation = styled.div`
    margin: 20px 0;
    div{
        margin-top: 4px;
    }
    img{
        margin-right: 4px;
    }
`
const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const Comment = styled.div`
 letter-spacing: 0.02em;
    text-transform: none;
    line-height: 1.5;
    max-width: 539px;
    &:hover{
        button{
            opacity:1;
        }
    }
    p{
        margin:  10px 0px;
        font-size: 16px;
        max-width: 539px;
    }
`

const Row = styled.div`
    display: flex;
   gap: 20px;
    margin-top: 10px;
    font-size: 14px;
    color: #555555;
    align-items: center;
`
const Date = styled.div`
    
    
`

const DeleteComment = styled.button`
margin-top: 2px;
opacity: 0;
transition: opacity 0.2s ease;
    font-size: 10px;
    &:hover{
        text-decoration: underline;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    label + label{
        margin-top: 20px;
    }
    label{
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 0.06em;
        display: flex;
        flex-direction: column;
        position: relative;
    } 
  
    input{
        margin-top: 4px;
        border: 1px solid #555555;
        padding: 19px 0px 19px 20px;
        text-transform: none;
        height: 60px;  
        &.err{
            border: 1px solid #FF3A44;  
            &::placeholder{
                color:#FF3A44;  
            }
        }
    } 
    button{
        margin-top: 30px;
        width: 255px;
    }
    p{
        font-family: 'Roboto Condensed';
        font-size: 10px;
        line-height: 1.2;
        margin:10px 0px 0px 0px;
        max-width: 342px;
        letter-spacing: 0.02em;
        text-transform: none;
        span{
            color: #D978AC;
            font-size: 10px;
        }
    }
`
const CommentField = styled.input`
    
`
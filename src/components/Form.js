import React from 'react';
import styled from 'styled-components'

const Form = () => {

    const sendForm = e => {
        e.preventDefault()
    }
    return (
        <Wrapper action='#'>
            <Text>Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной связи, и наш специалист свяжется с вами в течение 15 минут.</Text>
            <input type='text' placeholder='Ваше имя' />
            <input type='tel' placeholder='+7 (977) 777-77-77' />
            <textarea placeholder='Ваш комментарий' />
            <Btn type='submit' onClick={sendForm} className='link link__green'>Отправить</Btn>
            <p>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span>Политикой конфиденциальности</span></p>
        </Wrapper>
    );
};

export default Form;

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
width: 445px;
@media(max-width: 1099px){
width: 100%;
}
    input{
        border: 1px solid #43FFD2;
        margin-bottom: 10px;
        padding: 19px 0px 20px 20px;
    }
    textarea{
        border: 1px solid #43FFD2;
        padding: 19px 0px 80px 20px;
        resize: none;
        margin-bottom: 20px;
    }
    p{
        font-family: 'Roboto Condensed';
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.02em;
        span{
            color: #D978AC;
        }
    }
`

const Btn = styled.button`
    max-width: 255px;
    margin-bottom: 10px;
`

const Text = styled.div`

text-transform: uppercase;
        margin: 61px 0 30px auto;
        max-width: 255px;
        line-height: 1.4;
        border-top: 1px solid #43FFD2;
        padding-top: 53px;
        @media(max-width: 998px){
            margin:0 0px 30px 0px;
            padding-top: 20px;
        }
`
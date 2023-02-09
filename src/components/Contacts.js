import React from 'react';
import styled from 'styled-components'
import { disableScroll } from '../dop/scroll';

const Contacts = () => {
    const showPopup = () => {
        document.getElementById('popup').classList.add('show')
        disableScroll()
       }
    return (
        <Contact>

            <Block>
                <span className='green'>ул. Тимирязева 67</span>
                <span>10:00 до 21:00 <br />
                    без выходных</span>
            </Block>
            <Block className='social'>
                <Social className='blur'>
                    <a href='https://instagram.com' target='_blank' rel='noreferrer' >
                        <img alt='' src='/images/insta.svg' />
                    </a>
                    <a href='https://whatsapp.com' target='_blank' rel='noreferrer'>
                        <img alt='' src='/images/whatsapp.svg' />
                    </a>
                    <a href='tel:+1234567890' >
                        <img alt='' src='/images/phone.svg' />
                    </a>
                </Social>
            </Block>
            <Block>
                <p>Политика конфиденциальности</p>
                <p>Обработка персональных данных</p>
            </Block>
            <Block>
                <a className='blur call' onClick={showPopup}><img alt='' src='/images/phone2.svg' />заказать звонок</a>
            </Block>
            <Block>
                <a href='mailto:zakaz@loverflower.by' className=''>zakaz@loverflower.by</a>
                <span>Доставка 24/7 по договоренности с оператором</span>
            </Block>
        </Contact>
    );
};

export default Contacts;


const Social = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    max-width: 60px;
    margin: 40px 0px 160px auto;
    @media(max-width: 768px){
        margin: 0;
        flex-direction: row;
        padding: 0;
      
    }
    a{
               &:hover{
            animation: bounce 1s;
    }
    }
`

const Contact = styled.div`
      line-height: 1.5;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media(max-width: 768px){
        gap: 10px;
        .social{
            order: 10;
        }
       
    }
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    font-weight: 300;
    letter-spacing: 0.1em;
    @media(max-width: 768px){
text-align: left;
    }
    .call{
        display: flex;
        max-width: 180px;
        margin-left: auto;
        align-items: center;
        padding: 9px 18px ;
        img{
            margin-right: 6px;
        }
        @media(max-width: 768px){
            display: none;
        }
    }
        a{
            color: #43FFD2;
            &:hover{
                text-decoration: underline;
            }
        }
        span{
            font-size: 10px;
            font-weight: 300;
        }
        p{
            font-weight: 400;
            font-size: 10px;
            line-height: 15px;
            letter-spacing: 0.04em;
            text-transform: none;
            display: none;
            color: #555555;
            @media(max-width: 768px){
                display: inline;
            }
        }
`


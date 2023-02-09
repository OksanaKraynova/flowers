import React from 'react';
import styled from 'styled-components'
import {  enableScroll } from '../dop/scroll';

const Popup = () => {
   const closePopup = () => {
    document.getElementById('popup').classList.remove('show')
   enableScroll()
   }
    return (
        <Wrapper id='popup'>
            <Overlay>
                <Modal>
                    <div>
                        <h3>заказать звонок</h3>
                        <p>Впишите свои данные, и мы свяжемся с Вами. Ваши данные ни при каких обстоятельствах не будут переданы третьим лицам.</p>
                        <form>
                            <input type='text' placeholder='Ваше имя' />
                            <input type='tel' placeholder='+7 (977) 777-77-77' />
                            <Btn type='submit' className='link link__green'>Отправить</Btn>
                            <p>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <span>Политикой конфиденциальности</span></p>
                        </form>
                        <Close onClick={closePopup}>
                            <img alt='' src='/images/close.svg' />
                        </Close>
                    </div>
                </Modal>
            </Overlay>
        </Wrapper>
    );
};

export default Popup;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    bottom: 0;
    z-index: 999;
    display: none;
    &.show{
        display: block;
    }
`

const Overlay = styled.div`

`


const Modal = styled.div`
background-color: #0F2222;
    max-width: 540px;
    height: 455px;
    margin: 0 auto;
    margin-top: 150px;
    position: relative;
       text-align: left;
    div{
        height: 100%;
        padding: 30px;
        background: url(../images/popup.png) top left no-repeat;
        @media(max-width: 768px){
            padding: 40px 10px ;
        }
    }
    h3{
        font-family: 'Cormorant';
        font-weight: 400;
        font-size: 40px;
        line-height: 1.2;
        letter-spacing: 0.02em;
        margin-bottom: 20px;

        @media(max-width: 768px){
            font-size: 26px;
        }
    }
    p{
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 0.04em;
        max-width: 280px;
        position: relative;
        padding-top: 11px;
        @media(max-width: 768px){
            font-size: 12px;
        }
        &:before{
            content: '';
            position: absolute;
            
            width: 100px;
            height: 1px;
            background: #43FFD2;
            top: 0;
            left: 0;
        }
    }
    form{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        p{
            font-family: 'Roboto Condensed';
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.02em;
            text-transform: none;
            max-width: 342px;
            span{
                color: #D978AC;
            }
        }
        input + input{
            margin-top: 10px;
            @media(max-width: 768px){
            margin-top: 20px;
        }
        }
        input{
        height: 60px;
        border: 1px solid #43FFD2;
    padding: 20px;
    @media(max-width: 768px){
        padding: 16px;
        }
        &::placeholder{
            font-size: 12px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #43FFD2;
        }
        }
    }
`

const Btn = styled.button`
    max-width: 255px;
    margin-top: 20px;
`
const Close = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    img{
        width: 30px;
        height: 30px;
    }
`
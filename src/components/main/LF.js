import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Contacts from '../Contacts';
import Popup from '../Popup';

const LF = () => {
    return (
        <Wrapper>
            <Container className='container'>
                <ContactContainer>
                    <Contacts />
                </ContactContainer>
                <h1>Lover flower</h1>
                <h2>Создаём для тех, кто ценит свежесть и изящество цветка</h2>
                <NavLink to='/catalog' className='link link__green' >Смотреть каталог</NavLink>
            </Container>
            <Popup />
        </Wrapper>
    );
};

export default LF;

const Wrapper = styled.section`
     
    background: url(../images/main-bg2.jpg) center top / cover no-repeat ;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    &:before{
        content: '';
        background: linear-gradient(180deg, rgba(4, 10, 10, 0) 0%, #040A0A 100%);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 30%;

    }
    &:after{
        content: '';
        position: absolute;
        width: 305px;
        height: 140px;
        background: url(../images/lover.png)  no-repeat ;
        right: 10%;
        bottom: 120px;
        z-index: 1;
        @media(max-width: 998px){
            display: none;
        }
    }
    @media(max-width: 1109px){
        background-image: url(../images/bg-small.png); 
    }
    @media(max-width: 768px){
        background-size:  100%; 
        background-position: center ;
        background-origin: content-box;
        /* background-image: url(../images/bg-small.jpg) ; */
    }
    h1{
        display: none;
        font-family: 'Cormorant';
        font-weight: 300;
        font-size: 200px;
        line-height: 1.3;
        letter-spacing: 0.2em;
        @media(max-width: 1109px){
            display: block;
            font-size: calc(100px + (200 - 100) * ((100vw - 768px) / (1110 - 768)));
            letter-spacing: 0.1em;
        }
        @media(max-width: 768px){
            display: none;
        }
    }
    h2{
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 47px;
        line-height: 30px;
        letter-spacing: 0.02em;
        @media(max-width: 768px){
            margin: 560px 10px 20px ;
            text-transform: none;

        }
    }
    a{
        max-width: 220px;
        margin: 0 auto;
    }
   
`

const Container = styled.div`
    position: relative;
    padding: 488px 0px 629px 0px;
    @media(max-width: 1109px){
        padding-top: 93px;
        padding-bottom: calc(170px + (629 - 170) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
padding-top: 14px;
padding-bottom: 100px;
    }
`

const ContactContainer = styled.div`
    position: absolute;
    right: 0;
    top: 86px;
    @media(max-width: 1109px){
        right: 10px;
    }
    @media(max-width: 768px){
display: none;
    }

`



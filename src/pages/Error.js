import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <Wrapper>
            <Block>
                <p>Ошибка 404</p>
                <p>Упс...Такой страницы нет</p>
                <NavLink className='green' to='/'>на главную</NavLink>
            </Block>
        </Wrapper>
    );
};

export default Error;

const Wrapper = styled.div`
    background: url(../images/404.png) top left / cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    @media(max-width: 849px){
        position: static;
        width: 100%;
        height: 100vh;
        background-position: -150px 100px;
        
    }
    @media(max-width: 449px){
              background-position: -250px 100px;
        
    }
    @media(max-width: 449px){
              background-position: -80px 100px;
        
    }
`

const Block = styled.div`
    position: absolute;
    bottom: 90px;
    right: 20%;
    line-height: 21px;
    letter-spacing: 1.5;
    text-transform: uppercase;
    p{
        margin-bottom: 20px;
    }
    a{
        text-decoration: underline;
        font-weight: 700;
    }
`
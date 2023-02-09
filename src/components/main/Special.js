import React from 'react';
import styled from 'styled-components'

const Special = () => {
    return (
        <Wrapper>
            <Container className='container'>
                <h2 className='title'>особенный<br /> <span>повод?</span></h2>
                <img alt='' src='/images/special/1.jpg' />
                <Context>
                    <p>Мы готовы прийти на помощь и собрать уникальный букет, на любой вкус, бюджет и для любого события по вашему индивидуальному заказу.</p>
                    <ul>
                        <li>учтем даже самые изысканные пожелания;</li>
                        <li>подберем свежайшие цветы и сделаем уникальный букет или композицию;</li>
                        <li>оплатить можно при получении или онлайн на сайте</li>
                    </ul>
                    <Link className='link link__green'>собрать индивидуальный букет</Link>
                </Context>
                <img alt='' src='/images/special/2.jpg' />
                <img alt='' src='/images/special/3.jpg' />
                <img alt='' src='/images/special/4.jpg' />

            </Container>
        </Wrapper>
    );
};

export default Special;

const Wrapper = styled.section`
    background: url(../images/special/bg.png) center right no-repeat;
    padding-bottom: 160px;
    @media(max-width: 1109px){
        padding-bottom: calc(80px + (181 - 80) * ((100vw - 320px) / (1110 - 320)));
    }
    @media(max-width: 768px){
        background: none;
    }
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    @media(max-width: 1078px){
        justify-content: flex-start;
        gap: 20px;
    }
    h2{
        display: flex;
        flex-direction: column;
        min-width: 773px;
        @media(max-width: 1109px){
            min-width: 100%;
        }
        @media(max-width: 768px){
            display: block;
            text-align: center;
        }
        span{
            display: inline-flex;
            margin-left: auto;
            position: relative;
            padding-left: 285px;
            @media(max-width: 998px){
                    padding-left: 150px;
                                      
                }
            @media(max-width: 768px){
                    padding-left: 106px;
                    margin-left: 0;
                }
            &::after{
                position: absolute;
                left: 0px;
                top: 50%;
                content: '';
                width: 255px;
                height: 1px;
                background-color: #D978AC;
                @media(max-width: 998px){
                    width: 140px;
                }
                @media(max-width: 768px){
                    width: 96px;
                }
            }
        }    
}
    img{
        backdrop-filter: blur(20px);
        border-radius: 25px;
        max-height: 292px;
        @media(max-width: 768px){
            display: none;
        }
    }
`

const Context = styled.div`
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.4;
    max-width: 285px;
    margin-left: 60px;
    @media(max-width: 1119px){
margin-left: 0;
    }
    @media(max-width: 1078px){
        order: 5;
    }
    @media(max-width: 768px){
        flex-grow: 1;
        max-width: none;
    }
    ul{
        margin: 40px 0;
        position: relative;
        @media(max-width: 768px){
        margin-top: 20px;
    }
        &:after{
            position: absolute;
            content: '';
            width: 20px;
            height: 60px;
            background: url(../images/special/arrow.svg) no-repeat;
            left: -25px;
        }
        li + li{
            margin-top: 30px;
        }
        li{
            padding-left: 13px;
            position: relative;
            &::before{
                content: '';
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: #fff;
                position: absolute;
                left: 0;
                top: 7px;
            }
        }
    }
`

const Link = styled.a`
    max-width: 255px;
    @media(max-width: 768px){
        margin: 0 auto;
    }
    
`
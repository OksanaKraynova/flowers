import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <Wrapper>
            <Container className='container'>
                <Column className='first'>
                    <img alt='' src='/images/logo.svg' />
                    <h4 className='green'>реквизиты</h4>
                    <p>ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого</p>
                </Column>
                <Column>
                    <h4 className='green'>Каталог</h4>
                    <ul>
                        <li>
                            <a>Популярное</a>
                        </li>
                        <li>
                            <a>Сухоцветы</a>
                        </li>
                        <li>
                            <a>Букеты роз</a>
                        </li>
                        <li>
                            <a>Композиции из цветов</a>
                        </li>
                        <li>
                            <a>Индивидуальный букет</a>
                        </li>
                        <li>
                            <a>Букет на праздник</a>
                        </li>
                        <li>
                            <a>Упаковка подарков</a>
                        </li>
                        <li>
                            <a>Шары</a>
                        </li>
                        <li>
                            <a>Открытки</a>
                        </li>
                        <li>
                            <a>Конверты</a>
                        </li>
                    </ul>
                </Column>
                <Column>
                    <h4 className='green'>Букет</h4>
                    <ul>
                        <li>
                            <a>Для девушки</a>
                        </li>
                        <li>
                            <a>Для мужчины</a>
                        </li>
                        <li>
                            <a>Для жены</a>
                        </li>
                        <li>
                            <a>Для мамы </a>
                        </li>
                        <li>
                            <a>Для коллеги</a>
                        </li>
                        <li>
                            <a>Для начальника</a>
                        </li>
                        <li>
                            <a>Для дочки</a>
                        </li>
                        <li>
                            <a>Для детей</a>
                        </li>
                        <li>
                            <a>Для женщины</a>
                        </li>
                    </ul>
                </Column>
                <Column>
                    <NavLink to='/delivery' className='green link-footer'>Доставка и оплата</NavLink>
                    <NavLink to='/about' className='green link-footer'>О нас</NavLink>
                    <NavLink to='/faq' className='green link-footer'>FAQ</NavLink>
                    <NavLink to='/contacts' className='green link-footer'>Контакты</NavLink>
                    <NavLink to='/corporate' className='green link-footer'>для корпоративных клиентов</NavLink>
                </Column>
                <Column>
                    <Block>
                        <a href='mailto:zakaz@loverflower.by' className='green'>zakaz@loverflower.by</a>
                        <span>Доставка 24/7 по договоренности с оператором</span>
                    </Block>
                    <Block>
                        <span className='green span'>ул. Тимирязева 67</span>
                        <span>10:00 до 21:00 <br />
                            без выходных</span>
                    </Block>
                    <Block>
                        <a href='tel:+1234567890' className='green' >+123 (456) 78-90</a>
                        <span>прием звонков круглосуточно</span>
                    </Block>
                    <Block>
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
                </Column>
            </Container>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
    padding: auto 0px 60px 0px;
    @media(max-width: 768px){
        position: relative;
            padding: 83px 0px 20px 0px;
    }
`

const Container = styled.div`
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    .first{
        max-width: 270px;
    }
    @media(max-width: 1049px){
        flex-wrap: wrap;
        .first{
            order: 5;
            max-width: none;
        }
    }
    @media(max-width: 768px){
            flex-direction: column;
            gap: 10px;
            align-items: center;
            .first{
            margin-top: 20px;
        }
        }
`
const Column = styled.div`
    letter-spacing: 0.04em;
    line-height: 1.5;
    &:not(:first-child){
        margin-top: 30px;
        @media(max-width: 768px){
            margin:  0px;
        }
    }
    @media(max-width: 768px){
           text-align: center;
        }
    h4{
       
        font-weight: 700;
        margin-bottom: 10px;
        @media(max-width: 768px){
            margin:  0px;
        }
    }
    p{      
        font-weight: 300;
        @media(max-width: 768px){
            margin: 10px 20px 0;
            font-size: 10px;
        }
        }
    ul{
        font-weight: 300;
        font-size: 12px;
        a:hover{
            text-decoration: underline;
        color: #43FFD2;
        }
        @media(max-width: 768px){
                display: none;
        }
    }
    img{
        @media(max-width: 768px){
           position: absolute;
           top: 0;
           left: calc(50% - 19px);
        }
    }
    .link-footer{
        display: flex;
    max-width: 160px;
    transition: all 0.2s ease;
    &:not(:first-child){
               margin-top: 20px;
               @media(max-width: 768px){
            margin-top:  10px;
        }
    }
    &:hover{
        text-decoration: underline;
    }
    @media(max-width: 768px){
          justify-content: center;
          max-width: none;
        }
    }
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .span{
        font-weight: 400;
font-size: 14px;
    }
    span{
        font-weight: 300;
        font-size: 10px;
        letter-spacing: 0.1em;
    }
    a:hover{
        text-decoration: underline;
    }
`

const Social = styled.div`
    margin-top: 18px;
    display: flex;
    gap: 20px;
    a{
        &:hover{
            animation: bounce 1s;
    }
    }
    img{
        position: static;
        width: 24px;
        height: 24px;
    }
    @media(max-width: 768px){
            margin:  0px auto;
        }
`
const Link = styled.a`
    display: flex;
    max-width: 160px;
    transition: all 0.2s ease;
    &:not(:first-child){
               margin-top: 20px;
               @media(max-width: 768px){
            margin-top:  10px;
        }
    }
    &:hover{
        text-decoration: underline;
    }
    @media(max-width: 768px){
          justify-content: center;
          max-width: none;
        }
`
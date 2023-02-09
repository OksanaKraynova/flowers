import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Catalog = () => {
    return (
        <Wrapper>
            <Container className='container'>
                <h2 className='title'>Каталог</h2>
                <Cards>
                    <Description>
                        <p>У нас самый большой выбор цветов, букетов, открыток и подарков. Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором</p>
                        <p>Ознакомьтесь с нашими разделами каталога</p>
                    </Description>
                    <Card className='blur small'>
                        <h4 className='title-green'>готовые букеты из сухоцветов</h4>
                        <ul>
                            <li><span>букеты</span></li>
                            <li><span>для интерьера</span></li>
                            <li><span>Композиции</span></li>
                        </ul>
                        <NavLink to='/catalog' className='link-pink'>смотреть каталог</NavLink>
                    </Card>
                    <Card className='flower ' >
                        <h4 className='title-green'>Цветы</h4>
                        <ul>
                            <li><span>Сборные букеты</span></li>
                            <li><span>Монобукеты</span></li>
                            <li><span>Композиции из цветов</span></li>
                            <li><span>розы</span></li>
                            <li><span>свадебные</span></li>
                        </ul>
                        <NavLink to='/catalog' className='link-pink'>смотреть каталог</NavLink>
                    </Card>
                    <Card className='blur dop'>
                        <h4 className='title-green'>дополнительно</h4>
                        <ul>
                            <li> <span>шары</span></li>
                            <li> <span>игрушки</span></li>
                            <li><span>открытки</span></li>
                            <li> <span>упаковка</span></li>
                        </ul>
                        <NavLink to='/catalog' className='link-pink'>смотреть каталог</NavLink>
                    </Card>
                </Cards>
            </Container>
        </Wrapper>
    );
};

export default Catalog;

const Wrapper = styled.section`
    background: url(../images/green.png) center right no-repeat;
    padding: 100px 0px 200px 0px;
    background-color: #000; 
    overflow: hidden;
    position: relative;
    @media(max-width: 1109px){
        padding-top: calc(0px + (100 - 0) * ((100vw - 768px) / (1110 - 768)));
        padding-bottom: calc(100px + (200 - 100) * ((100vw - 320px) / (1110 - 320)));
    }
    @media(max-width: 768px){
        padding-top: 0;
    }
    &:before{
        content: '';
        background: url(../images/pink.png)  -20% bottom no-repeat;
        position: absolute;
        width: 100%;
        height: 100%;
       @media(max-width: 768px){
           top: 200px;
           left: 200px;
transform: rotate(90deg);
       }
      
    }
`
const Container = styled.div`
    letter-spacing: 0.04em;
    line-height: 26px;
    p{
        font-weight: 300;
        font-size: 20px;
        &:first-child{
            margin-bottom: 30px;
        }
    }
`

const Cards = styled.div`
    text-transform: uppercase;
    display: flex;
    flex-wrap:wrap;
    gap: 30px;
    position: relative;
    .flower{
        position: absolute;
        top: 235px;
        left: 20px;
        @media(max-width: 1115px){
            position: static;
            position: relative;
            top: 0;
            left: 0;
        }
        @media(max-width: 768px){
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(20px);
            border-radius: 10px;
        }
    }
    .small{
        max-width: 445px;
        @media(max-width: 1115px){
            max-width: none;
    }
    }
    .dop{
        margin-left: auto;
        @media(max-width: 1109px){
       margin-left: 0;
    }
    }
`
const Card = styled.div`
width: 540px;
padding: 30px 0px 72px 30px;
position: relative;
@media(max-width: 1109px){
       flex: 0 0 48%;
    }
    @media(max-width: 768px){
        flex: 1 1 100%;
        padding: 20px 20px 30px ;
    }
    @media(max-width: 649px){
       text-align: center;
    }
ul{
    margin-top: 10px;
    @media(max-width: 649px){
        text-align: center;
        li + li{
            margin-top: 6px;
        }
    }
}
    li{
        font-size: 18px;
        span{
            padding-left: 10px;
            display: inline;
            position: relative;
            &:before{
                content: '';
                width: 3px;
                height: 3px;
                background: #fff;
                position: absolute;
                border-radius: 50%;
                left: 0;
                top: calc(50% - 3px);
            }
        }
            @media(max-width: 1109px){
                font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1110 - 320)));
            }
            @media(max-width: 649px){
            text-align: center;
        }
    }
    a{
        position: absolute;
        right: 30px;
        bottom: 30px;
        @media(max-width: 649px){
            position: static;
            margin-top: 30px;
            display: flex;
            justify-content: center;
        }
    }
`
const Description = styled.div`
    max-width: 540px;
    margin-top: 10px;
    max-height: 125px;
    margin-left: auto;
    @media(max-width: 1109px){
       margin: 0;
       flex: 0 0 48%;
       max-height: none;
    }
    @media(max-width: 768px){
        display: none;
    }
    `



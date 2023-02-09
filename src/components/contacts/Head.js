import React from 'react';
import styled from 'styled-components'

const Head = () => {
    return (
        <>
            <Nav>Главная / контакты</Nav>
            <Title className='title'> контакты</Title>
            <Row>
                <Card className='blur'>
                    <span className='green'>время работы</span>
                    <p>с 10:00 до 21:00 <br /> без выходных</p>
                </Card>
                <Card className='blur'>
                    <span className='green'>Адрес</span>
                    <p>г. Минск, ул. Тимирязева 67, комн. 112</p>
                </Card>
                <Card className='blur'>
                    <span className='green'>Телефон</span>
                    <a href='tel:+71234567890'>+7 (123) 456-78-90</a>
                </Card>
                <Card className='blur'>
                    <span className='green'>E-mail</span>
                    <a href='mailto:zakaz@loverflower.by'>zakaz@loverflower.by</a>
                </Card>
            </Row>
        </>
    );
};

export default Head;

const Nav = styled.span``


const Title = styled.h2`
    margin: 46px 0px 40px 95px;
    @media(max-width: 998px){
        margin: 20px 0px ;
    }
`

const Row = styled.div`
    display: flex;
    gap: 30px;
    @media(max-width: 1109px){
        gap: 20px;
        flex-wrap: wrap;
    }
    @media(max-width: 768px){
        flex-direction: column;
    }
`
const Card = styled.div`
    height: 255px;
    padding: 72px 20px 0;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    flex: 255px;
    text-align: center;
    line-height: 1.5;
    @media(max-width: 1109px){
        font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
        flex: 49%;
    }
      @media(max-width: 768px){
          font-size: 14px;
        padding: 0;
        height: none;
        background: none;
        backdrop-filter: none;
        text-align: left;
    }
    span{
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: 0.04em;
    }
    p, a{
        margin-top: 30px;
        font-weight: 300;
        line-height: 1.3;        
        letter-spacing: 0.02em;
        @media(max-width: 768px){
            margin: 0px 0px 0px 0px;
        }
       
    }
`
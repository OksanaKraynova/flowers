import React from 'react';
import styled from 'styled-components'

const Cost = () => {
    return (
        <>
            <First>
                <h4 className='title-pink'>стоимость доставки:</h4>
                <List className='list'>
                    <li><span className='fat'>Бесплатно</span> – при заказе на сумму <span className='green'>от 900 рублей</span></li>
                    <li><span className='fat'>99 рублей</span> – при заказе на сумму <span className='green'>менее 900 рублей</span></li>
                    <li>Так же вы можете забрать ваш заказ самостоятельно по адресу: <span className='green'> <br /> г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00</span></li>
                </List>
            </First>
            <h4 className='title-pink'>Условия доставки:</h4>
            <List>
                <li>Доставка осуществляется по городу Минску в пределах МКАД <span className='green'>в любой день </span></li>
                <li>Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное время, праздники <span className='green'> оговариваются с менеджером</span></li>
            </List>
        </>
    );
};

export default Cost;

const First = styled.div`
    margin:  0 0 100px 110px;
    @media(max-width: 1109px){
        margin-left: 0;
        margin-bottom: calc(60px + (100 - 60) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        margin-bottom: 60px;
    }
    `

const List = styled.ul`
    font-weight: 300;           
    line-height: 1.3;
    margin-top: 20px;
    max-width:800px;
    @media(max-width: 1109px){
        margin-top: calc(10px + (20 - 10) * ((100vw - 768px) / (1110 - 768)));
        font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        margin-top: 10px;
        font-size: 14px;
    }
    .fat{
        font-weight: 700;
    }
    li + li{
        margin-top: 10px;
    }
    li{
        padding-left: 14px;
        position: relative;
        &:before{
            content: '';
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            left: 0;
            top: 10px;
            background-color: #fff;
        }
    }
`
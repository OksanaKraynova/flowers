import React from 'react';
import styled from 'styled-components'

const Tab1 = () => {
    return (
        <Wrapper>
            <Title className='title-pink'>Способы оплаты:</Title>
            <List>
                <li>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ</li>
                <li>НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ</li>
                <li>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</li>
                <li>КРИПТОВАЛЮТОЙ ОНЛАЙН</li>
            </List>
            <Title className='title-pink'>стоимость доставки:</Title>
            <List>
                <li>Бесплатно – при заказе на сумму <span className='green'>от 90 рублей</span> </li>
                <li>10 рублей – при заказе на сумму<span className='green'> менее 90 рублей</span></li>
                <li>Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное время, праздники <span className='green'>оговариваются с менеджером</span></li>
                <li>Так же вы можете забрать ваш заказ самостоятельно по адресу:<span className='green'> г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00 </span></li>
            </List>
            <Title className='title-pink'> Условия доставки:</Title>
            <p>Доставка осуществляется по городу Минску в пределах МКАД<span className='green'> в любой день с 09.00 до 22.00.</span> Доставка в ночное время осуществляется по договоренности с оператором</p>
        </Wrapper>
    );
};

export default Tab1;

const Wrapper = styled.div`
max-width: 880px;
 line-height: 1.5;
        letter-spacing: 0.02em;
    p {
        font-weight: 300;
        @media(max-width: 1109px){
        font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
    }
        @media(max-width: 768px){
            font-size: 14px;
        }
       
    }
`

const Title = styled.span`
display: inline-block;
        margin-bottom: 20px;
        @media(max-width: 768px){
            margin-bottom: 10px;
        }
`

const List = styled.ul`
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin-bottom: 60px;
    max-width: 747px;
    @media(max-width: 768px){
        margin-bottom: 40px;
    }
    li + li {
        margin-top: 10px;
    }
    li{
        padding-left: 30px;
        position: relative;
        
    @media(max-width: 1109px){
        font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
    }
        @media(max-width: 768px){
            font-size: 14px;
        }
        &:before{
            content: '';
            position: absolute;
            width: 4px;
            height:4px;
            border-radius: 50%;
            background-color: #fff;
            left: 13px;
            top: 11px;
        }
    }
`
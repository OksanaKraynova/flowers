import React from 'react';
import styled from 'styled-components'

const Addition = () => {
    return (
        <Wrapper className='blur' >
            <span className='title-pink'> Дополнительно:</span>
            <p>Доставка иному лицу возможна только в случае оплаты заказа заказчиком. Доставка осуществляется не ранее чем через 2 часа после оплаты заказа, но может быть ранее, если букет есть в наличии либо по договорённости
                с менеджером.<br />
                Время ожидания курьера составляет 15 минут.<br />
                В случае если на момент доставки цветов получателя нет либо нет возможности по иным причинам произвести доставку (указан неточный адрес, закрытая входная дверь, контрольно-пропускная система и др.), мы оставляем за собой право по собственному выбору:<br /></p>
                <ul>
                <li>оставить цветы тому, кто открыл дверь;</li>
                <li>с заказчиком согласовать повторную доставку, которая дополнительно оплачивается;</li>
                <li>отказаться от передачи цветов без возврата денежных средств.</li>
                </ul>
                <p>Если вы либо иной получатель не получили заказ, вам необходимо сообщить об этом менеджеру по телефону <span className='green'>+375 29 113 69 69.</span> </p>
            <span className='title-pink two'> Возврат денег:</span>
            <p>При отказе заказчика от заказа в течение двух часов, если заказ ещё не начал готовиться, средства возвращаются в полном объёме. Если же флорист начал подготовку, то заказчик имеет право на возврат 50% стоимости, либо, если ещё не был оплачен, то обязан оплатить 50%.
            </p>
            <p>Цветы надлежащего качества возврату и обмену не подлежат, а если имеются какие-либо недостатки в цветах – возврат производится лишь если эти недостатки не являются природными и естественными изъянами растения.
                Возврат денежных средств производится незамедлительно на тот счёт, с которого произошла оплата, их же поступление на счёт зависит от платёжной системы.</p>
        </Wrapper>
    );
};

export default Addition;


const Wrapper = styled.div`
    padding: 30px 33px;
    max-width: 930px;
    margin-top: 100px;
    @media(max-width: 1109px){
        margin-top: calc(60px + (100 - 60) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        margin-top: 60px;
        padding: 20px 10px ;
    }
    .title-pink{
        margin-bottom: 20px;
        display: inline-block;
        @media(max-width: 1109px){
        margin-bottom: calc(5px + (20 - 5) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        margin-bottom: 5px;
    }
    }
    ul{
        margin: 0 0  40px 10px;
        @media(max-width: 768px){
            margin-bottom: 25px;
        }
        li{
            padding-left: 13px;
            position: relative;
            &:before{
                content: '';
            position: absolute;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            left: 0;
            top: 15px;
            background-color: #fff;
            }
        }
    }
    p, li{
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: 0.04em;
        text-transform: none;
    }
    p + p{
        margin-top: 40px;
        @media(max-width: 768px){
            margin-top: 25px;
        }
    }
    .two{
        margin-top: 20px;
    }
`
import React from 'react';
import styled from 'styled-components'

const Pay = () => {
    return (
        <Wrapper>
            <h4 className='title-pink'>Способы оплаты:</h4>
            <Row>
                <Item className='blur'>
                    <span></span>
                    <p>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке</p>
                </Item>
                <Item className='blur'>
                    <span></span>
                    <p>НАЛИЧНЫМИ, БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с расчетного счета орагнизации</p>
                </Item >
                <Item className='blur'>
                    <span></span>
                    <p>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</p>
                </Item>
                <Item className='blur'>
                    <span></span>
                    <p>КРИПТОВАЛЮТОЙ</p>
                </Item>

            </Row>
        </Wrapper>
    );
};

export default Pay;

const Wrapper = styled.section``

const Row = styled.div`
    display: flex;
    gap: 30px;
    margin: 20px 0 100px 0;
    @media(max-width: 1109px){
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: calc(60px + (100 - 60) * ((100vw - 320px) / (1110 - 320)));
    }
    @media(max-width: 823px){
        justify-content: center;
    }
`


const Item = styled.div`
    font-weight: 300;
    line-height: 1.3;
    letter-spacing: 0.02em;
    padding: 20px 32px 0px 32px;
    height: 211px;
    width: 255px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media(max-width: 549px){
        font-size: 14px;
        width: 198px;
        height: 185px;  
    }
    
    span{
        width: 11px;
        height: 11px;
        background: #6B535F;
        border-radius: 50%;
        position: absolute;
        top: 20px;
    }
`
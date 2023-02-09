import React from 'react';
import styled from 'styled-components'

const Info = () => {
    return (
        <>
           <h2 className='title'>доставка <br /> <Span>и оплата</Span></h2> 
           <Block>
               <span className='pink'>Дорогие клиенты!</span>
               <p>Во время пандемии (COVID-19) компания Lover Flower призывает всех меньше контактировать с другими людьми для защиты себя и своих близких. Именно поэтому мы организовали <span className='green'>БЕСКОНТАКТНУЮ ДОСТАВКУ</span></p>
           </Block>
        </>
    );
};

export default Info;

const Block = styled.div`
    max-width: 606px;
    font-size: 14px;
    line-height: 1.5;
    padding-left: 36px;
    position: relative;
    margin: 24px 0 100px 60px;
    @media(max-width: 768px){
        margin: 55px 0px 60px 0px;
    }
    &:before{
        content: '';
        position: absolute;
        background: url(../images/!.png) top center / contain no-repeat;
        margin-top: 5px;
        left: 0;
        width: 25px;
        height: 60px;
    }
    p{
        margin-top: 10px;
    }
`

const Span = styled.span`
    margin-left: 95px;
`
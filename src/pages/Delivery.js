import React, {useEffect} from 'react';
import styled from 'styled-components'
import Addition from '../components/delivery/Addition';
import Cost from '../components/delivery/Cost';
import Info from '../components/delivery/Info';
import Pay from '../components/delivery/Pay';

const Delivery = () => {
    useEffect(() => {
        document.title = 'Lower Flower - доставка и оплата'
    }, [])
    return (
        <Wrapper>
            <Container className='container'>
                <Nav>Главная / доставка и оплката</Nav>
                <Info />
                <Pay />
                <Cost />
                <Addition />
            </Container>
        </Wrapper>
    );
};

export default Delivery;

const Wrapper = styled.div`
    background: url(../images/delivery.png) top left / cover no-repeat;
    padding: 115px 0px 200px 0px;
    @media(max-width: 1109px){
        padding-bottom: calc(160px + (200 - 160) * ((100vw - 320px) / (1110 - 320)));
        padding-top: calc(100px + (115 - 100) * ((100vw - 320px) / (1110 - 320)));
    }
    @media(max-width: 768px){
        background-position: right bottom ;
            }
`

const Container = styled.div`
    font-size: 20px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
   
`
const Nav = styled.span`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    margin-bottom: 60px;
    display: inline-block;
    @media(max-width: 1109px){
        margin-bottom: calc(20px + (60 - 20) * ((100vw - 768px) / (1110 - 768)));
    }
    @media (max-width: 768px) {
       margin-bottom: 20px;
    }
`
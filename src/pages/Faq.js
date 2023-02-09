import React, {useEffect} from 'react';
import styled from 'styled-components'
import Accordion from '../components/faq/Accordion';
import { accordionData } from '../db/accordion'

const Faq = () => {
    useEffect(() => {
        document.title = 'Lower Flower - вопросы и ответы'
    }, [])

    return (
        <Wrapper>
            <Container className='container'>
                <Nav>Главная / faq</Nav>
                <h2 className='title'>faq</h2>
                {
                accordionData.map(({title, content}) => (
                    <Accordion title={title} key={title} content={content} />
                ))
            }
            </Container>
        </Wrapper>
    );
};

export default Faq;

const Wrapper = styled.div`
    padding: 100px 0px 200px 0px;
    background: url(../images/fac.png) top left / cover no-repeat;
    @media(max-width: 1109px){
        padding-bottom: calc(100px + (200 - 100) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        padding-bottom: 100px;
    }
`

const Container = styled.div`
    font-size: 20px;
    h2{
        position: relative;
        padding-left: 95px;
        margin: 46px 0 40px 0;
        @media(max-width: 768px){
            padding-left: 0;
            margin: 20px 0px 60px 0px;
        }
        &:before{
            content: '';
            position: absolute;
            width: 65px;
            height: 1px;
            background-color: #43FFD2;
            left: 0;
            top: 50%;
            @media(max-width: 768px){
                display: none;
            }
        }
    }
`

const Nav = styled.span`
    font-size: 12px;
`
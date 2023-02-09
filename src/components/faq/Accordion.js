import React, { useState } from 'react';
import styled from 'styled-components'

const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false)

    return (


        <Item>
            <Header className='green' onClick={() => setIsActive(!isActive)}>
                <Title >{title}</Title>
                <Plus><span className={isActive ? 'rotate' : ''}>+</span></Plus>
            </Header>
            <Body>
                {isActive && <p>{content}</p>}
            </Body>
        </Item>

    );
};

export default Accordion;

const Item = styled.div`
    border: 1px solid #43FFD2;
    max-width: 825px;
    padding:20px ;
    margin-top: 10px;
    &:first-child{
        margin-top: 0;
    }
    @media(max-width: 768px){
padding: 10px;
    }
   
`


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 824px){
        gap: 20px;
        align-items: flex-start;
    }
`


const Body = styled.div`
p{
    margin: 20px 0 10px 0;
    @media(max-width: 768px){
        margin: 10px 0px 0px 0px;
    }
}
    font-weight: 300;
    font-size: 20px;
    line-height: 1.5;
   
`

const Title = styled.span`
    line-height: 1.5;
    @media(max-width: 1109px){
        font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        font-size: 14px;
        margin-top: 7px;
    }
`

const Plus = styled.button`
    display: flex;
    width: 15px;
    height: 15px;
    align-items: center;
    justify-content: center;
    span{
        font-weight: 200;
        font-size: 40px;
        transition: transform 0.2s;
    }
    .rotate{
        transform: rotate(45deg);
    }
`
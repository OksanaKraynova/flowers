import React, { useState } from 'react';
import styled from 'styled-components'
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tabs = ({product, user}) => {

    const [activeTab, setActiveTab] = useState('tab1')
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
    return (
        <Wrapper>
            <Btns>
                <Btn className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}>доставка и оплата</Btn>
                <Btn className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}>отзывы</Btn>
                            </Btns>
            {activeTab === 'tab1' ? <Tab1 /> :  <Tab2 product={product} user={user}/>}
        </Wrapper>
    );
};

export default Tabs;

const Wrapper = styled.section`
    margin: 70px 0 0 0;
    text-transform: uppercase;
    font-size: 20px;
`
const Btns = styled.div`
    border-bottom: 1px solid #555555;
    display: flex;
    max-width: 716px;
    margin: 0 auto;
    margin-bottom: 60px;
    @media(max-width: 1109px){
        margin-bottom: calc(20px + (60 - 20) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        margin-bottom: 20px;
    }
`


const Btn = styled.button`
    font-weight: 300;
     line-height: 1.5;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #555555;
    width: 358px;
    padding: 30px 0;
    font-size: inherit;
    @media(max-width: 1109px){
      font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
        padding-bottom: calc(16px + (30 - 16) * ((100vw - 768px) / (1110 - 768)));
        padding-top: calc(16px + (30 - 16) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        padding: 16px 0;
        font-size: 14px;
    }
    &.active{
        color: #43FFD2;
        font-weight: 700;
        border-bottom: 3px solid #43FFD2;
    }
`
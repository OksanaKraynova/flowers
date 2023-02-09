import React from 'react';
import styled from 'styled-components'
import One from '../components/corporate/One'
import Request from '../components/corporate/Request';

const Corporate = () => {
    return (
        <Wrapper>
            <div className='container'>
                <One />
                <Request/>
            </div>


        </Wrapper>
    );
};

export default Corporate;
const Wrapper = styled.div`
    padding: 115px 0px 130px 0px;
    background: url(../images/corp.png) top left / cover no-repeat;
    text-transform: uppercase;
    h2{
        margin: 46px 0 0 90px;
        @media(max-width: 1109px){
            margin-top: calc(20px + (46 - 20) * ((100vw - 768px) / (1110 - 768)));
            margin-left: calc(0px + (90 - 0) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            margin-top: 20px;
            margin-left: 0;       
        }
    }
    @media(max-width: 1109px){
        padding: 100px 0;
    }
`

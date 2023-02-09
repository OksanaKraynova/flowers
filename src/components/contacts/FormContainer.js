import React from 'react';
import styled from 'styled-components'
import Form from '../Form';

const FormContainer = () => {
    return (
        <Wrapper>
            <h2 className='title'>напишите нам</h2>
           
            <Form className='form' />
            
        </Wrapper>
    );
};

export default FormContainer;

const Wrapper = styled.section`
    margin: 140px 0px 150px 0px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media(max-width: 1109px){
        margin-top: calc(60px + (140 - 60) * ((100vw - 768px) / (1110 - 768)));
        margin-bottom: calc(60px + (150 - 60) * ((100vw - 768px) / (1110 - 768)));
        flex-wrap: wrap;
    }
    @media(max-width: 768px){
        margin: 60px 0;

    }
    h2{
        max-width: 605px;
        text-align: right;
        @media(max-width: 1099px){
            max-width: none;
        }
        @media(max-width: 998px){
            margin-bottom: 45px;
            text-align: left;
        }
    }
    .form{
        @media(max-width: 1099px){
            width: 100%;
            flex-grow:1;
        }
    }
`
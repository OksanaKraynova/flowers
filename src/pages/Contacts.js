import React, {useEffect} from 'react';
import styled from 'styled-components'
import FormContainer from '../components/contacts/FormContainer';
import Head from '../components/contacts/Head';
import Map from '../components/contacts/Map';

const Contacts = () => {
    useEffect(() => {
        document.title = 'Lower Flower - контакты'
    }, [])
    return (
        <Wrapper>
            <div className='container'>
                <Head />
                <FormContainer/>
                <Map />
            </div>
        </Wrapper>
    );
};

export default Contacts;

const Wrapper = styled.div`
    padding: 115px 0px 200px 0px;
    background: url(../images/ct.png) top  left / cover no-repeat;
    text-transform: uppercase;
    @media(max-width: 1109px){
        padding-top: 100px;
        padding-bottom: calc(130px + (200 - 130) * ((100vw - 320px) / (1110 - 320)));
    }
    h5{
        font-size: 20px;
        @media(max-width: 1109px){
            font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            font-size: 14px;
        }
    }
`
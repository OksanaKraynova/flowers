import React from 'react';
import styled from 'styled-components'
import Form from '../Form';

const FormMain = () => {
    return (
        <Wrapper>
            <Container className='container'>
                <Image>
                    <img alt='' src='/images/form/leaves.png' />
                    
                </Image>
                <Lf>
                    <img src='/images/form/lf.png' alt='' />
                </Lf>
                <h2 className='title'>остались <span>вопросы?</span></h2>
              
                    
                    <Form id='form-main' />
              
            </Container>
        </Wrapper>
    );
};

export default FormMain;

const Wrapper = styled.section`
background-color: #0F2222;
position: relative;
@media(max-width: 998px){
    overflow: hidden;
}
&:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: url(../images/form/bg.png) top left  no-repeat;
    pointer-events: none;
}
    
`

const Container = styled.div`
    display: flex;
    padding-top: 22px ;
    padding-bottom: 52px;
    @media(max-width: 998px){
        flex-direction: column;
    }
`




const Image = styled.div`
    position: absolute;
    left: 0;
/* z-index: 10; */
top: -60px;
    @media(max-width: 998px){
       left: 40%;
         width: 70%;   
        top: -230px;
        img{
            transform: rotate(90deg);
        }
    }
    @media(max-width: 649px){
       left: 25%;  
       top: -300px;
    }
    @media(max-width: 499px){
       left: 5%;  
    }
`

const Lf = styled.div`
    position: absolute;
    top: 40%;
    left: 25%;
    @media(max-width: 998px){
        top: 150px;
        left: 225px;
        z-index: 2;
    }
    @media(max-width: 649px){
        display: none;
    }
`
import React from 'react';
import styled from 'styled-components'

const Works = () => {
    return (
        <Wrapper >
            <Container className='container'>
                <Photos>
                    <Photo>
                        <img alt='' src='/images/works/1.jpg' />
                    </Photo>
                    <Photo>
                        <img alt='' src='/images/works/2.jpg' />
                    </Photo>
                    <Photo>
                        <img alt='' src='/images/works/3.jpg' />
                    </Photo><Photo>
                        <img alt='' src='/images/works/4.jpg' />
                    </Photo>
                </Photos>
                <Social>
                    <Image src='/images/works/our.png' alt='' />
                    <a href='https://instagram.com' target='_blank' rel='noreferrer' >
                        <img alt='' src='/images/insta.svg' />
                    </a>
                    <a href='https://whatsapp.com' target='_blank' rel='noreferrer'>
                        <img alt='' src='/images/whatsapp.svg' />
                    </a>
                    <a href='tel:+1234567890' >
                        <img alt='' src='/images/phone.svg' />
                    </a>
                </Social>
            </Container>
        </Wrapper>
    );
};

export default Works;

const Wrapper = styled.section`
margin-top: 160px;
    padding: 100px 0px 200px;
    background: url(../images/bg2.png) top left  / cover   no-repeat;
    @media(max-width: 1109px){
        margin-top: 0;
        padding-top: calc(25px + (100 - 25) * ((100vw - 320px) / (1110 - 320)));
        padding-bottom: calc(100px + (200 - 100) * ((100vw - 320px) / (1110 - 320)));
    }
    @media(max-width: 699px){
        background-position: bottom right;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 1109px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Photos = styled.div`
    display: flex;
    gap: 30px;
    @media(max-width: 1149px){
        gap: 10px;
    }
    @media(max-width: 1109px){
        order: 2;
    }
    @media(max-width: 699px){
        flex-wrap: wrap;
        justify-content: center;
    }

`

const Photo = styled.div`
    @media(max-width: 699px){
        flex: 0 1 48%;
        img{
            width: 100%;
        }
    }
`



const Social = styled.div`
    margin: auto 0 0 30px ;
    position: relative;
    flex-grow: 1;
    text-align: right;
    @media(max-width: 1109px){
        margin: 0;
        display: flex;
        align-items: center;
        width: 100%;
    }
    a + a {
        margin-left: 30px;
        @media(max-width: 649px){
            margin-left: 15px;
        }
    }
    a{
        transition: transform 0.2s ease;
    }
    a{
        &:hover{
            animation: bounce 1s;
            transform: scale(1.1);
        }
    img{
        width: 40px;
        height: 40px;
        }
    }
`

const Image = styled.img`
    position: absolute;
    top: -202px;
    left: 0;
    @media(max-width: 1109px){
        position: static;
        margin-right: auto;
    }
    @media(max-width: 649px){
       width: 251px;
       margin-bottom: 10px;
    }
    @media(max-width: 449px){
       width: 150px;
       
    }
`
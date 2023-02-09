import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Slider from '../Slider';

const Pop = ({addToCart}) => {

    return (
        <Wrapper>
            <Container className='container'>
                <Title className='title'>Популярные <span>Букеты</span></Title>
                <p>Самые любимые композиции наших клиентов</p>
           
            <SliderContainer>
              <Slider addToCart={addToCart} />
             
            </SliderContainer>
            
                <NavLink to='/catalog' className='link-pink'>
                    <span>смотреть весь каталог</span>
                    <img alt='' src='/images/arrow-pink.svg' />
                </NavLink>
            </Container>

        </Wrapper>
    );
};

export default Pop;

const Wrapper = styled.section`
    padding-bottom: 181px;
    background: url(../images/bg-pop.png) top right no-repeat;
    position: relative;
    @media(max-width: 1089px){
        background-image: none;
    }
    @media(max-width: 1109px){
        padding-bottom: calc(95px + (181 - 95) * ((100vw - 320px) / (1110 - 320)));
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: url(../images/colors.png)   no-repeat;
        z-index: -1;
        bottom: -250px;
        @media(max-width: 768px){
display: none;
        }
    }
`

const Container = styled.div`
    p{
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.02em;
        text-align: center;
        margin-top: 10px;
    }
    .link-pink{
        text-decoration: none;
        margin-top: 60px;
        display: flex;
        align-items: center;
        transition: text-decoration 0.2s ease;
        @media(max-width: 768px){
            justify-content: center;
        }
            span{
                position: relative;
                &:after{
                    content: '';
                    height: 1px;
                    position: absolute;
                    background: #D978AC;
                    left: 0;    
                    right: 0;
                    bottom: -2px;
                    opacity: 0;
                    transform-origin: left center;
                    transform: scaleX(0);
                    transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                }
            }   
                &:hover{
                    span:after{
                            opacity: 1;
                            transform: scaleX(1);
                        }
                    
                }
    img{
        margin-left: 6px;
    }
    }
`

const SliderContainer = styled.div`
    
    position: relative;
    margin: 0 auto;
    margin-top: 76px;
   
    @media(max-width: 1309px){
                
    }
    @media(max-width: 1089px){
     
        margin-top: calc(25px + (76 - 25) * ((100vw - 320px) / (1110 - 320)));
}
@media(max-width: 768px){

}
`

const Title = styled.h2`
@media(max-width: 1089px){
    text-align: center;
}
    span{
        margin-left:380px;
        @media(max-width: 1089px){
            margin: 0;
        }
    }
`

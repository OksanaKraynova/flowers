import React from 'react';
import styled from 'styled-components'

const Steps = () => {
    return (
        <Wrapper>
            <Container className='container'>
                <h2 className='title'>Как сделать заказ</h2>
                <Block>
                    <Line></Line>
                    <Column>
                        <Row className='first'>
                            <span>1 шаг</span>
                            <p>Выберите какие цветы или подарки вы хотите купить</p>
                        </Row>
                        <Row className='second'>
                            <span>2 шаг</span>
                            <p>Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp</p>
                        </Row>
                        <Row className='third'>
                            <span>3 шаг</span>
                            <p>Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне</p>
                        </Row>
                    </Column>
                    <Column>
                        <Row>
                            <span>4 шаг</span>
                            <p>Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен</p>
                        </Row>
                        <Row>
                            <span>5 шаг</span>
                            <p>Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга</p>
                        </Row></Column>
                </Block>
            </Container>
        </Wrapper>
    );
};

export default Steps;

const Wrapper = styled.section`
    padding-bottom: 160px;
    background: url(../images/step-bg.png) no-repeat;
    position: relative;
    @media(max-width: 1109px){
        padding-bottom: calc(60px + (160 - 60) * ((100vw - 320px) / (1110 - 320)));
    }
    @media(max-width: 889px){
       background-size: 60%;
    }
    
`

const Container = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.04em;
    line-height: 1.4;
    position: relative;
        background:  url(../images/line.png)  right 250px / contain no-repeat;
        @media(max-width: 1209px){
            background-position:  96% 250px;
        }
        @media(max-width: 889px){
            background: none;
        }
        &::after{
            content: '';
            position: absolute;
            width: 300px;
            height: 140px;
            right: -60px;
            bottom: -60px;
            background: url(../images/lover.png) no-repeat;
            @media(max-width: 1209px){
                right: 0;
            }
            @media(max-width: 889px){
                bottom: -80px;
                right: 0px;
                width: 137px;
                height: 80px;
                background: url(../images/flower.png) no-repeat;
            }
        }
        
    

    h2{
        margin-bottom: 15px;
        max-width: 864px;
        @media(max-width: 889px){
            text-align: center;
            max-width: none;
        }
    }
`

const Block = styled.div`
    margin: 0px 106px 0px auto;
    display: flex;
    gap: 115px;
    position: relative;
    padding-top: 50px;
    max-width: 685px;
    @media(max-width:1109px){
        margin-right: calc(25px + (106 - 25) * ((100vw - 889px) / (1110 - 868)));
        gap: calc(25px + (115 - 25) * ((100vw - 868px) / (1110 - 889)));
        justify-content: flex-end;
    }
    @media(max-width: 889px){
        display: block;
        max-width: 100%;
        margin: 0;
    }
`

const Line = styled.div`
    position: absolute;
    width: 65px;
    height: 10px;
    background: #D978AC;
    top: 0;
    left: 0;
    @media(max-width:1109px){
        display: none;
    }
`

const Column = styled.div`
    div + div{
        margin-top: 40px;
        @media(max-width: 889px){
            margin-top:  0px;
        }
    }
    .first{
        @media(max-width: 889px){
        max-width: 160px;
        }
    }
     .second{
        @media(max-width: 889px){
        max-width: 230px;
        margin-right: 10%;
        }
        @media(max-width: 649px){
        margin-right: 0;
        }
    }
    .third{
        @media(max-width: 889px){
        max-width: 240px;
        margin: 0 auto;
        }
    }
`

const Row = styled.div`
max-width: 285px;
@media(max-width: 889px){
    max-width: none;
    margin-left: auto;
    margin-bottom: 20px;
}
    span{
        font-weight: 700;
        font-size: 30px;
        line-height: 44px;
             color: #D978AC;
             margin-bottom: 12px;
             display: inline-block;
             
    }
`
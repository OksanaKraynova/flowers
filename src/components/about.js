import React from 'react';
import styled from 'styled-components'

const AboutWrapper = () => {
    return (
        <Wrapper>
            <div className='container'>
                <p>Главная / о нас</p>
                <h2 className='title'>О нас </h2>
                <Block>
                    <h4 className='green first'>Lover<br /> flower</h4>
                    <div className='about-block'>
                        <span>молодая команда разных людей с одинаковыми ценностями.</span>
                        <p>Мы считаем, что удовольствие от качества длится дольше, чем удовольствие от низкой цены. И поэтому в создание нашей букетерии мы вложили все, чем располагаем: душу, сердце, время и мечты! Мы готовы обещать вам только то, что можем сделать. А делаем мы только самое качественное, самое интересное и обязательно уникальное. Мы всегда честны со своими клиентами во всем – в нашем каталоге только те букеты, которые вы действительно сможете купить.</p>
                    </div>
                </Block>
                <Block>
                    <h4 className='green'>гарантии</h4>
                    <p>Каждый цветок уникален и чтобы вы были уверены в качестве, мы пришлем вам фотографию именно вашего букета до его отправки получателю. Вся предоставленная Вами информация конфиденциальна и будет известна только нам и курьеру для осуществления доставки.</p>
                </Block>
                <Block>
                    <h4 className='green'>Заказ букетов на сайте компании Lower Flower – это:</h4>
                    <List>
                        <li>выбор оттенков и сортов цветков в любое время года;   </li>
                        <li>отправка фото готовой композиции перед отправкой;</li>
                        <li>возможность заказать цветы с доставкой в течение часа;</li>
                        <li>выгодные цены – на сайте только те варианты, что Вы сможете купить; </li>
                        <li>полная конфиденциальность по заказу; </li>
                        <li>мы подбираем открытку, воздушные шар, подарок по Вашему желанию;</li>
                        <li> в нашем уютном цветочном магазине цветы, которые приятно дарить.</li>
                    </List>
                </Block>
                <Text>Природная гармония цвета, неповторимость бутонов и Ваши чувства в нежных лепестках не оставят никого равнодушным.
                    <p>Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него душу!</p>
                </Text>
            </div>

        </Wrapper>
    );
};

export default AboutWrapper;

const Wrapper = styled.section`
    background: url(../images/about-bg.png) top left / cover no-repeat;
    padding: 103px 0px 200px 0px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    @media(max-width: 1109px){
        padding-bottom: calc(115px + (200 - 115) * ((100vw - 320px) / (1110 - 320)));
    }
    h2{
        margin: 46px 0px 98px 95px;
        @media(max-width: 1109px){
            margin-top: calc(20px + (46 - 20) * ((100vw - 320px) / (1110 - 320)));
            margin-left: calc(50px + (95 - 50) * ((100vw - 320px) / (1110 - 320)));
            margin-bottom: 80px;
        }
    }
`
const Block = styled.div`
        font-size: 20px;
        font-weight: 300;
        margin-left: 135px;
        @media(max-width: 1109px){
            margin-left: calc(0px + (135 - 0) * ((100vw - 768px) / (1110 - 768)));
            font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
                margin-left: 0;
                font-size: 14px;
            }
        &:not(:first-child){
            margin-top: 100px;
            @media(max-width: 1109px){
                margin-top: calc(60px + (100 - 60) * ((100vw - 768px) / (1110 - 768)));
            }
            @media(max-width: 768px){
                margin-top: 60px;
            }
        }
        p{
            line-height: 1.5;
            max-width: 825px;
        }
        .about-block{
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(20px);
            max-width: 700px;
            padding: 40px 20px;
            margin-left: auto;
            @media(max-width: 768px){
                padding: 10px;
            }
        span{
            letter-spacing: 0.02em;
        }
            p{
                margin-top: 20px;
                text-transform: none;
            }
        }
        h4{
            font-family: 'Cormorant';
            font-weight: 400;
            font-size: 60px;
            line-height: 1.1;
            display: inline-block;
            margin-bottom: 20px;
            max-width: 700px;
            @media(max-width: 1109px){
                font-size: calc(20px + (60 - 20) * ((100vw - 320px) / (1110 - 320)));
                margin-bottom: 10px;
            }
           
        }
        .first{
            padding-right: 80px;
            position: relative;
            @media(max-width: 768px){
                padding-right: 30px;
            }
                &:after{
                    content: '';
                    position: absolute;
                    width: 60px;
                    height: 1px;
                    background-color: #43FFD2;
                    right: 0;
                    bottom: 31px;
                    @media(max-width: 768px){
                        width: 20px;
                        bottom: 16px;
                    }
            }
        }

`

const List = styled.ul`
    margin-left: auto;
    max-width: 587px;
    text-transform: none;
    line-height: 1.7;
    @media(max-width: 768px){
        margin-left: 0;
            }
    li{
        padding-left: 17px;
        position: relative;
        &:before{
            content: '';
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color:#fff;
            left: 0;
            top: 15px;
            @media(max-width: 768px){
                top: 10px;
            }
        }
    }
`

const Text = styled.div`
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 60px;
    line-height: 1.1;
    margin-top: 162px;
    @media(max-width: 1109px){
                margin-top: calc(66px + (162 - 66) * ((100vw - 768px) / (1110 - 768)));
                font-size: calc(20px + (60 - 20) * ((100vw - 768px) / (1110 - 768)));
            }
            @media(max-width: 768px){
                margin-top: 66px;
                font-size: 20px;
                line-height: 1.2;
            }
    p{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.02em;
        max-width: 445px;
        margin: 40px 0 0 190px;
        @media(max-width: 1109px){
                margin-top: calc(24px + (162 - 24) * ((100vw - 768px) / (1110 - 768)));
                margin-left: calc(0px + (190 - 0) * ((100vw - 768px) / (1110 - 768)));
                font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
            }
            @media(max-width: 768px){
                margin: 24px 0 0 0 ;
                font-size: 14px;
                line-height: 1.2;
            }
    }
`
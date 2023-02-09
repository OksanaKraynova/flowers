import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import styled from 'styled-components'
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const Item = ({ image, name, cost, oldCost, id, count, costTotal, addToCart }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let navigate = useNavigate()
    const [data, setData] = useState({ name, image, id, cost, costTotal, oldCost, count })
    const increment = () => {
        setData(() => {
            return {
                ...data,
                count: data.count + 1,
                costTotal: (data.count + 1) * data.cost
            }
        })
    }
    const decrement = () => {
        setData(() => {
            const newCount = data.count - 1 > 1 ? data.count - 1 : 1;
            return {
                ...data,
                count: newCount,
                costTotal: newCount * data.cost
            }
        })

    }
    const goBack = () => {
        navigate(-1)
    }
    const order = () => {
        addToCart(data)
    }
    return (
        <Wrapper>
            <Column className="row">

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    direction={"vertical"}
                    spaceBetween={20}
                    slidesPerView={2}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="swiper-first"
                    key={name}
                >
                    <SwiperSlide key={1}>
                        <img src={image} alt='' />
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <img src={image} alt='' />
                    </SwiperSlide>
                    <SwiperSlide key={3}>
                        <img src={image} alt='' />
                    </SwiperSlide>

                </Swiper>
                <Swiper className='swiper-second'
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    key={id}
                >
                    <SwiperSlide key={4}>
                        <img src={image} alt='' />
                    </SwiperSlide>
                    <SwiperSlide key={5}>
                        <img src={image} alt='' />
                    </SwiperSlide>
                    <SwiperSlide key={6}>
                        <img src={image} alt='' />
                    </SwiperSlide>
                </Swiper>
            </Column>
            <Column>
                <button onClick={goBack}  ><img alt='назад' src='/images/arrows.svg' /> НАзад</button>
                <Name>{name}</Name>
                <Price className="title-green">{data.cost}.00 ₽ {data.oldCost && <span>{oldCost}.00 ₽</span>}</Price>
                <Structure><span>Состав:</span> Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза</Structure>
                <Structure>Завораживающая глубина ваших чувств передана огненными красками этого букета</Structure>
                <Tegs>
                    <p><span>Категории:</span> 8 марта, Букет на 14 февраля, Букет на праздник, Букеты цветов на День рождения, Композиции из цветов, Композиции из цветов в коробке</p>
                    <p><span>Метки:</span> Для начальника, Мужские букеты</p>
                </Tegs>
                <Row>
                    <button className="link link__transparent" onClick={order}>В корзину</button>
                    <Counter className='counter'>
                        <button onClick={decrement}>-</button>
                        <span>{data.count}</span>
                        <button onClick={increment}>+</button>
                    </Counter>
                </Row>
            </Column>
        </Wrapper>
    );
};

export default Item;

const Wrapper = styled.div`
    display: flex;
    margin-top: 60px;
    gap: 30px;
    @media(max-width: 1109px){
                gap: 20px;
            }
            @media(max-width: 768px){
                flex-direction: column;
                margin-top: 20px;
                padding-top: 35px;
                position: relative;
            }
    .row{
        position: relative;
        @media(max-width: 998px){
            position: static;       
        }
        .swiper-button-prev, .swiper-button-next{
            position: absolute;
            left: 70px;
            width: 20px;
            height: 20px;
            z-index: 9;
            @media(max-width: 998px){
                top: 50%;
            }
        }  
        .swiper-button-prev{
            top: 0px;
            background: url(../images/arrows.svg) no-repeat;
            @media(max-width: 998px){
                top: 50%;
                transform: rotate(-90deg);
                left: 0;
            }
        }
        .swiper-button-next{
            bottom: 0;
            background: url(../images/arrows.svg);
            transform: rotate(180deg);
            @media(max-width: 998px){
                bottom: none;
                left: calc(100% - 20px);
                transform: rotate(90deg);
               
            }
        }
        display: flex;
        position: relative;
        .swiper-first {
            position: static;
            overflow: hidden;
            height: 390px;
            width: 160px;
            margin: 30px 30px 0 0 ;
            @media(max-width: 1109px){
                margin-right: 10px;
            }
            @media(max-width: 998px){
                display: none;
            }
                .swiper-slide{
                    height: 185px;
                    overflow: hidden;
                }
                img{
                    width: 100%;
                    max-height: 185px;
                }
            }
       
        .swiper-second {
            position: static;
            overflow: hidden;
            width: 350px;
            @media(max-width: 998px){
            position: relative;       
        }
            .swiper-wrapper{
                height: 100%;
                display: flex;
            }
            .swiper-slide{
                width: 350px;
                img{
                width: 350px;
                height: 450px;
                object-fit: cover;
            }
            }
        }
    }
`

const Column = styled.div`
    text-transform: uppercase;
    flex: 49%;
    height: 450px;
    button{
        display: flex;
        text-transform: uppercase;
        align-items: center;
        @media(max-width: 768px){
            position: absolute;
            top: 0;
        }

        img{
            transform: rotate(-90deg);
            margin: 0px 6px 0px 0px;
        }
    }
    button{
        width: 255px;
    }
`

const Name = styled.p`
    font-family: 'Cormorant';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.02em;
    margin-top: 20px;
    @media(max-width: 1109px){
        font-size: calc(20px + (40 - 20) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
        font-size:20px;
        margin-top: 0;
    }
`

const Price = styled.div`
margin-bottom: 20px;
    span{
        font-weight: 300;
        text-decoration-line: line-through;
        color: #555555;
    }
`

const Structure = styled.div`
    margin-bottom: 20px;
    letter-spacing: 0.04em;
    line-height: 1.5;
    max-width: 474px;
    
    span{
        font-weight: 700;
    }
`

const Tegs = styled.div`
    text-transform: none;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    margin-bottom: 65px;
    @media(max-width: 768px){
margin-bottom: 30px;
    }
    span{
        font-weight: 700;
    }
`

const Row = styled.div`
    display: flex;
    gap: 30px;
`
const Counter = styled.div`
    height: 55px;
    width: 160px;
    font-size: 20px;
    justify-content: center;
    display: flex;
    gap: 50px;
    button{
        font-size: inherit;
      padding: 5px;
        width: 10px;
        height: 10px;
    }
    `
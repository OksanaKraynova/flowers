import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styled from 'styled-components'
import { getArticlesAPI } from '../action';
import { connect } from 'react-redux';
import CardItem from './CardItem';
import "swiper/css";

const Slider = (props) => {
  
    useEffect(() => props.getArticles(), [])
    return (
        <Wrapper>
            <Swiper className='swiper-like'
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    },
                    590: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    998: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1325: {
                        slidesPerView: 4,
                    },
                }}
                
            >
                {props.articles.slice(0, 12).map((action) => (
                    <SwiperSlide key={action.id}>
                        <CardItem image={action.data.image} name={action.data.name} count={action.data.count} cost={action.data.cost} addToCart={props.addToCart} costTotal={action.data.costTotal}  />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};


const mapStateToProps = state => {
    return {
        loading: state.articleState.loading,
        articles: state.articleState.articles
    }
}

const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(getArticlesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

const Wrapper = styled.div`

    @media(max-width: 1109px){
        margin-top: calc(70px + (200 - 70) * ((100vw - 768px) / (1110 - 368)));
    }
   
.hide{
    @media(max-width: 768px){
        display: none;
    }
}
    .swiper-like{
        margin-top: 25px;
        position: static;

       @media(max-width: 1325px){
          max-width: 825px;
       }
       @media(max-width: 998px){
          max-width: 540px;
       }
       @media(max-width: 589px){
          max-width: 255px;
       }
        .swiper-slider{
          flex: 0 0 255px;
        }
        .swiper-button-next, .swiper-button-prev{
            width: 80px;
            height: 15px;
            position: absolute;
            z-index: 10;
            top: 240px;
            cursor: pointer;
            @media(max-width: 1325px){
                width: 60px;
            }
            @media(max-width: 768px){
                display: none;
            }
        }
        .swiper-button-next{
            right: -100px;
            background: url(../images/next.svg) right  no-repeat;
            @media(max-width: 1325px){
                right: 0;
                            }
                            @media(max-width: 768px){
                right: 10%;
            }
            
        }
        .swiper-button-prev{
            left: -100px;
            background: url(../images/prev.svg) no-repeat;
            @media(max-width: 1325px){
                left: 0;
            }
            @media(max-width: 768px){
                left: 10%;
            }
           
        }
        .swiper-pagination-bullets{
            display: flex;
            position: absolute;
            bottom: -30px;
            gap: 20px;
            left:300px;
           @media(min-width: 769px){
               display: none;
           }
           @media(max-width: 768px){
            left: calc(200px + (300 - 200) * ((100vw - 590px) / (786 - 590)));
           }
           @media(max-width: 589px){
            left: calc(35px + (170 - 35) * ((100vw - 320px) / (589 - 320)));
            gap: 10px;
           }
           @media(max-width: 514px){
            iwdth: 340px;
            margin: 0 auto;
           }
        }
        .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #fff;
            border: 1px solid  #D978AC;
        }
        .swiper-pagination-bullet-active{
            background-color:  #D978AC;
        }
    }
`
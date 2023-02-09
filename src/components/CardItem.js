import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { setCurrentGood } from '../reducers/goodReducer';
import Loader from './Loader';

const CardItem = ({ name, image, cost, oldCost, count, costTotal, id, closeBlock, addToCart, closeSearch }) => {
    const history = useNavigate()
    const data = { name, image, id, cost, costTotal, oldCost, count }
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setCurrentGood(data))
        history(`/product/${name}`)
        closeBlock()
    }


    const order = () => {
        if(closeSearch) closeSearch()
        addToCart(data)
        
    }

    return (
        <Product >
            <Info onClick={handleClick} >
                <Img>

                    <img alt='' src={image} />
                </Img>
                <p>{name}</p>
                <div>
                    <span> {cost}.00 ₽</span>
                    {oldCost && <span className='old'>{oldCost}.00 ₽</span>}
                </div>

            </Info>
            <ClearBtn className='link link__transparent' onClick={order}>В корзину</ClearBtn>
        </Product>
    );
};


const mapStateToProps = state => {
    return {
        loading: state.articleState.loading,
    }
}



export default connect(mapStateToProps)(CardItem);


const Product = styled.div`
    margin-top: 10px;
    width: 255px;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    flex: 0 1 255px;
    text-align: left;
    cursor: pointer;
    &:hover{
        img{ transform: scale(1.1);}
       }
    @media(max-width: 1109px){
        flex: 1 1 40%;
        img{
            object-fit: cover;
        }
    }
    @media(max-width: 599px){
        flex: 0 0 300px;
    }
    p{
        text-align: left;
        margin: 10px 0;
        font-size: 20px;
    }
    button{
        margin-top: 20px;
        width: 100%;
    }
`

const Info = styled.div`
   
`
const Img = styled.div`
        width: 100%;
        height: 335px;
        overflow: hidden;
        img{
            transition: transform 0.2s ease;
            width: 100%;
            height: 100%;
            object-fit: cover;
    }
`
const ClearBtn = styled.button`
    width: 223px;
`
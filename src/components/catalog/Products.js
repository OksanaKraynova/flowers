import React from 'react';
import styled from 'styled-components'
import CardItem from '../CardItem';

const Products = ({currentGoods, addToCart}) => {
    return (
        <Wrapper>
            {currentGoods.map((good, key) => (
                <CardItem className='card' id={good.id} name={good.data.name} cost={good.data.cost} count={good.data.count} oldCost={good.data.oldCost} image={good.data.image} costTotal={good.data.costTotal} key={key} addToCart={addToCart} />
            ))}
        </Wrapper>
    );
};

export default Products;

const Wrapper = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    max-height: 1500px;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
        width: 0px;
      }
    @media(max-width: 1109px){
        gap: calc(10px + (30 - 10) * ((100vw - 849px) / (1110 - 849)));
    }
    @media(max-width: 768px){
        gap: 20px;
        margin-top: 50px;
    }
    @media(max-width: 599px){
        justify-content: center;
    }
`
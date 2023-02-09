import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Add from '../components/item/Add';
import Item from '../components/item/Item';
import Tabs from '../components/item/Tabs';
import Like from '../components/item/Like';

const Product = (props) => {
    const product = useSelector(state => state.goodState.currentGood)
    useEffect(() => {
        document.title = `Lower Flower - ${product.name}`
    }, [])
    return (
        <Wrapper>
            <div className='container'>


                <Nav>Главная / Каталог букетов / Популярное / {product.name} </Nav>
                <Item name={product.name} costTotal={product.costTotal} cost={product.cost} id={product.id} image={product.image} oldCost={product.oldCost} count={product.count} addToCart={props.addToCart} />
                <Add />
                <Tabs product={product} user={props.user} />
                <Like />

            </div>
        </Wrapper>
    );
};
const mapStateToProps = state => {
    return {
        user: state.userState.user
    }
}
export default connect(mapStateToProps)(Product);

const Wrapper = styled.div`
    background: url(../images/item.png) top left / cover no-repeat;
    padding: 115px 0px 200px 0px;

    @media(max-width: 1109px){
        padding-top: 100px;
        padding-bottom: calc(130px + (200 - 130) * ((100vw - 320px) / (1110 - 320)));
        background-position: bottom ;
        
    }
`

const Nav = styled.span`
    font-size: 12px;
    text-transform: uppercase;
`
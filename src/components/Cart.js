import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import priceFormater from '../dop/priceFormater';
import { enableScroll } from '../dop/scroll';
import { setOrder } from '../reducers/orderReducer';


const Cart = ({  data }) => {
    const dispatch = useDispatch()
    const history = useNavigate()
    
    const [cart, setCart] = useState( data)
    const [total, setTotal] = useState(cart.reduce((prev, curr) => prev + curr.costTotal, 0))

    const hideCart = () => {
        document.getElementById('cart').classList.remove('show')
        document.getElementById('blur').classList.remove('show')
        enableScroll()
    }

    const handleClick = () => {
        dispatch(setOrder(cart))
        history(`/order`)
        hideCart()
        setCart([])
    }

   
    useEffect(() => {
        setCart(data)
    }, [data])
// 
    useEffect(() => {
        setTotal(cart.reduce((prev, curr) => prev + curr.costTotal, 0))
    }, [cart])
    const deleteItem = (id) => {
        console.log('rfrfirf', id);
        setCart(cart => cart.filter((product => id !== product.id)))
    }
    const increment = (id) => {
        setCart(cart => {
            return cart.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1,
                        costTotal: (product.count + 1) * product.cost
                    }
                }
                return product
            })
        })
    }
    const decrement = (id) => {
        setCart(cart => {
            return cart.map(product => {
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
                    return {
                        ...product,
                        count: newCount,
                        costTotal: newCount * product.cost
                    }
                }
                return product
            })
        })
        // if (counter <= 1) return ``
        // setCounter(counter - 1)
    }
    const closeCart = () => {
        document.getElementById('cart').classList.remove('show')
        document.getElementById('blur').classList.remove('show')
        enableScroll()

    }

    return (
        <Wrapper id='cart'>
            <Header>
                <div className='title-green'>Ваша корзина</div>
                <Close onClick={closeCart}><img alt='' src='/images/close.svg' /></Close>
            </Header>
            <Body>
                <Products className='item'>
                    {
                        cart.length > 0 ?
                            (cart.map((elem, key) => (
                                <Item className='item' key={key} >
                                    <img alt='' src={elem.image} />
                                    <Column>
                                        <span> {elem.name}</span>
                                        <Counter>
                                            <button onClick={() => decrement(elem.id)}>-</button>
                                            <span>{elem.count}</span>
                                            <button onClick={() => increment(elem.id)}>+</button>
                                        </Counter>
                                    </Column>
                                    <Column>
                                        <Price>{elem.costTotal}.00 ₽
                                            { }
                                        </Price>
                                        <Delete onClick={() => deleteItem(elem.id)}>
                                            Удалить
                                        </Delete>
                                    </Column>
                                </Item>
                            )))
                            :
                            <p>Ваша корзина пуста</p>
                    }
                </Products>
                <Add>
                    <p>Добавьте к заказу <span className='green'>Шары:</span></p>
                    <AddBlock>
                        <AddItem>
                            <img alt='' src='/images/balloons/1.jpg' />
                            <Column>
                                <span >ШАР “ЗВЕЗДА”</span>
                                <span className='green'>11.00 ₽</span>
                                <button className='green'>Добавить</button>
                            </Column>
                        </AddItem>
                        <AddItem>
                            <img alt='' src='/images/balloons/2.jpg' />
                            <Column>
                                <span >ШАР “СЕРДЦЕ”</span>
                                <span className='green'>13.00 ₽</span>
                                <button className='green'>Добавить</button>
                            </Column>
                        </AddItem>
                    </AddBlock>
                </Add>
                <Result>
                    <span className='green'>Предварительный итог: {priceFormater(total)}.00 руб.</span><br /> Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
                </Result>
                <button className='link link__transparent' disabled={cart.length === 0} onClick={handleClick}>Оформить заказ</button>
            </Body>
        </Wrapper>
    );
};


export default Cart;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 420px;
    background-color: #000;
    z-index: 999;
    padding: 20px 30px; 
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.2s ease;
    &.show{
        transform: translateX(0);
    }
    @media(max-width: 768px){
        padding: 10px;
        width: 100%;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 17px;
    border-bottom: 1px solid #555555;
    @media(max-width: 768px){
        padding-bottom: 11px;
    }
`

const Close = styled.button`
   width: 30px;
   height: 30px;
   img{
       width: 100%;
       height: 100%;
   }
`

const Body = styled.div`
    padding: 20px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media(max-width: 768px){
        padding-top: 10px;
    }
`

const Products = styled.div`
    flex-grow: 1;
  .item +  .item{
        margin-top: 20px;
        @media(max-width: 768px){
            margin-top: 10px;
        }
    }`
const Item = styled.div`
    display: flex;
    border-bottom: 1px solid #555555;
    padding-bottom: 21px;
    @media(max-width: 768px){
        padding-bottom: 11px;
    }
    img{
        width: 60px;
        height: 80px;
        margin-right: 20px;
    }
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:last-child{
        margin-left: auto;
    }
`

const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #555555;
    border: 0.5px solid #555555;
    width: 100px;
    height: 30px;
    span{
        margin: 0 22px;
    }
    button{
        padding: 3px;

    }
`
const Price = styled.div`
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0.04em;
color: #43FFD2;
`

const Delete = styled.button`
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    text-decoration-line: underline;
    &:hover{
        opacity: 0.8;
    }
`

const Add = styled.div`
    margin-top: auto;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    padding-bottom: 31px;
    border-bottom: 1px solid #555555;
    @media(max-width: 768px){
        padding-bottom: 10px;
    }
`

const AddBlock = styled.div`
   margin-top: 13px;
   display: flex;
   justify-content: space-between;
   @media(max-width: 768px){
        padding-top: 10px;
    }
`

const AddItem = styled.div`
    display: flex;
    img{
        margin-right: 10px;
    }
    button{
        text-decoration: underline;
        width: 45px;
        letter-spacing: 0.04em;
        font-size: 10px;
    }
`
const Result = styled.p`
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin: 10px 0px 20px 0px;
    @media(max-width: 768px){
        margin-bottom: 10px;
    }
`
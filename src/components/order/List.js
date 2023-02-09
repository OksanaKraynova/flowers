import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const List = ({ order }) => {
   
    const [cart, setCart] = useState(order)
    const [total, setTotal] = useState(cart.reduce((prev, curr) => prev + curr.costTotal, 0))

    useEffect(() => {
        setCart(order)
    }, [order])

    useEffect(() => {
        setTotal(cart.reduce((prev, curr) => prev + curr.costTotal, 0))
    }, [cart])

    const deleteItem = (id) => {
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
    return (
        <Wrapper>
            <p className='green'>Ваш заказ:</p>
            <Goods>
                {cart.length > 0 ? (cart.map(item => (
                    <Item key={item.id}>
                        <img alt='' src={item.image} />
                        <Column>
                            <span>{item.name}</span>
                            <Counter className='counter'>
                                <button onClick={() => decrement(item.id)}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => increment(item.id)}>+</button>
                            </Counter>
                        </Column>
                        <Column>
                            <span className='green'>{item.costTotal}.00 ₽</span>
                            <button className='delete' onClick={() => deleteItem(item.id)} >Удалить</button>
                        </Column>
                    </Item>
                )))

                    :
                    <p>Вы пока ничего не выбрали</p>}
            </Goods>
            <p className='green'>Предварительный итог: {total}.00 руб.</p>
        </Wrapper>
    );
};

export default List;

const Wrapper = styled.div`
    max-width: 350px;
    @media(max-width: 849px){
        display: none;
    }
    p{
        font-weight: 700;
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }
`

const Goods = styled.div`
    margin: 45px 0px 20px 0px;
`

const Item = styled.div`
    display: flex;
    padding: 20px 0;
    gap: 20px;
    border-bottom: 1px solid #555555;
    &:first-child{
        border-top: 1px solid #555555;
    }
    img{
        max-width: 60px;
        height: 80px;
        object-fit: cover;
    }
`

const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
    span{
        letter-spacing: 0.02em;
        text-transform: uppercase;
    }
    .delete{
        font-size: 10px;
        line-height: 1.5;
        letter-spacing: 0.04em;
        text-decoration: underline;
        text-transform: uppercase;
    }
`

const Counter = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    span{
        font-size: 12px;
        margin: 0 22px;
    }
`


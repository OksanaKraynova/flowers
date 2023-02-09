import React from 'react';
import styled from 'styled-components'

const Drop = ({sortedGoods}) => {
    return (
        <DropMenu id='drop-menu'>
            <label className='check' onClick={() => sortedGoods('name', true)}>
                <input type='radio' name='sort' />
                <FakeInput className='checked'></FakeInput>
                <span className='sort'>По популярности</span>
            </label>
            <label className='check' onClick={() => sortedGoods('cost', true)}>
                <input type='radio' name='sort' />
                <FakeInput className='checked'></FakeInput>
                <span className='sort'>сначала дорогие</span>
            </label>
            <label className='check' onClick={() => sortedGoods('cost', false)}>
                <input type='radio' name='sort' />
                <FakeInput className='checked'></FakeInput>
                <span className='sort'>сначала дешевые</span>
            </label>
        </DropMenu>
    );
};

export default Drop;

const DropMenu = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin: 30px 0 0  auto;
    gap: 20px;
    @media(max-width: 768px){
        gap: 5px;
        margin: 10px 0px 0px 0px;
    }
    button{
        text-transform: uppercase;
        font-size: 10px;
        color: #555555;
    
    }
    @media(max-width: 768px){
        display: none;
        &.open{
            display: flex;
            flex-direction: column;
        }
    }
`

const FakeInput = styled.div`
    width: 12px;
    height: 12px;
    border: 0.5px solid #FFFFFF;
    border-radius: 2px;
`
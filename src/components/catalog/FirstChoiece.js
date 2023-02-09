import React from 'react';
import styled from 'styled-components'
import { option } from '../../db/checkbox';

const FirstChoiece = () => {
    return (
        <Choice id='choice'>
            {option.map(item => (
                <Item key={item.key}>
                    <input type="radio" name='main-type' />
                    <span  className='fake-check'>{item.title}</span>
                </Item>
            ))}
        </Choice>
    );
};

export default FirstChoiece;

const Choice = styled.div`
    margin: 60px 0px 0 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 12px;
    @media(max-width: 768px){
        display: none;
        margin: 0;
        &.open{
            display: flex;
        }
    }
`

const Item = styled.label`
    transition: transform 0.15s ease;
    &:hover{
        transform: scale(1.05);
    }
     input{
        width: 1px;
        height: 1px;
        position: absolute;
        opacity: 0;
        appearance: none;

    }
    span{
        position: relative;
        padding: 11px 16px;
        border: 0.5px solid #FFFFFF;
        font-size: 12px;
        border-radius: 40px;
        cursor: pointer;
        display: inline-flex;
    }
`
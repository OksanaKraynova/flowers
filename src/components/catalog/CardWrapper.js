import React from 'react';
import styled from 'styled-components'
import FirstChoiece from './FirstChoiece'

const CardWrapper = ({openCategory, chooseType}) => {
    return (
        <Card>
            <h2 className='title'>каталог <span>букетов</span></h2>
            <p>В нашем магазине самый большой выбор букетов для любых событий:</p>
            <BtnMain id='btn-choice' onClick={openCategory}>Категории
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.58891 9.7845C5.63478 9.85112 5.69615 9.90559 5.76775 9.94323C5.83935 9.98086 5.91902 10.0005 5.99991 10.0005C6.08079 10.0005 6.16046 9.98086 6.23206 9.94323C6.30366 9.90559 6.36504 9.85112 6.41091 9.7845L10.9109 3.2845C10.963 3.20953 10.9935 3.12172 10.9992 3.0306C11.0049 2.93949 10.9855 2.84856 10.9432 2.7677C10.9008 2.68683 10.8371 2.61912 10.7589 2.57193C10.6808 2.52473 10.5912 2.49986 10.4999 2.5H1.49991C1.40883 2.50038 1.31958 2.52557 1.24175 2.57288C1.16392 2.62019 1.10046 2.68782 1.05819 2.7685C1.01592 2.84917 0.99645 2.93985 1.00186 3.03077C1.00727 3.12168 1.03737 3.20941 1.08891 3.2845L5.58891 9.7845Z" />
                </svg>
            </BtnMain>
         <FirstChoiece />
        </Card>
    );
};

export default CardWrapper;

const Card = styled.div`
    padding: 15px 11px 30px 20px;
    max-width: 920px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 10px;
    @media(max-width: 1109px){
        max-width: none;
    }
    @media(max-width: 768px){
        background: none;
        backdrop-filter: none ;
        padding: 0;
        margin: 20px 0 10px 0;
    }
    h2{
        max-width: 708px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        span{
           text-align: right;
           @media(max-width: 768px){
            text-align: left;
            margin-left: 60px;
           }
        }
        @media(max-width: 768px){
margin-bottom: 10px;
        }
    }
    p{
        text-align: center;
        @media(max-width: 768px){
            margin: 0 0  29px 60px;
            text-align: left;
        }
            }
`
const BtnMain = styled.button`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #D978AC;
    display: none;
    align-items: center;
    @media(max-width: 768px){
        display: flex;
    }
        svg{
            fill: #D978AC;
            margin-left: 20px;}
    &.active{
            color: #43FFD2;
        margin-bottom: 10px;
        svg{
            fill: #43FFD2;
        }
    }
`
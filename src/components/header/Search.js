import React, { useEffect } from 'react';
import styled from 'styled-components'
import { disableScroll, enableScroll } from '../../dop/scroll';
import CardItem from '../CardItem';

const Search = ({ goods, query, addToCart }) => {

    useEffect(() => {
        if(goods) {disableScroll()
        }else {enableScroll()}
    }, [])
    const closeSearch = () => {
        document.querySelector('#choose').classList.add('hide')
        document.getElementById('search').value ='';
        enableScroll()
    }
  
    return (
        <Wrapper id='choose'>

            <Bg>
                <Container className='container'>
                    <p className='title-green'>Результат поиска: {query}</p>
                    <Goods>
                        {
                            goods.length > 0 ?
                                <>
                                    {goods.map(data => (
                                        <CardItem id={data.id} name={data.data.name} count={data.data.count} costTotal={data.data.costTotal} cost={data.data.cost} image={data.data.image} oldCost={data.data.oldCost} key={data.id} closeBlock={closeSearch} addToCart={addToCart} closeSearch={closeSearch} />
                                    ))}
                                </>
                                :
                                <p>Ничего не  найдено</p>
                        }
                    </Goods>
                </Container>
            </Bg>
        </Wrapper>
    );
};


export default Search;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    z-index: 9;
    
    &.hide{
        display: none;
    }
`
const Bg = styled.div`
    background:  #000 ;
    width: 100%;
    height: 95vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: rgba(0,0,0,0.2);
      }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #fff;
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
        border-radius: 10px;
        background-color: rgba(0,0,0,0.2);
      }
`
const Container = styled.div`
padding-top: 140px;
    
`
const Goods = styled.div`
display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 20px;
    `
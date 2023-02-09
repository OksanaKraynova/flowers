import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { getArticlesAPI } from '../action';
import CardWrapper from '../components/catalog/CardWrapper';
import Drop from '../components/catalog/Drop';
import Products from '../components/catalog/Products';
import Contacts from '../components/Contacts';
import Loader from '../components/Loader';

const Catalog = (props) => {
    useEffect(() => props.getArticles(), [])
    const [goods, setGoods] = useState(props.articles)
    const [currentGoods, setCurrentGoods] = useState(goods)
    const [price, setPrice] = useState('50 – 15000')
    const [loader, setLoader] = useState(props.loading)

    const chooseColors = category => {
        setLoader(true)
        setCurrentGoods(goods.filter(el => el.data.colors === category))
        setLoader(false)
    }
    const sortedGoods = (field, dir) => {
        setLoader(true)
        setCurrentGoods([...goods].sort((a, b) => (!dir ? a.data[field] < b.data[field] : a.data[field] > b.data[field]) ? -1 : 1))
        setLoader(false)
    }

    const chooseTypes = category => {
        setCurrentGoods(goods.filter(el => el.data.types === category))
    }
    const chooseType = category => {
        setCurrentGoods(goods.filter(el => el.data.type === category))
    }

    const openCategory = () => {
        document.getElementById('choice').classList.toggle('open')
        document.getElementById('btn-choice').classList.toggle('active')
    }

    const openFilter = () => {
        document.getElementById('filter').classList.toggle('open')
        document.getElementById('btn-filter').classList.toggle('active')
    }

    const openDrop = () => {
        document.getElementById('drop-menu').classList.toggle('open')
        document.getElementById('btn-filter').classList.toggle('active')
    }

    useEffect(() => {
        document.title = 'Lower Flower - каталог'
    }, [])

    return (
        <Wrapper>
            <Container className='container'>
                <ContainerContact>
                    <Contacts />
                </ContainerContact>
                <Main>
                    <span>Главная / Каталог</span>
                   <CardWrapper openCategory={openCategory} chooseType={chooseType} />
                    <DropMenuWrapper>
                        <BtnMain id='btn-filter' onClick={openDrop}>сортировка товаров
                            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.58891 9.7845C5.63478 9.85112 5.69615 9.90559 5.76775 9.94323C5.83935 9.98086 5.91902 10.0005 5.99991 10.0005C6.08079 10.0005 6.16046 9.98086 6.23206 9.94323C6.30366 9.90559 6.36504 9.85112 6.41091 9.7845L10.9109 3.2845C10.963 3.20953 10.9935 3.12172 10.9992 3.0306C11.0049 2.93949 10.9855 2.84856 10.9432 2.7677C10.9008 2.68683 10.8371 2.61912 10.7589 2.57193C10.6808 2.52473 10.5912 2.49986 10.4999 2.5H1.49991C1.40883 2.50038 1.31958 2.52557 1.24175 2.57288C1.16392 2.62019 1.10046 2.68782 1.05819 2.7685C1.01592 2.84917 0.99645 2.93985 1.00186 3.03077C1.00727 3.12168 1.03737 3.20941 1.08891 3.2845L5.58891 9.7845Z" />
                            </svg>
                        </BtnMain>
                        <Drop sortedGoods={sortedGoods} />
                    </DropMenuWrapper>
                    <CatalogField>
                        <FilterWrapper>
                            <BtnMain id='btn-filter' onClick={openFilter}>фильтр товаров
                                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.58891 9.7845C5.63478 9.85112 5.69615 9.90559 5.76775 9.94323C5.83935 9.98086 5.91902 10.0005 5.99991 10.0005C6.08079 10.0005 6.16046 9.98086 6.23206 9.94323C6.30366 9.90559 6.36504 9.85112 6.41091 9.7845L10.9109 3.2845C10.963 3.20953 10.9935 3.12172 10.9992 3.0306C11.0049 2.93949 10.9855 2.84856 10.9432 2.7677C10.9008 2.68683 10.8371 2.61912 10.7589 2.57193C10.6808 2.52473 10.5912 2.49986 10.4999 2.5H1.49991C1.40883 2.50038 1.31958 2.52557 1.24175 2.57288C1.16392 2.62019 1.10046 2.68782 1.05819 2.7685C1.01592 2.84917 0.99645 2.93985 1.00186 3.03077C1.00727 3.12168 1.03737 3.20941 1.08891 3.2845L5.58891 9.7845Z" />
                                </svg>
                            </BtnMain>
                            
                        </FilterWrapper>
                        {props.loading ? <Loader /> :
                            <Products currentGoods={currentGoods} addToCart={props.addToCart} />
                        }
                    </CatalogField>
                    <Top>
                        <img alt='' src='/images/prev.svg' />
                    </Top>
                </Main>
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

const Wrapper = styled.div`
    background: url(../images/catalog-bg.png) top left / cover no-repeat;
    padding: 115px 0 200px 0;
    line-height: 1.5;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    position: relative;
    @media(max-width: 1109px){
        padding: 100px 0;
        background-size: auto;
    }
`

const Container = styled.div`
    position: relative;
    letter-spacing: 0.04em;
`

const ContainerContact = styled.div`
    position: absolute;
    right: 0;
    z-index: 5;
    top: 0;
    @media(max-width: 1149px){
        right: 10px;
    }
    @media(max-width: 1109px){
       display: none;
    }
`

const Main = styled.div``


const ClearBtn = styled.button`
width: 223px;
`
const DropMenuWrapper = styled.div``

const CatalogField = styled.section`
    display: flex;
    margin-top: 10px;
    @media(max-width: 768px){
        flex-direction: column;
    }
`

const FilterWrapper = styled.aside`

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

const Filter = styled.div`
    padding:20px 16px 30px ;
    max-width: 255px;
    margin-right: 30px;
    align-items: flex-start;
    @media(max-width: 1109px){
        margin-right: calc(15px + (30 - 15) * ((100vw - 849px) / (1110 - 849)));
    }
    @media(max-width: 768px){
        display: none;
        margin-top: 10px;
        max-width: 100%;
        &.open{
            display: block;
        }
    }
`

const Top = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: -135px;
    img{
        transform: rotate(90deg);
        width: 40px;
    }
`
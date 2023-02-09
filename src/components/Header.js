
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { getArticlesAPI, signOutAPI } from '../action';
import { disableScroll } from '../dop/scroll';
import Cart from './Cart';
import Contacts from './Contacts';
import Nav from './header/Nav';
import Search from './header/Search';

const Header = (props) => {
    const [query, setQuery] = useState('')
    const [counter, setCounter] = useState(props.data.length)
console.log(props);
    useEffect(() => {
        setCounter(props.data.length)
    }, [props.data.length])

    const search = (goods) => {
        return goods.filter(item => item.data.name.toLowerCase().includes(query))

    }
    const openCart = () => {
        document.getElementById('cart').classList.add('show')
        document.getElementById('blur').classList.add('show')
        disableScroll()

    }

    const addBg = () => {
        let scrolled = window.pageYOffset;
        let coords = 50
        if (scrolled > coords) {
            document.querySelector('#header').classList.add('bg');
        } else {
            document.querySelector('#header').classList.remove('bg');
        }
    }

    const logout = async () => {
        await props.signOut()
        props.user = null
    }

    const show = () => document.querySelector('#main-menu').classList.add('active')
    const hide = () => document.querySelector('#main-menu').classList.remove('active')
    useEffect(() => {
        window.addEventListener('scroll', addBg)
        // return () =>  window.removeEventListener('scroll', addBg)
    })

 
    return (
        <HeaderWrapper >
            <Wrapper id='header'>
                <Blur id='blur'></Blur>
                <Container className='container'>
                    <Burger id='burger' onClick={show}>
                        <img alt='menu' src='/images/burger.svg' />
                    </Burger>
                    <Logo>Lover <br /> flower</Logo>

                    <nav id='main-menu'>
                        <Nav hide={hide}/>
                        <input type='text' id='search' placeholder='ПОИСК' onChange={e => setQuery(e.target.value)} />
                        <a href='tel:+1234567890' className='tel green' ><img alt='' src='/images/phone2.svg' />+123 (456) 78-90</a>
                        <Line></Line>
                        <ContainerContacts>
                            <Contacts />
                        </ContainerContacts>
                        <Close onClick={hide}>
                            <img alt='close' src='/images/close.svg' />
                        </Close>
                    </nav>

                    <UserBlock>
                        <CartWrapper >
                            <Image >
                                <button onClick={openCart}>
                                    <img alt='' src='/images/cart.svg' />
                                    {props.data.length > 0 && <span className='counter'>{counter} </span>}
                                </button>
                            </Image>
                            <Cart addToCart={props.addToCart} data={props.data} />
                        </CartWrapper>
                        {props.user ?
                            <User>
                                {props.user.photoURL ? <img src={props.user.photoURL} alt={props.user.displayName} />
                                    :
                                    <img src='https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg' />}
                                <Logout onClick={logout}>Выйти</Logout>
                            </User>
                            : <Login className='link link__green'>
                                <NavLink to='/login'>вход</NavLink>
                            </Login>
                        }
                    </UserBlock>
                </Container>
            </Wrapper>
            {
                query && <Search goods={search(props.articles)} query={query} addToCart={props.addToCart} />
            }

        </HeaderWrapper>
    );
};

const mapStateToProps = state => {
    return {
        user: state.userState.user,
        articles: state.articleState.articles
    }
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutAPI()),
    getArticles: () => dispatch(getArticlesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderWrapper = styled.div`
position: relative;
`
const Wrapper = styled.header`
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    text-transform: uppercase;
    z-index: 99;
    &.bg{
        background-color: #000;
    }
    @media(max-width: 768px){
        background-color: #000;
        height: 80px;
    }
    nav{
        display: flex;
        align-items: center;
        flex: 1;
        @media(max-width: 768px){
            flex-direction: column;
            transform: translateX(-100%);
            transition: transform 0.2s ease;
            align-items: flex-start;
            background-color: #000;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0 10px;
            z-index: 99;
        &.active{
            transform: translateX(0);
         
                }
        }
    }
    input{
        margin-left: 50px;
        padding: 0px 0px 0px 28px;
        background: url(../images/search.svg) left center no-repeat;
        @media(max-width: 998px){
            margin-left: 20px;
        }
        @media(max-width: 768px){
            display: none;
        }
            &::placeholder{
                color: #fff;
            }
        }
       
`

const Blur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(20px);
display: none;
z-index: 999;
&.show{
    display: block;
}
`

const Container = styled.div`
    display: flex;
    align-items: center;
     @media(max-width: 768px){
        justify-content: space-between;
        gap:30px;
    }
    @media(max-width: 499px){
        gap: 0px;
    }
    .tel{
        margin: 0px 0px 0px auto;
        @media(max-width: 998px){
            display: none;
        }
        @media(max-width: 768px){
            margin: 10px 0 0 0;   
            text-decoration: underline;
            color: #fff; 
            display: inline-block;
            font-size: 18px;  
        }
        &:hover{
            text-decoration: underline;
        }
        img{
            margin: 0px 10px 0px 0px;
            @media(max-width: 768px){
                display: none;
            }
        }
            }
`

const ContainerContacts = styled.div`
    display: none;
    @media(max-width: 768px){
        display: block;
       
    }
`

const Logo = styled.span`
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    font-family: 'Cormorant';
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 14px;
    text-align: center;
    display: none;
    @media(max-width: 768px){
        display: inline-block;
        }
`


const Burger = styled.div`
    margin: 0px 0px 0px 10px;
    display: none;
    width: 20px;
    height: 10px;                  
    @media(max-width: 768px){
        display: block;
    }
   `
const UserBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    @media(max-width: 768px){
        gap: 16px;
    }
`
const CartWrapper = styled.div`
   max-width: 60px;
    padding: 15px;
    margin: 0 6px 0 21px;
   @media(max-width: 998px){
       margin: 0;
   }
    .counter {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #142b2b;
        background: #43ffd2;
        position: absolute;
        top: -2px;
        right: -8px;
        font-size: 11px;
    }
    @media (max-width: 768px) {
        padding: 5px;
    }
`

const Close = styled.button`
    display: none;
    position: absolute;
    top: 14px;
    right: 14px;
    @media(max-width:768px){
        display: block;
    }
`

const Line = styled.div`
    height: 1px;
    width: 100px;
    background-color: #555555;
    margin: 10px 0px 19px 0px;
    display: none;
    @media(max-width:768px){
        display: block;
    }
`
const Image = styled.div`
position: relative;
transition: transform 0.2s ease;
    &:hover{
        transform: scale(1.2);
    }
`

const User = styled.button`
position: relative;
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    &:hover{
        a{
            display: block;
        }
    }
`
const Logout = styled.a`
    position: absolute;
    right: 0;
    bottom: -28px;
    padding: 4px 10px ;
    z-index: 5;
    background-color: rgba(255, 255, 255, 0.4);
    display: none;
`

const Login = styled.div`
    width:60px;
    padding: 10px;
`
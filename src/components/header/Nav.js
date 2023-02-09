import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import FilterHeader from '../main/FilterHeader';

const Nav = (props) => {


    return (
        <>
            <List onClick={props.hide}>
                <Item>
                    <NavLink to='/' className='logo'>
                        <img alt='' src='/images/logo.svg' />
                    </NavLink>
                </Item>
                <Item className='hide'>
                    <NavLink to='/'>Главная</NavLink>
                </Item>
                <Item className='catalog '>
                    <NavLink to='/catalog' className='catalog-link hover' >Каталог</NavLink>
                    <DropMenu className='drop'>
                        <FilterHeader />
                    </DropMenu>
                </Item>
                <Item>
                    <NavLink to='/delivery' className='hover'>Доставка и оплата</NavLink>
                </Item>
                <Item>
                    <NavLink to='/about' className='hover'>О нас </NavLink>
                </Item>
                <Item>
                    <NavLink to='/contacts' className='hover'>Контакты </NavLink>
                </Item>
                <Item>
                    <NavLink to='/faq' className='hover'>FAQ </NavLink>
                </Item>
                <Item className='hide'>
                    <NavLink to='/corporate'>для корпоративных клиентов </NavLink>
                </Item>
            </List>

        </>
    );
};




export default Nav;



const DropMenu = styled.div`
    position: absolute;
    left: -20px;
    top: 20px;
    display: none;

`

const Item = styled.li`
    line-height: 21px;
    @media(max-width: 768px){
        font-size: 18px;
    }
    
             .hover{
              transition: all 0.2s ease-in-out;
              position: relative;
              &:after{
                content: '';
                height: 1px;
                position: absolute;
                background: #43ffd2;
                left: 0;    
                right: 0;
                bottom: -2px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
                &:hover{
                color: #43FFD2;
                &:after{
                    opacity: 1;
                    transform: scaleX(1);
                }
            }
        }
`
const List = styled.ul`
        display: flex;
        align-items: center;
        gap: 50px;
        letter-spacing: 0.04em;
        .hide{
            display: none;
            @media(max-width: 768px){
                display: block;
            }
        }
        .catalog{
            position: relative;
                  &:hover{
                .drop{
                    display: block;
                }
            }
        }
        @media (max-width: 1109px) {
            gap: calc(15px + (50 - 15) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            padding-top: 54px;
            background: url(../images/logo.svg) top left/ 22px 48px no-repeat;
            .search {
              order: -1;
            }
            .logo{
                display: none;
            }
        }
`
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Form from '../components/order/Form';
import List from '../components/order/List';
import Title from '../components/order/Title';

const Order = (props) => {
    console.log(props);
    useEffect(() => {
        document.title = 'Lower Flower - оформление заказа'
    }, [])
    return (
        <Wrapper>
            <div className='container'>
                <Title />
                <Row>
                    <Form />
                    <List order={props.order} />
                </Row>
            </div>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        user: state.userState.user,
        order: state.orderState
    }
}

export default connect(mapStateToProps)(Order);

const Wrapper = styled.div`
    background: url(../images/order.png) top left / cover no-repeat;
    padding:115px 0px 180px 0px;
    @media(max-width: 1109px){
        padding: 100px 0px 100px 0px;
    }
    h2{
        margin: 60px 0px 80px 0px;
        @media(max-width: 1109px){
            margin-top: calc(20px + (60 - 20) * ((100vw - 768px) / (1110 - 768)));
            margin-bottom: calc(60px + (80 - 60) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            margin: 20px 0px 60px 0px;
        }
        span{
            margin-left: 90px;
            @media(max-width: 998px){
                margin-left: 0;
            }
        }
    }
`
const Row = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1109px){
            margin-top: calc(20px + (40 - 20) * ((100vw - 768px) / (1110 - 768)));
                    }
    @media(max-width: 768px){
        margin-top: 20px;
    }
`
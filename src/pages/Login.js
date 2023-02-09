import React , {useEffect}  from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { signInAPI } from '../action';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const history = useNavigate()
    useEffect(() => {
        document.title = 'Lower Flower - вход'
    }, [])

    const login = () => {
        props.signIn()
        history('/')
    }
    return (
        <Wrapper>
            <Btn className='link link__green' onClick={login}>Войти с помощью Google</Btn>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
       user: state.userState.user
    }
}

const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(signInAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const Wrapper = styled.div`
    background: url(../images/login.jpeg) center center / cover no-repeat;
    height: 90vh;
    width: 100%;
    padding-top: 20%;
 `

const Btn = styled.a`
    margin: 0 auto;
       max-width:300px;
 `


import React, { useEffect } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';

import Slider from '../Slider';


const Like = (props) => {
    return (
        <Wrapper>
            <h4 className='title-green'> вам может понравиться:</h4>
           <Slider className='hide' />
        </Wrapper>
    );
};



export default Like;

const Wrapper = styled.section`
    margin-top: 200px;
    position: relative;
    @media(max-width: 1109px){
        margin-top: calc(70px + (200 - 70) * ((100vw - 768px) / (1110 - 368)));
    }
    @media(max-width: 768px){
        display: none;
    }
`
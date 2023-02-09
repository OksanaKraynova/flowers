import React from 'react';
import styled from 'styled-components'


const Map = () => {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <>
            <h5 className='green'>Мы на карте</h5>
            <Container>
              <img alt='' src='/images/map.jpg' />
            </Container>
        </>
    );
};

export default Map;

const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    @media(max-width: 768px){
margin-top: 10px;
height: 300px;
    }
    img{
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
import React, {useEffect} from 'react';
import Lf from '../components/main/LF';
import Catalog from '../components/main/Catalog';
import Pop from '../components/main/Pop';
import Steps from '../components/main/Steps';
import Special from '../components/main/Special';
import FormMain from '../components/main/Form';
import Works from '../components/main/Works';

const Main = ({addToCart}) => {
useEffect(() => {
  document.title = 'Lower Flower - главная'
}, [])

    return (
        <div>
            <Lf />
            <Catalog />
            <Pop addToCart={addToCart} />
            <Steps/>
            <Special />
            <FormMain />
            <Works />
        </div>
    );
};

export default Main;


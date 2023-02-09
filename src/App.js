import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Delivery from './pages/Delivery';
import Error from './pages/Error';
import Faq from './pages/Faq';
import Main from './pages/Main';
import Corporate from './pages/Corporate';
import Product from './pages/Product';
import Login from './pages/Login';
import { connect, useDispatch, useSelector, } from 'react-redux';
import { getUserAuth } from './action';
import ScrollToTop from './dop/ScrollToTop';
import Order from './pages/Order';

function App(props) {
  const cart = useSelector(state => state.orderState)
  
  const dispatch = useDispatch()
  const getUser = () => props.getUserAuth()
  const [toCart, setToCart] = useState( [])

  const addToCart = (data) => {
    setToCart([...toCart, data])
     }



  useEffect(() => getUser())
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header addToCart={addToCart} data={toCart} />
        <main>
          <Routes>
            <Route path='/' element={<Main addToCart={addToCart} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/catalog' element={<Catalog addToCart={addToCart} />} />
            <Route path='/about' element={<About />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/corporate' element={<Corporate />} />
            <Route path='/product/:id' element={<Product addToCart={addToCart} />} />
            <Route path='/order' element={<Order />} />
            <Route path='/404' element={<Error />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
const mapStateToProps = state => {
  return { user: state.userState.user }
}

const mapDispatchToProps = dispatch => ({
  getUserAuth: () => dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

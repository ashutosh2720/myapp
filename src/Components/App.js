import React from 'react';
// import '../CSS/App.css'
import Navbar from './Navbar/Nav';
import Main from './Main';
import Footer from "./footer/Footer";
import Sign from './Sign'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mens from './Mens';
import Womens from './Womens';
import Decoration from './Decoration';
import Error from './Error';
import Empty from './Empty';
import { ToastContainer } from 'react-toastify';
import Discription from './Discription';
import Cart from './Cart';


function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Womens' element={<Womens />} />
        <Route path='/Decoration' element={<Decoration />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Empty' element={<Empty />} />
        <Route path='/single-product/:id' element={<Discription />} />
      </Routes>
      <Footer />


    </>
  );

}

export default App;

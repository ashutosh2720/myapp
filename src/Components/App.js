import React from 'react';
// import '../CSS/App.css'
import Navbar from './Nav';
import Main from './Main';
import Footer from './Footer';
import Sign from './Sign'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mens from './Mens';
import Womens from './Womens';
import Decoration from './Decoration';

function App() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Womens' element={<Womens />} />
        <Route path='/Decoration' element={<Decoration />} />
      </Routes>

      <Footer />

    </>
  );

}

export default App;

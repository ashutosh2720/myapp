import React from 'react';
// import '../CSS/App.css'
import Navbar from './Nav';
import Main from './Main';
import Footer from './Footer';
import Sign from './Sign'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Sign' element={<Sign />} />
      </Routes>

      <Footer />

    </>
  );

}

export default App;

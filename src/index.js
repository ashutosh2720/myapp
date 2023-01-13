import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css'
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './context/login-context';
import { CartProvider } from './context/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <LoginProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>

  </>
);


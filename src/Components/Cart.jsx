import React from 'react'
import { useGlobalCart } from '../context/cart-context';
import '../CSS/cart.css'
import Cartitem from './Cartitem';


export default function Cart() {

    const { cartArray, addToCart } = useGlobalCart();

    return (
        <>
            <div className="main">
                <div className="header">
                    <h2>Shoping Cart</h2>
                </div>

                <div className="main-cart-item">

                    {
                        cartArray.map((cartId) => {
                            return <Cartitem cartId={cartId} />
                        })
                    }


                </div>


            </div>
        </>
    )
}

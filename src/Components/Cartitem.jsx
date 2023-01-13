import React, { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalCart } from '../context/cart-context';


const Cartitem = ({ cartId }) => {


    const [cartProduct, setCartProduct] = useState();

    const { cartArray, deleteCart } = useGlobalCart();


    const getProductDetail = async (id) => {
        let res = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await res.json();
        setCartProduct(data);
        console.log(data);
    }

    useEffect(() => {
        getProductDetail(cartId);
    }, [cartArray])

    return (

        cartProduct &&
        <>
            <div className="cart-item">
                <div className="item1">
                    <div className="img ">Price</div>
                    <div className="tile ">Title</div>
                    <div className="quantity ">Quantity</div>
                    <div className="price">Price</div>
                    <div className="delete ">Delete</div>
                </div>

                <div className="item2">
                    <div className="img "><img src={cartProduct.thumbnail} alt="" /></div>
                    <div className="tile ">{cartProduct.title}</div>
                    <div className="quantity"><select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select></div>
                    <div className="price ">{cartProduct.price}</div>
                    <div className="delete" onClick={() => deleteCart(cartProduct.id)}><DeleteIcon /></div>
                </div>



            </div>
        </>


    )
}

export default Cartitem;

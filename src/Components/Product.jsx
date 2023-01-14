import React, { useEffect, useState } from 'react';
import '../CSS/main.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';
import '../CSS/App.css'

const Product = ({ category, title }) => {

    const [Items, setItems] = useState([]);
    const [Shoes, setShoes] = useState([])

    let API_URL = `https://dummyjson.com/products/category/${category}`

    const getApiData = async () => {
        let response = await fetch(API_URL);
        let data = await response.json();
        setItems(data.products);
    }


    useEffect(() => {
        getApiData()
    }, [])


    return (
        <>
            <div className="deal"><h1>{title}</h1></div>

            <div className="items">
                {
                    Items ?
                        Items.map((val) => {
                            return (
                                <NavLink to={'/single-product/' + val.id}>
                                    <div className="img-details">
                                        <div className="product-img">
                                            <img src={val.thumbnail} alt="" />
                                        </div>
                                        <div className="ind-item">
                                            <h4>{val.title.slice(0, 25)}...</h4>
                                            <h3>&#8377;1{val.price}/-</h3>

                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }) :
                        <div className="">Loading</div>

                }
                {/* <div className="all"><h4>view all</h4></div> */}
            </div>

        </>
    )
}

export default Product;

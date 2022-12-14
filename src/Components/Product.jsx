import React, { useEffect, useState } from 'react';
import '../CSS/main.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
                                <div className="img-details">
                                    <div className="product-img">
                                        <img src={val.thumbnail} alt="" />
                                    </div>
                                    <div className="ind-item">
                                        <h2>{val.title.slice(0, 7)}...</h2>
                                        <p>{val.price}</p>
                                        <p>{val.brand.slice(0, 14)}...</p>
                                        <button className='bn53'>view item


                                        </button>
                                    </div>
                                </div>
                            )
                        }) :
                        <div className="">Loading</div>

                }
                <div className="all"><h3>view all</h3></div>
            </div>

        </>
    )
}

export default Product;

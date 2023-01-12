import { LineAxisOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import '../CSS/Discription.css'


export default function Discription() {

    const [productDetail, setProductDetail] = useState();

    const { id } = useParams();


    const getProductDetail = async (id) => {
        let res = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await res.json();
        setProductDetail(data);
        console.log(data);
    }

    useEffect(() => {

        getProductDetail(id);
    }, [])
    return (
        productDetail

        &&
        <>
            <div className="header">
                <div className="heading">
                    <h3> Category:Mens Shirt</h3>
                    <h5>  Anix-cart  product Mens shirt</h5>
                </div>
            </div>

            <div className="main-dis">
                <div className="left-dis">
                    <div className="left">
                        {
                            productDetail.images.map((img) => {
                                return (
                                    <img src={img} alt="" />
                                )

                            })
                        }

                    </div>

                    <div className="main-img">
                        <img src={productDetail.thumbnail} alt="" />

                    </div>


                </div>

                <div className="right-dis">
                    <div className="dis">
                        <div className='title'> <h1>Mens Shirt</h1>
                            Brand: Zara
                            <br /><br />
                            <h3> Description: Men Slim Fit Checkered Cut Away Collar Casual Shirt</h3>

                            <br /><br /><br />

                            <h3> Deal of the Day
                                <br /><br />
                                -15.60%

                                ₹2500.00/- </h3>
                            <br /><br />
                        </div>

                        <div className="offer">
                            <div>

                                <h2>offer</h2> <br /><h4>Bank Offer
                                    5% Cashback on Flipkart Axis Bank Card
                                    T&C</h4><br />
                                <h4>Buy this Product and Get Extra ₹500 Off on Two-Wheelers
                                    T&C</h4><br />
                                <h4>Partner Offer
                                    Purchase now & get a surprise cashback coupon for January / February 2023
                                    Know More</h4><br />
                                <h4>Partner Offer
                                    Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000*
                                    Know More</h4>
                            </div>
                        </div>
                        <div className="cart">
                            <button className='bn53'>add to cart</button>
                            <button className='bn53'>buy now</button>
                        </div>


                    </div>

                </div>
            </div>
            <hr />

        </>
    )
}

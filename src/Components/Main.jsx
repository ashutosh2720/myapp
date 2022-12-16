import React from "react";
import '../CSS/main.css';
import Items from "./Items";
import Slide from '../Images/anix.png'

export default function Main() {
    return (
        <>
            <div className="slider">
                <img src={Slide} alt="" />
            </div>
            <div className="deal"><h1>Best Deals</h1></div><hr />
            <div className="items">
                {
                    Items.map((val) => {
                        return (
                            <div className="img-details">
                                <div className="product-img">
                                    <img src={val.img} alt="" />
                                </div>
                                <div className="ind-item">
                                    <h1>{val.title}</h1>
                                    <p>{val.price}</p>
                                    <p>{val.company}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
            <hr />
            <div className="cole"> <h2>Our Collections</h2></div><hr />

            <div className="collection">
                <div className="Mens-jacket col">
                    <img src="https://www.pngarts.com/files/3/Men-Jacket-PNG-Free-Download.png" alt="" />
                    <h2>Mens jacket</h2>
                </div>
                <div className="Womens-saree col">
                    <img src="https://th.bing.com/th/id/R.c065f741320873055400b4a8f5b43201?rik=tyUE5lyoZkboKw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSaree%2fSaree-2%2fSilk-Saree-PNG-wearing-model_pngimagesfree.com.png&ehk=P21TJx2eJwbp6GyxN2qfEGBkI7JjapZQTEmlCgGITT0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <h2>Saaree</h2>
                </div>
                <div className="Mens-shoes col">
                    <img src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png" alt="" />
                    <h2>Mens Shoes</h2>
                </div>
                <div className="girls-lahenga col">
                    <img src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488" alt="" />
                    <h2>Lahenga</h2>
                </div>

            </div>
        </>
    )
}
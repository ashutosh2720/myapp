import React from "react";
import '../CSS/main.css';
import Items from "./Items";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sign from './Sign'


export default function Main() {
    return (
        <>   <Sign />

            <Carousel autoPlay={true} infiniteLoop={true} interval='3000' emulateTouch={true}>
                <div>
                    <img src="https://w3hubs.com/wp-content/uploads/2020/12/Responsive-Ecommerce-Product-Cards-In-HTML-CSS.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/07/d4/b6/07d4b628c48f0459bbbeef4051fae3f2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://1.bp.blogspot.com/-CccUX_R7xpk/YPF2An129PI/AAAAAAAABPM/l_yswgsw34Ua88ZCv8NCh-qGGBNQ-BIvwCNcBGAsYHQ/s1920/Small-appliances-banner-1920x500.jpg" />
                    <p className="legend">Legend 3</p>
                </div>

                <div>
                    <img src="https://i.pinimg.com/originals/15/2b/20/152b2003844b264f352096dd2a88726d.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://besthiking.net/wp-content/uploads/2014/11/Best-Merino-Base-Layers-1024x384.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

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
                    <h2> jacket</h2>
                </div>
                <div className="Womens-saree col">
                    <img src="https://th.bing.com/th/id/R.c065f741320873055400b4a8f5b43201?rik=tyUE5lyoZkboKw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSaree%2fSaree-2%2fSilk-Saree-PNG-wearing-model_pngimagesfree.com.png&ehk=P21TJx2eJwbp6GyxN2qfEGBkI7JjapZQTEmlCgGITT0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <h2>Saaree</h2>
                </div>
                <div className="Mens-shoes col">
                    <img src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png" alt="" />
                    <h2> Shoes</h2>
                </div>
                <div className="girls-lahenga col">
                    <img src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488" alt="" />
                    <h2>Lahenga</h2>
                </div>
                <div className="Mens-shoes col">
                    <img src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png" alt="" />
                    <h2> Shoes</h2>
                </div>
                <div className="girls-lahenga col">
                    <img src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488" alt="" />
                    <h2>Lahenga</h2>
                </div>


            </div>
        </>
    )
}
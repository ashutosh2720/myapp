import React from "react";
import '../CSS/main.css';
import Items from "./Items";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sign from './Sign'


export default function Main() {
    return (
        <>

            <Carousel autoPlay={true} infiniteLoop={true} interval='3000' emulateTouch={true}>
                <div>
                    <img src="https://www.winkart.in/wp-content/uploads/2020/12/section09-slider1.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://www.kindpng.com/picc/m/491-4913062_nike-adidas-shoes-slider-nike-concept-slider-concept.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://1.bp.blogspot.com/-CccUX_R7xpk/YPF2An129PI/AAAAAAAABPM/l_yswgsw34Ua88ZCv8NCh-qGGBNQ-BIvwCNcBGAsYHQ/s1920/Small-appliances-banner-1920x500.jpg" />
                    <p className="legend">Legend 3</p>
                </div>

                <div>
                    <img src="https://www.ta-hifi.de/wp-content/uploads/solitaire_t_slider_home._2jpg-scaled.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://g3fashion.cdn.imgeng.in/upload/new_home/sub_banner/1668498287_girl-sub-banner-choli-suit.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://uk.yamaha.com/en/files/tw-e3b-purple-slider_5292a53b94567c3c40d65d5595c4c3ae.jpg?impolicy=resize&imwid=1200&imhei=480" />
                    <p className="legend">Legend 3</p>
                </div>

            </Carousel>

            <div className="deal"><h1>Best Deals</h1></div>
            <div className="items">
                {
                    Items.map((val) => {
                        return (
                            <div className="img-details">
                                <div className="product-img">
                                    <img src={val.img} alt="" />
                                </div>
                                <div className="ind-item">
                                    <h2>{val.title}</h2>
                                    <p>{val.price}</p>
                                    <p>{val.company}</p>
                                    <button><h6 className="glow">add to cart</h6></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="cole"> <h2>Our Collections</h2></div>

            <div className="collection">
                <div className="Mens-jacket col">
                    <img src="https://www.pngarts.com/files/3/Men-Jacket-PNG-Free-Download.png" alt="" />
                    <div className="txt">jacket</div>

                </div>
                <div className="Womens-saree col">
                    <img src="https://th.bing.com/th/id/R.c065f741320873055400b4a8f5b43201?rik=tyUE5lyoZkboKw&riu=http%3a%2f%2fwww.pngimagesfree.com%2fPeople%2fSaree%2fSaree-2%2fSilk-Saree-PNG-wearing-model_pngimagesfree.com.png&ehk=P21TJx2eJwbp6GyxN2qfEGBkI7JjapZQTEmlCgGITT0%3d&risl=&pid=ImgRaw&r=0" alt="" />

                </div>
                <div className="Mens-shoes col">
                    <img src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png" alt="" />

                </div>
                <div className="girls-lahenga col">
                    <img src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488" alt="" />

                </div>
                <div className="Mens-shoes col">
                    <img src="https://pluspng.com/img-png/mens-shoes-hd-png-download-clothes-mens-shoes-2000.png" alt="" />

                </div>
                <div className="girls-lahenga col">
                    <img src="https://cdn.shopify.com/s/files/1/1768/0827/products/MG_9675_grande.png?v=1509561488" alt="" />

                </div>


            </div>
        </>
    )
}
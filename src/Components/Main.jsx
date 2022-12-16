import React from "react";
import '../CSS/main.css';
import Items from "./Items";

export default function Main() {
    return (
        <>
            <div className="slider">
                <img src="https://static.vecteezy.com/system/resources/previews/001/213/384/non_2x/online-shopping-mobile-app-with-truck-and-delivery-man-vector.jpg" alt="" />
            </div>
            <div><h1>Best Deal</h1></div>
            <div className="items">
                {
                    Items.map((val) => {
                        return (
                            <div>
                                <div className="product-img">
                                    <img style={{ width: '200px' }} src={val.img} alt="" />
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
        </>
    )
}
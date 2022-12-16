import React from "react";
import '../CSS/main.css';
import Items from "./Items";

export default function Main() {
    return (
        <>
            <div className="slider">
                <img src="https://static.vecteezy.com/system/resources/previews/001/213/384/non_2x/online-shopping-mobile-app-with-truck-and-delivery-man-vector.jpg" alt="" />
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
        </>
    )
}
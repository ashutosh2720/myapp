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
        </>
    )
}
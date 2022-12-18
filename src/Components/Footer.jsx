import React from "react";
import '../CSS/Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="about">

                    <ul>
                        <li><h2>About</h2></li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Careers Us</li>
                        <li>Contact Us</li>


                    </ul>
                </div>
                <div className="help">
                    <ul>
                        <li><h2>Help</h2></li>
                        <li>Payment</li>
                        <li>Shipping</li>
                        <li>Cancellation & Return</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className="policy">
                    <ul>
                        <li><h2>Policy</h2></li>
                        <li>Return Policy</li>
                        <li>Terms & Use</li>
                        <li>Privecy</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><h2>Social</h2></li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Github</li>
                    </ul>
                </div>


            </div>
            <div className="copy">
                <h4> &#169;Copyright  2022 ANIX CART</h4>
            </div>
        </>
    )
}
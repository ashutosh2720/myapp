import React from "react";
import '../CSS/sign.css'
import Nav from './Nav';
import Footer from "./Footer";



export default function Sign() {


    return (
        <>


            <form action="">
                <img src="" alt="" />
                <div className="sign">
                    <img src="https://icons8.com/icon/117562/microsoft-outlook-2019" alt="" />
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Enter username" />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter password" /><br />
                    <h5>Forget Password <a href=""> ->click here</a></h5><br />

                    <button className="bn53">Login</button><br />
                    <h5>Create new acount <a href=""> ->click here</a></h5><br /><br />
                    <div className="log-with">
                        <div> login with</div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" /></a></div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /></a></div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/732/732223.png" alt="" /></a></div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="" /></a></div>

                    </div>
                </div>
            </form>

        </>
    )

}
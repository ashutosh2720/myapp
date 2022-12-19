import React from "react";
import '../CSS/sign.css'


export default function Sign() {


    return (


        <form action="">
            <div className="sign">
                <label htmlFor="">User Name</label>
                <input type="text" /><br /><br />
                <label htmlFor="">Password</label>
                <input type="password" /><br /><br />

                <button>Sign in</button>
            </div>
        </form>
    )
}
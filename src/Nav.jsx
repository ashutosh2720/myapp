import React from "react";
function Navbar()
{
    return(
       <nav>
          <div className="nav-left">
              <img src="https://cdn-icons-png.flaticon.com/512/8336/8336254.png" alt="" /><h3>Menu</h3>

          </div>
          <div className="nav-mid">
            <img src="ecom2.png" alt="" />
          </div>

         <div className="nav-right">
            <div className="img1">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="" />
            </div>
            <div className="img4">
                <img src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png" alt="" />
            </div>
            <div className="img2">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="" />
            </div>
            <div className="img3">
            <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="" />
            </div>
          </div>
       </nav>
    );
};
export default Navbar;
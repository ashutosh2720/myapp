import React, { useState } from "react";
import logo from '../Images/ecom2.png'
import '../CSS/Nav.css';
import Menu from "./Menu";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Man2Icon from '@mui/icons-material/Man2';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import WomanIcon from '@mui/icons-material/Woman';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const menuFunction = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      {
        showMenu
        &&
        <div onClick={menuFunction}>
          <Menu />
        </div>
      }
      <nav>
        <div className="nav-left">
          <div className="img-name" onClick={menuFunction}>
            <img src="https://cdn-icons-png.flaticon.com/512/8336/8336254.png" alt="" />
            <h3>Menu</h3>
          </div>
        </div>
        <div className="nav-mid">
          <img src={logo} alt="" />
        </div>

        <div className="nav-right">
          <div className="icons">

            <div className="img4">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828503.png" alt="" />
            </div>

            <div className="img4">
              <img src="https://cdn-icons-png.flaticon.com/512/2662/2662503.png" alt="" />
            </div>

            <div className="img3">
              <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="" />
            </div>
          </div>
          <div className="hamburger">
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="" />
          </div>
          <div className="img1">

            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="" />
          </div>
        </div>


      </nav>

      <div className="navigation">
        <ul>
          <div className="ments-wear"><li><a href=""><Man2Icon />Mens wear</a></li></div>
          <div className="kids-wear"><li><a href=""><IceSkatingIcon />Foot wear</a></li></div>
          <div className="womens-saare"><li><a href=""><WomanIcon />Ledies Suit</a></li></div>
          <div className="home-appliance"> <li><a href=""><SoupKitchenIcon />Home & Appliance</a></li></div>
        </ul>
      </div>

    </>

  );
};
export default Navbar;
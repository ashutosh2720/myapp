import React, { useState } from "react";
import logo from '../Images/anix4.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../CSS/Nav.css';
import Menu from "./Menu";
import Sign from './Sign'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Man2Icon from '@mui/icons-material/Man2';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import WomanIcon from '@mui/icons-material/Woman';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [showLog, setLog] = useState(false);

  const menuFunction = () => {
    setShowMenu(!showMenu)
  }


  const logFunction = () => {
    setLog(!showLog)
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

      {
        showLog
        &&
        <div onClick={logFunction}>
          <Sign />
        </div>

      }
      <nav>
        <div className="nav-left">
          <div className="img-name" onClick={menuFunction}>
            <MenuOpenOutlinedIcon />
            <h3>Menu</h3>
          </div>

        </div>
        <div className="nav-mid">
          <img src={logo} alt="" /><ShoppingCartOutlinedIcon className="cart" />
        </div>

        <div className="nav-right">

          <div className="icons">


            <div className="img4" onClick={logFunction}>
              <PersonAddIcon />
            </div>

            <div className="img4">
              <ShoppingBagIcon />
            </div>

            <div className="img3">
              <ShoppingCartIcon />
            </div>
          </div>
          <div className="hamburger">
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="" />
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
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
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Womens from "./Womens";
import Error from "./Error";
import { useGlobalCart } from "../context/cart-context";


function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [showLog, setLog] = useState(false);

  const { cartArray } = useGlobalCart()

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
        <Menu menuFunction={menuFunction} />
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
          <img src={logo} alt="" />

        </div>

        <div className="nav-right">

          <div className="icons">


            <div className="img4" >
              <NavLink to='/sign'>
                <PersonAddIcon />
              </NavLink>

            </div>


            <div className="img4">
              <NavLink to='/Error'><ShoppingBagIcon /></NavLink>
            </div>

            <div className="img3">
              <NavLink to='/Cart'>
                <Badge badgeContent={cartArray.length} color="success">
                  <ShoppingCartIcon className="cart-icon" />
                </Badge>
              </NavLink>
            </div>
          </div>


        </div>


      </nav>

      <div className="navigation">
        <ul>

          <div className="home"><li><NavLink to='/'><HomeIcon />Home
          </NavLink></li></div>
          <div className="ments-wear"><li><NavLink to='/Mens'>
            <Man2Icon />Mens wear

          </NavLink></li></div>

          <div className="womens-saare"><li><NavLink to='/Womens ' className={isActive =>
            !isActive ? " active" : "inactive"
          }><WomanIcon />Womens wear</NavLink></li></div>
          <div className="home-appliance"> <li><NavLink to='/Decoration'><SoupKitchenIcon />Home & Appliance</NavLink></li></div>
        </ul>
      </div>

    </>

  );
};
export default Navbar;
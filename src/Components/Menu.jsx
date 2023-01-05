import React from "react";
import '../CSS/menu.css';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ViewListIcon from '@mui/icons-material/ViewList';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function Menu({ menuFunction }) {
    return (
        <>
            <div className="main-menu">
                <div className="menu-left">
                    <div className="close-menu" onClick={menuFunction}>
                        <HighlightOffIcon />
                    </div>
                    <div className="welcome">
                        <h1><AccountCircleIcon className="user" />Welcome,User</h1>
                    </div>
                    <div className="order">
                        <ul>
                            <h2>Order</h2>
                            <li><ViewListIcon />Order Summary</li>
                            <li><AssignmentReturnIcon />Return</li>
                            <li><ViewModuleIcon />My Order</li>
                            <li><FavoriteBorderIcon />My Wishlist</li>

                        </ul>
                    </div><hr />

                    <div className="payment">
                        <ul>
                            <h2>Payments</h2>
                            <li><PaymentIcon />Payment History</li>
                            <li><AccountBalanceWalletIcon />Payment Refund</li>
                        </ul>
                    </div><hr />

                    <div className="hellp">
                        <ul>
                            <h2>Help & Setting</h2>
                            <li><ManageAccountsIcon />My Account</li>
                            <li><SupportAgentIcon />Costumer Support</li>
                            <li><LogoutIcon />Sign Out</li>
                        </ul>
                    </div>
                </div>
                <div className="menu-right" onClick={menuFunction}>

                </div>
            </div>
        </>
    )
}
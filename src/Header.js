import React from 'react'
import "./Header.css"

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications"
import { Avatar } from '@material-ui/core';


function Header() {
    return (
    
<div className="header">

    <div className="header__left">
     <MenuIcon/>
        <img 
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        alt="#"/>
    </div>
    
    <div className="header__input">
      <input type="text"/>
      <SearchIcon className="header__inputButton" placeholder="Search" />
    </div>
    
   <div className="header__icons">
      <VideoCallIcon className="header__icon"/>
       <AppsIcon className="header__icon"/>
       <NotificationsIcon className="header__icon"/>
       <Avatar 
       alt="eden"
       src="https://i.pinimg.com/564x/bb/0b/d0/bb0bd0e0477fadc41393c7f64571e321.jpg"
    />
   </div>
    
</div>
    )
}

export default Header

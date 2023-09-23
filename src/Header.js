import React from 'react'
import { useState } from 'react';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import  Avatar  from '@mui/material/Avatar';
import { Link } from "react-router-dom"
import {Route} from "react-router-dom"

function Header() {
  const [inputSearch, setInputSearch] = useState("");


  return (
    <div className='header'>
        <div className='header__left'>
        <MenuIcon/>
        <Link to="/">
        <img
        className='header__logo'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGODoCWG12sFLdictA7wnOcoGgY0wjzZd9g&usqp=CAU"
        alt=''
        />
        </Link>
        </div>

        <div className='header__input'>
        <input 
        onChange={(e) => setInputSearch(e.target.value)} 
        value={inputSearch} 
        placeholder='Search' 
        type="text"
        />
        <Route>
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className='header__inputButton'/>
        </Link>
        </Route>
        
        </div>

        <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsActiveIcon className='header__icon'/>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVYya43A0gJRhBvwjDfKmf5RR0GwLV-fsDRSu8yZLTA&s"/>
        </div>
    </div>
  )
}

export default Header
import React  from 'react'
import "./Navbar.css"
import { FaApple } from "react-icons/fa";
import { IoSearch,IoBag } from "react-icons/io5";
import {  NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="navbar__wrapper">
               <FaApple />
      <NavLink className="navbar__link" to={"/"}>Home</NavLink>
      <NavLink className="navbar__link" to={"/store"}>Store</NavLink>
      <NavLink className="navbar__link" to={"/mac"}>Mac</NavLink>
      <NavLink className="navbar__link" to={"/ipad"}>Ipad</NavLink>
      <NavLink className="navbar__link" to={"/iphone"}>Iphone</NavLink>
      <NavLink className="navbar__link" to={"/watch"}>Watch</NavLink>
      <NavLink className="navbar__link" to={"/vision"}>Vision</NavLink>
      <IoSearch />
      <IoBag />
            </div>
        </div>
    </div>
  )
}

export default Navbar
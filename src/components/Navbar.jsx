import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
     <nav className='NavbarItems' >
        <h1 className='logo'>Finsweet<i className='fab fa-react'></i></h1>
        {/* <div className='menu-icons'>
            <i className='fa fa-bars'></i>
        </div> */}
         <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul  className="nav-menu">
          <li>
          <NavLink className="nav-link" to="/">Home</NavLink>
            </li>  
            <li>
          <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li> 
            <li>
          <NavLink className="nav-link" to="/services">Services</NavLink>
            </li> 
            <li>
          <NavLink className="nav-link" to="/contact">Contact us</NavLink>
            </li> 
            <li>
          <NavLink className="nav-link" to="/">Home</NavLink>
            </li> 
        </ul>
     </nav>
    </>
  )
}

export default Navbar
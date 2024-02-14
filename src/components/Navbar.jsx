import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

   
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


  return (
    <>
     {/* <nav className='NavbarItems' >
        <h1 className='logo'>Finsweet<i className='fab fa-react'></i></h1>
        <div className='menu-icons'>
            <i className='fa fa-bars'></i>
        </div>
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
          <NavLink className="nav-link" to="/">Search</NavLink>
            </li> 
        </ul>
     </nav> */}


<nav>
      <Link to="/" onClick={scrollToTop} className="title">
        
      <h3 className='logo'>Finsweet<i className='fab fa-react'></i></h3>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="headerstruct d-sm-flex align-self-center">

      
      <ul className={menuOpen ? "open m-0 p-0" : "m-0 p-0"}>
        <li>
          <NavLink className="py-2 mx-4" to="/" onClick={scrollToTop}>Home</NavLink>
        </li>
        <li>
          <NavLink className="py-2 mx-4" to="/about" onClick={scrollToTop}>About Us</NavLink>
        </li>
        <li>
          <NavLink className="py-2 mx-4" to="/services" onClick={scrollToTop}>What We Do</NavLink>
        </li>
        <li>
          <NavLink className="py-2 mx-4" to="/contact" onClick={scrollToTop}>Media</NavLink>
        </li>
        <li>
          <NavLink className="py-2 mx-4" to="/" onClick={scrollToTop}>Contact</NavLink>
        </li>
      </ul>
      </div>
    </nav>



    </>
  )
}

export default Navbar
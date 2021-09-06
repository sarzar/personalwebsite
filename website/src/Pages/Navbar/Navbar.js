import './Navbar.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className = "navbar">  
    <Link to = "/">     
    <h1>Sarim Zia</h1> 
     </Link >
    <Link to= "/media"> 
    <h1>Media</h1>
    </Link>
    <Link to="/projects"> 
    <h1>Projects</h1>
    </Link>
    <Link to= "/contact">
    <h1>Contact Me</h1>
    </Link>
    
     </div>
  )
}
export default Navbar
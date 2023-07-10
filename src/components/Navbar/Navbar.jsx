import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarStyle.css'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //untuk mena,bahkan warna pada navbar ketika di scroll
    const[color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);

    //untuk menebalkan menu pada navbar ketika berada di halaman yang dipilih
    const navLinkStyles = ({isActive}) => {
        return{
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'none' : 'none',
        }
      }
  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <NavLink to="/">
            <h1>Portofolio</h1>
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <NavLink style={navLinkStyles} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyles} to="/about">About</NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyles} to="/project">Project</NavLink>
            </li>
            <li>
                <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>)}
        </div>
    </div>
  )
}

export default Navbar
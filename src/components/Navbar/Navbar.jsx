import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky? 'dark-nav' : '' }`}>
            <img src={logo} alt="logo" className="logo" />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Expertise</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <img src={menu_icon} alt="logo" className="menu-icon" onClick={toggleMenu} />
        </nav>
    )
}
export default Navbar

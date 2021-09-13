import React from 'react'
import {ReactComponent as ReactLogo} from '../../resources/logo.svg'
import './navbar.styles.scss'



const Navbar = () => {
    return <div className="nav-container"> 
    <div className='logo-container'>
        <ReactLogo className='logo-img'/>
        <span>TheRandom.Dev</span>
    </div>


    <button className='btn'>Contact Me</button>
    </div>
}


export default Navbar;
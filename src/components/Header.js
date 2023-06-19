import React from 'react';
import logo from '../Images/wwf-logo.svg'


//Header component containing the navigation bar
function Header() {
    return(
        <header className="header">
            
            <nav id="navBar">
                <img src={logo} alt="logo" id="logo"/>
                <a className="nav1"><b>LEARN</b></a>
                <a className="nav1"><b>ACT</b></a>
                <a className="nav1"><b>SUPPORT</b></a>
                <a className="nav1" id="nav1Last"><b>ABOUT</b></a>
                <a className="nav2" id="nav21"><i class="fa fa-search"></i></a>
                <a className="nav2" id="nav22"><b>ADOPT</b></a>
                <a className="nav2" id="nav23"><b>DONATE</b></a>
                <a className="nav2" id="nav24"><b>MEMBERSHIP</b></a>
            </nav>
        </header>
    )
}

export default Header
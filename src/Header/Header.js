import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="container ">
                <div className="flex-container">
                   
                    <div className="flex-item-1">
                        <a href="#" className="logo"><h1>Nova</h1></a>
                     </div>

                     <div className="flex-item-7 nav-links">
                        <a href="#" className="home">Home</a>
                        <a href="#" className="nav-bar-links">About</a>
                        <a href="#" className="nav-bar-links">Services</a>
                        <a href="#" className="nav-bar-links">Portfolio</a>
                        <a href="#" className="nav-bar-links">Team</a>
                        <a href="#" className="nav-bar-links">Blog</a>
                        <a href="#" className="nav-bar-links">Dropdown<span><i class="fa fa-chevron-down" aria-hidden="true"></i></span></a> 
                        <a href="#" className="nav-bar-links">Contact</a>
                       
                     </div>
                   
                   
                </div>
            </div>

        </div>
    ) 
}

export default Header
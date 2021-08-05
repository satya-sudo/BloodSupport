import { div } from 'prelude-ls';
import React from 'react';
import {Link} from 'react-scroll';
const navBar = () => {

    return (
        <div className="navbar_main">
        <nav className="navbar navbar-expand-md  navbar-light">
            <div className="container">
                <Link className="navbar-brand" >Blood Support</Link>
                <button  className="navbar-toggler" data-toggle="collapse" data-target="#navBar-Nav">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBar-Nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="landing" spy={true} smooth={true} duration={500} className="nav-link" >Home</Link>
                    </li>
                    <li  className="nav-item">
                        <Link to="donors" spy={true} smooth={true} duration={500} className="nav-link" >Donors</Link>
                    </li>
                    <li  className="nav-item">
                        <Link to="#help" spy={true} smooth={true} duration={500} className="nav-link" >Help</Link>
                    </li>
                    <li  className="nav-item">
                        <Link  className="nav-link" >Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>    

    );


}


export default navBar;
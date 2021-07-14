import { div } from 'prelude-ls';
import React from 'react';

const navBar = () => {

    return (
        <nav className="navbar navbar-expand-md  navbar-light">
            <div className="container">
                <a className="navbar-brand" >Blood Support</a>
                <button  className="navbar-toggler" data-toggle="collapse" data-target="#navBar-Nav">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBar-Nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" >Home</a>
                    </li>
                    <li  className="nav-item">
                        <a className="nav-link" >About</a>
                    </li>
                    <li  className="nav-item">
                        <a className="nav-link" >Services</a>
                    </li>
                    <li  className="nav-item">
                        <a  className="nav-link" >Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    );


}


export default navBar;
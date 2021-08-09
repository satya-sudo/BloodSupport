import React from 'react';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import linkedIn from '../assets/linkedin.png';

const socialImages = [github,facebook,insta,linkedIn]
const socialImagesLogos = socialImages.map((item) => {return ( <a href="#" className="mx-2"><img src={item} alt="Logo" width="20px" height="20px"/></a>)})

const Footer = () =>{

    return (
        <div className="footer_main">
            <div className="text-center text-white">
                <h4 className="lead">
                    Made with ❤️ by Satyam shree
                </h4> 
                <hr className="w-75"/>
                <div className="row-hl d-flex justify-content-center">
                    {socialImagesLogos}
                </div>

            </div>

        </div>

    );

}

export default Footer;
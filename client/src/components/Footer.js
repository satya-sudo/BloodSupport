import React from 'react';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import linkedIn from '../assets/linkedin.png';

const socialImages = [github,facebook,insta,linkedIn]
const socialLinks = ["https://github.com/satya-sudo","www.facebook.com","https://www.instagram.com/satyam_shree_s22/","https://www.linkedin.com/in/satyam-shree-524208193/"]
const socialImagesLogos = socialImages.map((item,index) => {return ( <a href={socialLinks[index]} className="mx-2"><img src={item} alt="Logo" width="20px" height="20px"/></a>)})

const Footer = ({id}) =>{

    return (
        <div className="footer_main" id={id}>
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
import React from "react";
import Fade from 'react-reveal/Fade';
const Card = ({header,title,content,className}) => {

    className = className +  " card";

    return (
        <Fade top>
        <div className={className}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{content}</p>
                
            </div>
        </div>
        </Fade>
    );

};

export default Card;
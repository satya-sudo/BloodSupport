import React from "react";

const Card = ({header,title,content,className}) => {

    className = className +  " card";

    return (
        <div className={className}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{content}</p>
                
            </div>
        </div>
    );

};

export default Card;
import React from 'react';

const Jumbotron = (props) => {

    return(
        <div className="jumbotron-main">
        <div id={props.id} className="container container-md" >
        <div className="jumbotron text-center" >
            <h1 className="display-3">Welcome To Blood Support</h1>
            <p className="lead">Every year our nation requires about <b> 5 Crore </b> units of blood, out of which only a meager <b>2.5 Crore </b> units of blood are available. The gift of blood is the gift of life. There is no substitute for human blood.</p>
            <hr className="my-2" />
            <p>Want to contribute to this nobel cause?</p>
            <p className="lead">
                <button className="btn btn-info btn-lg" onClick={()=>props.handleToggle(v=>!v)} >Become A Donor</button>
            </p>
        </div>
        </div>
        </div>

    );
};

export default Jumbotron;
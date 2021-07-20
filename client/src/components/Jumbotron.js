import React from 'react';

const Jumbotron = (props) => {

    return(
        <div id={props.id} className="container container-md" >
        <div className="jumbotron text-center" >
            <h1 className="display-3">Welcome To Blood Support</h1>
            <p className="lead">Every year our nation requires about <b> 5 Crore </b> units of blood, out of which only a meager <b>2.5 Crore </b> units of blood are available. The gift of blood is the gift of life. There is no substitute for human blood.</p>
            <hr className="my-2" />
            <p>Want to contribute to this nobel cause?</p>
            <p className="lead">
                <a className="btn btn-info btn-lg"  role="button">Become A Donor</a>
            </p>
        </div>
        </div>

    );
};

export default Jumbotron;
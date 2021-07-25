import React from 'react';
import {connect} from 'react-redux';
import {getAll,getSearched} from '../actions';

import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import SearchBar from './Donors/SearchBar';
import Lister from './Donors/Lister';

class App extends React.Component{
    

    render() {
    return(
        <div>
            <NavBar />
        {/* <button onClick={()=>this.props.getAll()}>ds</button>
        <button onClick={()=>this.props.getSearched({ params: {state:"Bihar"} })}>ds</button> */}
            <Jumbotron id="landing" />
            {/* <SearchBar /> */}
            <Lister />
            
        </div>
    );
    }
};

const mapStateToProps = (state) => {
    return {
        
    }

}

export default connect(mapStateToProps,{getAll,getSearched})(App);
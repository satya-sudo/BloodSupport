import React from 'react';
import {connect} from 'react-redux';
import {getAll,getSearched,addDonor} from '../actions';

import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import RulesMain from './Rules/RulesMain';
import AddDonorForm from './Donors/AddDonor';

import Lister from './Donors/Lister';



class App extends React.Component{


    constructor(props){
        super(props);
        this.test = this.test.bind(this);

    }
    test (){
        this.props.addDonor({name:"satyam"})
    }
    
    render() {
    return(
        <div>
            <NavBar />
        {/* <button onClick={()=>this.props.getAll()}>ds</button>
        <button onClick={()=>this.props.getSearched({ params: {state:"Bihar"} })}>ds</button> */}
            <Jumbotron id="landing" />
            <RulesMain id="help" />
            {/* <SearchBar /> */}
            <Lister id="donors" />
            <AddDonorForm />
            
        </div>
    );
    }
};

const mapStateToProps = (state) => {
    return {
        
    }

}

export default connect(mapStateToProps,{getAll,getSearched,addDonor})(App);
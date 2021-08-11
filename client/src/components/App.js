import React from 'react';
import {connect} from 'react-redux';
import {getAll,getSearched,addDonor} from '../actions';

import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import RulesMain from './Rules/RulesMain';
import AddDonorForm from './Donors/AddDonor';

import Lister from './Donors/Lister';
import Footer from './Footer';



class App extends React.Component{


    constructor(props){
        super(props);
        this.state = {donorToggle:false};
        this.test = this.test.bind(this);
        this.changeToggle = this.changeToggle.bind(this);
        this.donorFromConditional = this.donorFromConditional.bind(this);
    }
    test (){
        this.props.addDonor({name:"satyam"})
    }

    changeToggle(){
        this.setState({donorToggle:!this.state.donorToggle});
        console.log("30",this.state.donorToggle);
    }
    
    donorFromConditional() {
        console.log("34","hey")
        console.log("34",this.state.donorToggle)
        if (this.state.donorToggle === true){
            console.log("sa")
            return <AddDonorForm  handleToggle={this.changeToggle} />
        };
    }

    render() {
    return(
        <div>
            <NavBar />
        {/* <button onClick={()=>this.props.getAll()}>ds</button>
        <button onClick={()=>this.props.getSearched({ params: {state:"Bihar"} })}>ds</button> */}
            <Jumbotron id="landing" handleToggle={this.changeToggle} />
            {console.log(this.donorToggle)}
            {this.donorFromConditional()}
            <RulesMain id="help" />
            {/* <SearchBar /> */}
            <Lister id="donors" />
            <Footer />
            
        </div>
    );
    }
};

const mapStateToProps = (state) => {
    return {
        
    }

}

export default connect(mapStateToProps,{getAll,getSearched,addDonor})(App);
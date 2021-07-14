import React from 'react';
import {connect} from 'react-redux';
import {getAll,getSearched} from '../actions';


class App extends React.Component{
    

    render() {
    return(
        <div>maa
        <button onClick={()=>this.props.getAll()}>ds</button>
        <button onClick={()=>this.props.getSearched({ params: {state:"Bihar"} })}>ds</button>

        </div>
    );
    }
};

const mapStateToProps = (state) => {
    return {
        
    }

}

export default connect(mapStateToProps,{getAll,getSearched})(App);
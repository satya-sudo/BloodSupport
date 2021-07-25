import React from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../actions';
import Listitem from './ListItem';
import Table from './Table';
class Lister extends React.Component{

    componentDidMount() {
        this.props.getAll();
    };
    
    
    

    render() {
        console.log(this.props.data,"sad");
        return ( 
            <Table data={this.props.data} />
        )
    }

}

const mapSteteToProps = (state) => {
    return {
        data: Object.values(state.bloodSupport)
    }
}

export default connect(mapSteteToProps,{ getAll })(Lister);
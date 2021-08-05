import React from 'react';
import { connect } from 'react-redux';
import { getSearched } from '../../actions';
import Listitem from './ListItem';
import Table from './Table';


class Lister extends React.Component{

    constructor(props)  {
        super(props);
        this.state = {
            bloodtype: null,
            state: null
        }
        this.handleBloodType = this.handleBloodType.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.getSearched();
    };
    
    handleBloodType(event) {
        this.setState({bloodtype: event.target.value});
    }
    handleState(event) {
        console.log(event.target.value)
        this.setState({state: event.target.value});
    }
    handleSearch() {
        let params = null;
        if (this.state.state != null && this.state.state != "State") {
            params = {
                state: this.state.state
            }
        }
        if (this.state.bloodtype != null) {
            params = {
                ...params,bloodtype: this.state.bloodtype
            }
        }
        console.log(params,"sdfkkkkkk");
        if (params != null) {
            this.props.getSearched({params})
        } else {
            this.props.getSearched()
        }
    }

    

    render() {
        console.log(this.props.data,"sad");
        return ( 
            <div >
                <div className="search_bar" id={this.props.id} >
                <div className="container row-hl d-flex justify-content-around">
                    <div className="m-2">
                        <h2>Search for donors</h2>
                    </div>
                    <div className="form-inline">
                    <div className="form-group m-2 ">
                        <select className="form-control" id="bloodtype"value={this.state.bloodtype} onChange={this.handleBloodType}>
                            <option value={null}>bloodtype</option>
                            <option value="B">B</option>
                        </select>
                    </div>
                    
                    <div className="form-group m-2">

                        <select className="form-control" id="state" value={this.state.state} onChange={this.handleState}>
                            <option value={null}>State</option>
                            <option value="Bihar">B</option>
                        </select>
                    </div>
                    <button className="btn btn-info m-2" onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <Table data={this.props.data} />
            </div>
            
        )
    }

}

const mapSteteToProps = (state) => {
    return {
        data: Object.values(state.bloodSupport)
    }
}

export default connect(mapSteteToProps,{ getSearched })(Lister);
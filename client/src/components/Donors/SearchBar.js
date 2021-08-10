// not actually being used 



import React from 'react';
import { connect } from 'react-redux';
import { getSearched } from '../../actions';
import { stateData,BloodTypeData } from '../../constants/ConstantsData';

const stateFieldoptions  = stateData.map(state => {return  <option value={state}>{state}</option>})
const bloodtypeFieldOptions = BloodTypeData.map(bloodType => {return <option value={bloodType}>{bloodType}</option>  })



class Search extends  React.Component{
    

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


    handleBloodType(event) {
        this.setState({bloodtype: event.target.value});
    }
    handleState(event) {
        this.setState({state: event.target.value});
    }
    handleSearch() {
        let params = null;
        if (this.state.state != null) {
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

        return (
            <div className="search_bar">
                <div className="container row-hl d-flex justify-content-around">
                    <div className="m-2">
                        <h2>Search for donors</h2>
                    </div>
                    <div className="form-inline">
                    <div className="form-group m-2 ">
                        <select className="form-control" id="bloodtype"value={this.state.bloodtype} onChange={this.handleBloodType}>
                            <option value={null}>bloodtype</option>
                            { bloodtypeFieldOptions } 
                        </select>
                    </div>
                    
                    <div className="form-group m-2">

                        <select className="form-control" id="state" value={this.state.state} onChange={this.handleState}>
                            <option value={null}>State</option>
                            { stateFieldoptions }
                        </select>
                    </div>
                    <button className="btn btn-info m-2" onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
            </div>

        );

    }

}



export default connect(null,{getSearched})(Search);
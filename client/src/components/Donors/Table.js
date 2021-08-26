import React from 'react';
import Listitem from './ListItem';
const Table = (props) => {
    
    return (
        <div className="table-responsive">
        <table class="table ">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bloodgroup</th>
                    <th>Phone No.</th>
                    <th>State</th>
                    <th>City</th>

                </tr>
            </thead>
            <tbody>
                {props.data.map((item, index) =><Listitem key={index} item={item} />)}
            </tbody>
        </table>
        </div>
    )
}

export default Table;
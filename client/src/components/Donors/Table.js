import React from 'react';
import Listitem from './ListItem';
const Table = (props) => {
    
    return (
        <div className="table-responsive">
        <table class="table ">
            <thead>
                <tr>
                    <th>name</th>
                    <th>bloodgroup</th>
                    <th>state</th>
                    <th>city</th>

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
import React from 'react';

const Listitem = (props) =>{
    console.log("ls",props)
    return (
        <tr>
            
            <td>{props.item.name}</td>
            <td>{props.item.bloodgroup}</td>
            <td>{props.item.state}</td>
            <td>{props.item.city}</td>
        </tr>
    )
}

export default Listitem;
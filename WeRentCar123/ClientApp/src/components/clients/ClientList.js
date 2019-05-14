import React from 'react'
import {connect} from 'react-redux'
const ClientList = (props) => {
    return (
        <div>
            <button className="btn btn-success btn-sm" onClick={()=> props.goto("/clients/add")}>Add New</button>
            <br/>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone Number</th>
            <th>Options</th>        
          </tr>
        </thead>
        <tbody>
            {
                props.clients.map((c,i)=>
                <tr key={i}>
                    <td>{c.Firstname}</td>
                    <td>{c.Lastname}</td>
                    <td>{c.PhoneNumber}</td> 
                    <td><button className="btn btn-danger btn-sm">Delete</button>{" "}<button className="btn btn-warning btn-sm">Edit</button></td>             
                 </tr>
                )
            }
          
         
        </tbody>
        </table>
        </div>
    )
}
function mapStateToProps(state){
    return {
        clients : state.Clients
    }
}
export default connect(mapStateToProps, null)(ClientList)
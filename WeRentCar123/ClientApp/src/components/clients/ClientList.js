import React from 'react'

export const ClientList = (props) => {
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
        
            <tr>
              <td>jpose</td>
              <td>artinez</td>
              <td>8094545245</td> 
              <td><button className="btn btn-danger btn-sm">Delete</button>{" "}<button className="btn btn-warning btn-sm">Edit</button></td>             
            </tr>
         
        </tbody>
        </table>
        </div>
    )
}
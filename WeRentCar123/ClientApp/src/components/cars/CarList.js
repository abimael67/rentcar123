import React from 'react'
import {connect} from 'react-redux';
const CarList = (props) => {
    function removeCar(id){        
        props.removeCar(id)
    }
    return (
        <div>
            <button className="btn btn-success btn-sm" onClick={()=> props.goto("/cars/add")}>Add New</button>
            <br/>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>   
            <th>Options</th>         
          </tr>
        </thead>
        <tbody>
            {props.cars.length === 0 ? <tr><td>Loading...</td></tr> : props.cars.map((c,i)=>
            <tr key={i}>
              <td>{c.Brand.Name}</td>
              <td>{c.Model.Name}</td>
              <td>{c.Year}</td> 
              <td>{c.Color}</td> 
              <td><button className="btn btn-danger btn-sm" onClick={()=>{removeCar(c.Id)}}>Delete</button>{" "}<button className="btn btn-warning btn-sm" onClick={()=>{props.goto("cars/edit/"+c.Id)}}>Edit</button></td>             
            </tr>
            )}
            
         
        </tbody>
        </table>
        </div>
    )
}
function mapStateToProps(state){
    return {
        cars : state.Cars
    }
}
export default connect(mapStateToProps, null)(CarList)
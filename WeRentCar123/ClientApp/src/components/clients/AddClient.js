import React from 'react'

export const AddClient = (props) => {
    return (
        
        <form>
        <div className="form-group">
          <label htmlFor="txtFirstname">Firstname</label>
          <input type="text" className="form-control" id="txtFirstname" placeholder="Enter the firstname"/> 
        </div>
        <div className="form-group">
          <label htmlFor="txtLastname">Lastname</label>
          <input type="text" className="form-control" id="txtLastname" placeholder="Enter the lastname"/>
        </div>
        <div className="form-group">
        <label htmlFor="txtPhoneNumber">Phone Number</label>
        <input type="tel" className="form-control" id="txtPhoneNumber" placeholder="Enter the phone number"/>
        </div>
        <button type="submit" className="btn btn-success">Add Client</button>{" "}
        <button className="btn btn-danger" onClick={()=> props.goto("/clients")}>Cancel</button>
      </form>
        
    )
}
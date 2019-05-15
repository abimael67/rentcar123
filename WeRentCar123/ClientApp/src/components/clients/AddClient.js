import React, { useState} from 'react'

export const AddClient = (props) => {
  const [client, setClient] = useState({})
  function setClientProperty(e){       
    setClient(Object.assign(client, {}, {[e.target.name]:e.target.value}))
  }
  function addNewClient(){     
    props.addNewClient(client)        
  }
    return (
        
        <form>
        <div className="form-group">
          <label htmlFor="txtFirstname">Firstname</label>
          <input type="text" name="Firstname" onChange={(e)=>setClientProperty(e)} className="form-control" id="txtFirstname" placeholder="Enter the firstname"/> 
        </div>
        <div className="form-group">
          <label htmlFor="txtLastname">Lastname</label>
          <input type="text" name="Lastname" onChange={(e)=>setClientProperty(e)} className="form-control" id="txtLastname" placeholder="Enter the lastname"/>
        </div>
        <div className="form-group">
        <label htmlFor="txtPhoneNumber">Phone Number</label>
        <input type="tel" name="PhoneNumber" onChange={(e)=>setClientProperty(e)} className="form-control" id="txtPhoneNumber" placeholder="Enter the phone number"/>
        </div>
        <button type="submit" className="btn btn-success" onClick={(e)=>{e.preventDefault();addNewClient();}}>Add Client</button>{" "}
        <button className="btn btn-danger" onClick={()=> props.goto("/clients")}>Cancel</button>
      </form>
        
    )
}
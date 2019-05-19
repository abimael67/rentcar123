import React, { useState, useEffect} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import { isObjectEmpty } from '../../common/util';
const EditCar = (props) => {    
    const [models, setModels] = useState([])
    const [car, setCar] = useState({})
    const [imageUrl, setImageUrl] = useState("")   
    function selectBrand(brandId){              
        setModels(props.Brands.find(b=> b.Id == brandId).Models)
    }
    useEffect(() => {      
        if(car.brandId && props.Brands.length > 0){
            selectBrand(car.brandId)           
        }
        if(car.id && !imageUrl)
            props.downloadImage(car.id, (resp)=> setImageUrl(resp))
        if(isObjectEmpty(car))         
            props.getCar.then(currentCar=> setCar(currentCar[0]))   
      }, [car]);
    function setCarProperty(e){       
        setCar(Object.assign(car, {}, {[e.target.name]:e.target.value}))
    }
    return (        
        <form>
        <div className="form-group">                  
            <img style={{maxWidth:250}} id="imgImage" src={imageUrl} alt="Car pic" />
        </div>
        <div className="form-group">
          <label htmlFor="ddlBrand">Brand</label>
          <select name="brandId" className="form-control" value={car.brandId} id="ddlBrand" onChange={(e)=>{selectBrand(e.target.value); setCarProperty(e); }} ><option>Select</option>
          {
              props.Brands.map((b,i)=>
                <option key={i} value={b.Id}>{b.Name}</option>
              )
          }
          </select> 
        </div>
        <div className="form-group">
          <label htmlFor="ddlModel">Model</label>
          <select name="modelId" value={car.modelId} onChange={(e)=>setCarProperty(e)} className="form-control" id="ddlModel" ><option>Select</option>
          {
              models.map((b,i)=>
                <option key={i} value={b.Id}>{b.Name}</option>
              )
          }
          </select> 
        </div>
        <div className="form-group">
          <label htmlFor="ddlYear">Year</label>
          <select name="year" onChange={(e)=>setCarProperty(e)} value={car.year} className="form-control" id="ddlYear" ><option>Select</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          </select> 
        </div>
        <div className="form-group">
            <label htmlFor="txtColor">Color</label>
            <input name="color" value={car.color ? car.color : ""} onChange={(e)=>setCarProperty(e)} type="text" className="form-control" id="txtColor" placeholder="Enter the color"/>
        </div>
        <div className="form-group">
            <label htmlFor="txtNotes">Notes</label>
            <input name="notes" value={car.notes ? car.notes: "" } onChange={(e)=>setCarProperty(e)} type="text" className="form-control" id="txtNotes" placeholder="Enter a note"/>
        </div>
        <div className="form-group">
            <label htmlFor="txtDailyPrice">Daily Price $</label>
            <input name="dailyPrice" value={car.dailyPrice? car.dailyPrice : ""} onChange={(e)=>setCarProperty(e)} type="number" className="form-control" id="txtDailyPrice" placeholder="Enter an amount"/>
        </div>
       
        <button type="submit" onClick={(e)=>{e.preventDefault();props.updateCar(car)}} className="btn btn-success">Save Car</button>{" "}
        <button className="btn btn-danger" onClick={()=> props.goto("/cars")}>Cancel</button>
      </form>
        
    )
}
function mapStateToProps(state) {
    return {
        Brands: state.Brands
    }
}
let connected = connect(mapStateToProps, null)(EditCar)
export default withRouter(connected)
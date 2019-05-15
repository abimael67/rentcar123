import React, { useState, useEffect} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
const EditCar = (props) => {    
    const [models, setModels] = useState([])
    const [car, setCar] = useState({})
    const [imageUrl, setImageUrl] = useState("")
    const [image, setImage] = useState({})
    let currentCar = {}
    function selectBrand(e){              
        setModels(props.Brands.filter(b=> b.Id == e.target.value)[0].Models)
    }
    useEffect(() => {       
        props.Car.then(e=> {currentCar = e; console.log(e)})   
      });
    function setCarProperty(e){       
        setCar(Object.assign(car, {}, {[e.target.name]:e.target.value}))
    }

    function setPreview(input){
        if (input.target.files && input.target.files[0]) {
            var reader = new FileReader();    
            reader.onload = function (e) {
                setImageUrl(e.target.result)
            }
            setImage(input.target.files[0])
            reader.readAsDataURL(input.target.files[0])
        }
    }
   // console.log(currentCar)
    return (        
        <form>
        <div className="form-group">
          <label htmlFor="ddlBrand">Brand</label>
          <select name="BrandId" className="form-control"  id="ddlBrand" onChange={(e)=>{selectBrand(e); setCarProperty(e); }} ><option>Select</option>
          {
              props.Brands.map((b,i)=>
                <option key={i} value={b.Id}>{b.Name}</option>
              )
          }
          </select> 
        </div>
        <div className="form-group">
          <label htmlFor="ddlModel">Model</label>
          <select name="ModelId" onChange={(e)=>setCarProperty(e)} className="form-control" id="ddlModel" ><option>Select</option>
          {
              models.map((b,i)=>
                <option key={i} value={b.Id}>{b.Name}</option>
              )
          }
          </select> 
        </div>
        <div className="form-group">
          <label htmlFor="ddlYear">Year</label>
          <select name="Year" onChange={(e)=>setCarProperty(e)} className="form-control" id="ddlYear" ><option>Select</option>
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
            <input name="Color" onChange={(e)=>setCarProperty(e)} type="text" className="form-control" id="txtColor" placeholder="Enter the color"/>
        </div>
        <div className="form-group">
            <label htmlFor="txtNotes">Notes</label>
            <input name="Notes" onChange={(e)=>setCarProperty(e)} type="text" className="form-control" id="txtNotes" placeholder="Enter a note"/>
        </div>
        <div className="form-group">
            <label htmlFor="txtDailyPrice">Daily Price $</label>
            <input name="DailyPrice" onChange={(e)=>setCarProperty(e)} type="number" className="form-control" id="txtDailyPrice" placeholder="Enter an amount"/>
        </div>
        <div className="form-group">
            <label htmlFor="flImage">Image</label>
            <input className="form-control" onChange={(e) => setPreview(e)  } id="flImage" type='file' />
            <img style={{maxWidth:50}} id="imgImage" src={imageUrl} alt="Car pic" />
        </div>
        <button type="submit" onClick={(e)=>{e.preventDefault();}} className="btn btn-success">Save Car</button>{" "}
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
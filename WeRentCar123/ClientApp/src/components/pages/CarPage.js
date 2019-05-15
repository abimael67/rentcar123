import React, {Component} from 'react'
import AddCar from '../cars/AddCar'
import  CarList  from '../cars/CarList'
import EditCar from '../cars/EditCar'
import { loadAllCars, addCar, removeCar, addImageToCar, downloadImage, getCar } from '../../services/cars'
import { loadAllBrands } from '../../services/brands'

export default class CarPage extends Component {
    constructor(props){
        super(props)
        this.addNewCar = this.addNewCar.bind(this)
        this.addImage = this.addImage.bind(this)
        this.getCar = this.getCar.bind(this)
        this.downloadImage = this.downloadImage.bind(this)
        this.state = {
            carImageUpload: null,
            car:{}
        }
    }
        componentDidMount(){
            loadAllCars();
            loadAllBrands();
        }
        addNewCar(car){
            addCar(car)
            .then(res => {
                if (!res.ok) 
                    alert("Error inserting the car")                
                else {                    
                    res.json().then(r => {                        
                        addImageToCar(this.state.carImageUpload, r.id)                        
                    })                    
                    this.props.history.push('/cars')         
                }                           
               })
              .catch(error => console.error('Error:', error))
        }

        downloadImage(id){
            downloadImage(id)
            .then(resp=>resp.blob())
            .then(blob =>         
                {                
                var reader = new FileReader() 
                reader.onload = function (r) {
                    console.log(r.target.result)
                }
                    reader.readAsDataURL(blob)
                })  
        }
        getCar(id){
            return getCar(id).then(r=> r.json())
        }
        addImage(image){
            this.setState({carImageUpload: image})
        }
        removeCar(id){
            if(window.confirm("are you sure?"))
                removeCar(id)
                .then(res => {
                    if(!res.ok)
                        alert("Could not delete that car")
                    else
                        loadAllCars(); 
                })
                .catch(err => console.log(err))
        }
     render(){
         let ToRender = <CarList/>
        switch(this.props.match.path){
            case "/cars/add":
            ToRender = <AddCar goto={this.props.history.push} addNewCar={this.addNewCar} addImage={this.addImage}/>
            break;
            case "/cars/edit/:id":
            let car =  this.getCar(this.props.match.params.id)
            ToRender = <EditCar goto={this.props.history.push} Car={car} downloadImage={this.downloadImage}/>
            break;
            default:
            ToRender = <CarList goto={this.props.history.push} removeCar={this.removeCar} />
            break;
        }
    return (
            <div>
                <h3>Cars</h3>
                {ToRender}
            </div>
        )
    }

}
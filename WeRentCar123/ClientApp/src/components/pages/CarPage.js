import React, {Component} from 'react'
import AddCar from '../cars/AddCar'
import  CarList  from '../cars/CarList';
import { loadAllCars, addCar } from '../../services/cars';
import { loadAllBrands } from '../../services/brands';

export default class CarPage extends Component {
        componentDidMount(){
            loadAllCars();
            loadAllBrands();
        }
        addNewCar(car){
            addCar(car)
        }
       render(){
        let ToRender = <CarList/>
        switch(this.props.location.pathname){
            case "/cars/add":
            ToRender = <AddCar goto={this.props.history.push} addNewCar={this.addNewCar}/>
            break;
            default:
            ToRender = <CarList goto={this.props.history.push}/>
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
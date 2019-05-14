import {combineReducers} from 'redux'
import {Cars} from './CarsReducer'
import {Brands} from './BrandsReducer'
export default combineReducers({
    Cars, Brands
});
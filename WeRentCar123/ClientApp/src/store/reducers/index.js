import {combineReducers} from 'redux'
import {Cars} from './CarsReducer'
import {Brands} from './BrandsReducer'
import {Clients} from './ClientsReducer'
export default combineReducers({
    Cars, Brands, Clients
});
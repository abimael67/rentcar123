
export const Cars = (state = [], action) => {
    switch(action.type){
        case "LOAD_CARS":
            return [ ...action.cars]       
        case "UPDATE_CAR":
            return state.map(e=>{
                if(e.carId === action.car.carId){
                    return Object.assign({}, e, action.car)
                }
                return e
            }) 
        default: 
            return state;
    }
}
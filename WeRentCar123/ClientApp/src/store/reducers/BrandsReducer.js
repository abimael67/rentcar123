export const Brands = (state = [], action) => {
    switch(action.type){
        case "LOAD_BRANDS":
            return [ ...action.brands]             
        default: 
            return state;
    }
}
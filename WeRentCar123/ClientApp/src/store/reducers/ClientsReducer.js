
export const Clients = (state = [], action) => {
    switch(action.type){
        case "LOAD_CLIENTS":
            return [ ...action.clients]       
        case "UPDATE_CLIENT":
            return state.map(e=>{
                if(e.Id === action.client.Id){
                    return Object.assign({}, e, action.client)
                }
                return e
            }) 
        default: 
            return state;
    }
}
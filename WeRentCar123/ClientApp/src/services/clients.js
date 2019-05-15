import store from '../store/store'

export const loadAllClients = () =>{
    fetch('api/Clients/')
        .then(response => response.json())
        .then(data => {            
            store.dispatch({type:'LOAD_CLIENTS', clients:data});           
        });
}
export const addClient = (client) =>{
   return fetch('api/Clients', {
        method: 'POST', 
        body: "'"+JSON.stringify(client)+"'", 
        headers:{
          'Content-Type': 'application/json'
        }
      })
}

export const removeClient = (id) =>{
    return  fetch('api/Clients/'+id, {
         method: 'DELETE',           
         headers:{
           'Content-Type': 'application/json'
         }
       })       
 }
import store from '../store/store'

export const loadAllCars = () =>{
    fetch('api/Clients/')
        .then(response => response.json())
        .then(data => {
            store.dispatch({type:'LOAD_CLIENTS', clients:data.Value});
            console.log(data)
        });
}
export const addCar = (car) =>{
    fetch('api/Clients', {
        method: 'POST', 
        body: "'"+JSON.stringify(car)+"'", 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}
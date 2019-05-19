import store from '../store/store'

export const loadAllCars = () =>{
    fetch('api/Cars/')
        .then(response => response.json())
        .then(data => {
            store.dispatch({type:'LOAD_CARS', cars:data.Value});           
        });
}
export const addCar = (car) =>{
   return  fetch('api/Cars', {
        method: 'POST', 
        body: "'"+JSON.stringify(car)+"'", 
        headers:{
          'Content-Type': 'application/json'
        }
      })      
}
export const updateCar = (car, carId) =>{
  car.imageUrl = "" //set imageUrl to empty, we don't want to update it
  return  fetch('api/Cars?carId='+carId, {
       method: 'PUT', 
       body: "'"+JSON.stringify(car)+"'", 
       headers:{
         'Content-Type': 'application/json'
       }
     })      
}
export const addImageToCar = (image, carId) =>{
    var formData = new FormData()    
    formData.append("file",image)    
    return fetch('api/Cars/UploadImage/'+carId, {
         method: 'POST', 
         body: formData,          
       })       
 }

 export const downloadImage = (carId) =>{       
     return fetch('api/Cars/GetImage/'+carId, {
         method: 'GET',             
       })   
 }

export const removeCar = (id) =>{
    return  fetch('api/Cars/'+id, {
         method: 'DELETE',           
         headers:{
           'Content-Type': 'application/json'
         }
       })       
 }

 export const getCar = (carId) =>{       
    return fetch('api/Cars/Get/'+carId, {
        method: 'GET',             
      })   
}
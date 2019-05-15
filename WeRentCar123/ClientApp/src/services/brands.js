import store from '../store/store'

export const loadAllBrands = () =>{
    fetch('api/Brands/')
        .then(response => response.json())
        .then(data => {
            store.dispatch({type:'LOAD_BRANDS', brands:data.Value});           
        });
}
import { AddManyCustomersAction } from "../customerReduser"

export const fetchingCustomers = ()=>{
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(AddManyCustomersAction(json)))
    } 
}
import React from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux'


function PizzaItem({ getPizza, pizza }) {
    const dispatch =useDispatch();
 const handleAddPizza = () =>{
console.log(pizza);
dispatch ({type: 'ADD_TO_CART', payload: pizza})

}



function PizzaItem({ getPizza, pizza }) {

    return (
        <tr>
            <td>{pizza.name}</td>
            <td>{pizza.description}</td>
            <td>{pizza.price}</td>

            <td> <img class= 'image'src={pizza.image_path}/> </td>
            <td>
                <button onClick={handleAddPizza}>Add</button>

            <td> <img src={pizza.image_path}/> </td>
            <td>
                {/* <button onClick={handleAddPizza}>Add</button> */}
 main
            </td>
        </tr>
    );
}

export default PizzaItem; 
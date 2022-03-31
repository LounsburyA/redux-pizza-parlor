import React from 'react';
import axios from 'axios';

function PizzaItem({ getPizza, pizza }) {
    return (
        <tr>
            <td>{pizza.name}</td>
            <td>{pizza.description}</td>
            <td>{pizza.price}</td>
            <td> <img src={pizza.image_path}/> </td>
            <td>
                {/* <button onClick={handleAddPizza}>Add</button> */}
            </td>
        </tr>
    );
}

export default PizzaItem; 
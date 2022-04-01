import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux'


function PizzaItem({ getPizza, pizza }) {

    const dispatch = useDispatch();


    const [isShowing, setIsShowing] = useState(false);

    const handleAddPizza = () => {
        console.log(pizza);
        dispatch({ type: 'ADD_TO_CART', payload: pizza })


    }


    const handleShow = () => {

        console.log('add is clicked');
        setIsShowing(!isShowing)
    }
    const handleRemove = () => {
        console.log('remove  clikced');

        dispatch({ type: 'REMOVE_ITEM', payload: pizza })
    }



    return (
<>

        <tr>
            <td>{pizza.name}</td>
            <td className='desc'>{pizza.description}</td>
            <td>{pizza.price}</td>

            <td> <img className='img' src={pizza.image_path} /> </td>
            {/* {/* <td> */}
            <div onClick={handleShow}>
                {isShowing ? <button onClick={handleRemove}>Remove</button> : <button onClick={handleAddPizza}>Add</button>}
            </div>
            <td>
                {/* <button onClick={handleAddPizza}>Add</button> */}

            </td>
            <td>
                {/* <button onClick ={handleRemove}>Remove</button> */}
            </td>


            <td> <img className= 'image' src={pizza.image_path}/> </td>
            <td><button onClick={handleAddPizza}>Add</button></td>


        </tr>


</>
    );
}

export default PizzaItem;
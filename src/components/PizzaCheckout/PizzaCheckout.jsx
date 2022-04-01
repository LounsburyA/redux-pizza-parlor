import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';

function PizzaCheckout() {

    let cost = 0;
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.addPizzaReducer);
    
    const totalPrice = () => {
    console.log('in PizzaCheckout totalPrice, cartList = ',cartList );   
        for(let pizza of cartList){
            cost += Number(pizza.price)
        }
        dispatch ({type: 'SET_TOTAL_PRICE', payload: cost})
        return cost
    }
    console.log(totalPrice(cartList));

    

    return (
        <div>
            <h2>Checkout</h2>
            <table>
                <tbody>                
                        {cartList.map((cartItem) => {
                            return(
                            <tr>
                                <td>{cartItem.name}</td>
                                <td>{cartItem.price}</td>
                            </tr>
                            )
                        })}
                </tbody>
            </table>
            <button>Checkout</button>
        </div>
    )
}

export default PizzaCheckout;
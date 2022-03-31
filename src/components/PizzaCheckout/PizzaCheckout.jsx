import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';

function PizzaCheckout() {

    const dispatch = useDispatch();
    const cartList = useSelector(state => state.addPizzaReducer);

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
        </div>
    )
}

export default PizzaCheckout;
import React from 'react';
import { useSelector, useDispatch, useEffect } from 'react-redux';
import Axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function PizzaCheckout() {

    let cost = 0;
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.addPizzaReducer);

    // const handleSubmit = event => {
    //     // event.preventDefault();

    //     console.log('adding order', {});

        const handleCheckout = () => {
        Axios.post('/api/order', {
                "customer_name": "Donatello",
                "street_address": "20 W 34th St",
                "city": "New York",
                "zip": "10001",
                "total": "27.98",
                "type": "Pickup",
                "pizzas": [{
                  "id": "1",
                  "quantity": "1"
                },{
                  "id": "2",
                  "quantity": "1"
                }]
        })
        .then(response => {
            console.log('Pizza Order Sent');
            // getPizza();
        }).catch(err => {
            console.log('error in PizzaCheckout POST', err);
        })
    }

    
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
            <Link to='/'><button onClick={handleCheckout}>Checkout</button></Link>
        </div>
    )
}

export default PizzaCheckout;
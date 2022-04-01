import { useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function PizzaForm({ getPizza }) {

    return (
        <section>
            <h2>Step 2: Customer Information</h2>

            <input
                required
                placeholder="Name"
            />

            <input
                required
                placeholder="Street Address"
            />

            <input
                required
                placeholder="City"
            />

            <input
                required
                placeholder="Zip"
            />
            <div>
            <input type="radio" id="html" name="Pickup" value="HTML"/> <label for="Pickup">Pickup</label>
            </div>
            
            <div>
            <input type="radio" id="html" name="Delivery" value="HTML"/> <label for="Delivery">Delivery</label>
            </div>


            <Link to='/addPizzaCheckout'><button type="submit">
                    NEXT
                </button></Link>

        </section>
    );
}

export default PizzaForm;
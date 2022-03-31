import { useState } from 'react';
import axios from 'axios';

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

            <input type="radio" id="html" name="Pickup" value="HTML"/>
            <input type="radio" id="html" name="Delivery" value="HTML"/>



                <button type="submit">
                    NEXT
                </button>

        </section>
    );
}

export default PizzaForm;
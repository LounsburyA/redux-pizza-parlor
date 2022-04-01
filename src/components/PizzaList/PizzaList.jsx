import React from 'react';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function PizzaList({getPizza}) {

    const pizzaList = useSelector(state => state.pizzaReducer)


    return(
        <>
        <div>
            <table>
                <tbody>
                    {pizzaList.map((pizza) => {
                        return (
                            <PizzaItem 
                                key={pizza.id}
                                getPizza={getPizza}
                                pizza={pizza}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
        <Link to='/addPizzaForm'><button type="submit">
                    NEXT
                </button></Link>
        </>
    )

}

export default PizzaList;
import React from 'react';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList({getPizza}) {

    const pizzaList = useSelector(state => state.pizzaReducer)

    return(
        <div>
            <table>
                <tbody>
                    {pizzaList.map((pizza) => {
                        return (
                            <PizzaItem 
                                key={pizza.id}
                                name={name}
                                description={description}
                                price={price}
                                image_path={image_path}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default PizzaList;
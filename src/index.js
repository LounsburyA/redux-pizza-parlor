import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'



const pizzaReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST') {
        return action.payload
    }
    return state
}
const addPizzaReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        console.log('here is payload', action.payload);
        return [...state, action.payload];
    } else if (action.type === 'REMOVE_ITEM'){
        return state.filter(pizza => pizza.id !== action.payload.id)
    }
    return state;
}

const totalPriceReducer = (state = 0, action) => {
    if (action.type === 'SET_TOTAL_PRICE') {
        console.log('totalPriceReducer =', action.payload);
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        addPizzaReducer,
        totalPriceReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

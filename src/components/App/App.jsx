import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import { useSelector } from 'react-redux';
import PizzaForm from '../PizzaForm/PizzaForm';
import PizzaCheckout from '../PizzaCheckout/PizzaCheckout';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('in useEffect');
    getPizza();
  }, []);

  const getPizza = () => {
    axios.get('/api/pizza')
      .then((response) => {
        console.log(response.data);
        dispatch({ type: 'SET_PIZZA_LIST', payload: response.data })
      })
      .catch((error) => {
        console.log('error in GET pizza', error);
      });

  };

  const cost = useSelector(state => state.totalPriceReducer)

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
        <span className='App-title'>Prime Pizza</span><span className='Total'>Total : ${cost}</span>
        </header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/addPizzaForm'>Customer Information Form</Link>
            </li>
            <li>
              <Link to='/addPizzaCheckout'>Customer Checkout</Link>
            </li>
          </ul>
        </nav>

        <Route exact path='/'>
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
          <PizzaList getPizza={getPizza} />
        </Route>

        <Route path='/addPizzaForm'>
          <PizzaForm />
        </Route>

        <Route path='/addPizzaCheckout'>
          <PizzaCheckout />
        </Route>

      </div>
    </Router>
  );
}

export default App;

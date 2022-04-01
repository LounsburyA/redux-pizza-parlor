import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import PizzaList from '../PizzaList/PizzaList';
import PizzaCheckout from '../PizzaCheckout/PizzaCheckout';

import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log('in useEffect');
    getPizza();
  }, []);

  const getPizza =()=>{
  axios.get('/api/pizza')
  .then((response)=> {
  console.log(response.data);
  dispatch({type: 'SET_PIZZA_LIST', payload: response.data})
  })
  .catch((error)=>{
    console.log('error in GET pizza', error);
  });

  };
  
  const cost = useSelector(state => state.totalPriceReducer)

  return (
    <div className='App'>
      <header className='App-header'>
        <span className='App-title'>Prime Pizza</span><span className='Total'>Total : ${cost}</span>
        
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <PizzaList getPizza={getPizza} />
      
      
      <PizzaCheckout />
    
    </div>
  );
}

export default App;

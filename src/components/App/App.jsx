import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';

import {useDispatch} from 'react-redux';

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
  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  const names = ['Alice' , 'Bob', 'Charlie', 'David'];
  const App = () => {
  return (
      <div className = "app-container">
        <h2>List of Names:</h2>
        <ul className="name-list">
          {names.map((name, index) =>(<li key={index}>{index +1}. {name}</li>))}
        </ul>
      </div>
  );
};
export default App
//adding line to push to new branch array and css
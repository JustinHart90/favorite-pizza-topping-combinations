import React, { useState, useEffect } from 'react';
import List from './Components/List';
import PizzasJson from './Data/pizzas.json';
import GetCombinations from './Functions/GetCombinations';

function App() {
  const [combinations, setCombinations] = useState([]);
  
  // componentDidMount
  useEffect(() => {
    // Output the top 20 most frequently ordered pizza topping combinations found in "PizzasJson"
    const favCombinations = GetCombinations(PizzasJson);
    setCombinations(favCombinations);
  }, []);

  return (
    <div>
      <h2>Favorite Pizza Topping Combinations</h2>
      <List combinations={combinations} />
    </div>
  );
}

export default App;

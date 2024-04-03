import React, { useState } from 'react';
import axios from 'axios';



const AverageCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [average, setAverage] = useState(null);

  const fetchNumbers = async (numberId) => {
    try {
      const response = await axios.get(`http://20.244.56.144/test/${numberId}`);
      const data = response.data;

      setNumbers(data.numbers);
      setWindowPrevState(data.windowPrevState);
      setWindowCurrState(data.windowCurrState);
      setAverage(data.avg);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };
  

  return (
    <div>
      <h1>Average Calculator</h1>
      <button onClick={() => fetchNumbers('primes')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchNumbers('fibo')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchNumbers('even')}>Fetch Even Numbers</button>
      <button onClick={() => fetchNumbers('rand')}>Fetch Random Numbers</button>
      
      <h2>Numbers:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <h2>Window Previous State:</h2>
      <ul>
        {windowPrevState.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <h2>Window Current State:</h2>
      <ul>
        {windowCurrState.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <h2>Average:</h2>
      <p>{average}</p>
    </div>
  );
};

export default AverageCalculator;

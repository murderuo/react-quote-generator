import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import ShowQuote from './components/Quote';

function App() {
  const initialValue = { quote: '', author: '', id: '' };
  const [quote, setQuote] = useState(initialValue);
  const getQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    setQuote({
      quote: response.data.content,
      author: response.data.author,
      id: response.data._id,
    });
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div>
      <ShowQuote quote={quote} getQuote={getQuote}/>
    </div>
  );
}

export default App;

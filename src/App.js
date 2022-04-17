import React from 'react';
import QuoteCard from './QuoteSimpsons';
import './App.css';
import axios from 'axios';

function App() {
  const [randomSimpsonsQuote, setRandomSimpsonsQuote] = React.useState(ramdonQuote);

  function ramdonQuote() {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => setRandomSimpsonsQuote(data[0]));
  }

  console.log(randomSimpsonsQuote)

  return (
    <div className="App">
        <button onClick={ramdonQuote}> Show ramdon Quote </button>
      <QuoteCard {...randomSimpsonsQuote} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Headline from './components/Headline';

function App() {
  const [greeting, setGreeting] = useState('Hello Function Component!');
  const handleChange = event => setGreeting(event.target.value);

  return (
    <div className="App">
      <Headline headline={greeting} onChangeHeadline={handleChange} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Headline from './components/Headline';
import Input from './components/Input';

function App() {
  const [greeting, setGreeting] = useState('Hello Function Component!');
  const handleChange = event => setGreeting(event.target.value);

  return (
    <div className="App">
      <Headline headline={greeting} />
      <Input value={greeting} onChangeInput={handleChange}>
        Set Greeting:{' '}
      </Input>
    </div>
  );
}

export default App;

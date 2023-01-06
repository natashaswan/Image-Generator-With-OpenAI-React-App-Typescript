import React from 'react';

import Input from './components/Input';
import Header from './components/Header';
import Image from './components/Image';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header> Type in the box below to generate an image of that!</Header>
      <Input/>
      <Image />
    </div>
  );
}

export default App;

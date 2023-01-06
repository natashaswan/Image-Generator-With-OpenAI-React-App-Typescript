import React, {useState} from 'react';

import Input from './components/Input';
import Header from './components/Header';
import Image from './components/Image';

import './App.css';

function App() {
  const [imageURL, setImageURL] = useState<string | undefined >(undefined);

  return (
    <div className="App">
      <Header>Type in the box below to generate an image of that!</Header>
      <Input setImageURL={setImageURL}/>
      <Image url={imageURL}/>
    </div>
  );
}

export default App;

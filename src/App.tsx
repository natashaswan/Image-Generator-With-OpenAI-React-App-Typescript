import React, {useState} from 'react';

import Input from './components/Input';
import Header from './components/Header';
import Image from './components/Image';

import './App.css';

function App() {
  const [imageURL, setImageURL] = useState<string | undefined >(undefined);

  return (
    <div className="App">
      <Header>
        <div className='header'>
          <div>YouArtist</div>
        </div>
      </Header>
      <Image url={imageURL}/>
      <Input setImageURL={setImageURL}/>
    </div>
  );
}

export default App;

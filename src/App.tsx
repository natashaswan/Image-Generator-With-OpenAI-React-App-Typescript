import React, {useState} from 'react';

import Input from './components/Input';
import Header from './components/Header';
import Image from './components/Image';

import './App.css';

function App() {
  const [imageURL, setImageURL] = useState<string | undefined >(undefined);
  const [fetching, setFetching] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState(false)

  return (
    <div className="App">
      <Header>
        <div className='header'>
          <div>YouArtist</div>
        </div>
      </Header>
      <Image url={imageURL} fetching={fetching} error={error}/>
      <Input setImageURL={setImageURL} setFetching={setFetching} setError={setError}/>
    </div>
  );
}


export default App;

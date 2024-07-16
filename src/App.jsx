import React from 'react';
import './App.css';
import Button from './Button';
import useRandomDog from './useRandomDog';

function App() {
  const { pupImage, breed, fetchRandomDog } = useRandomDog();

  return (
    <>
      <h1>Random Puppers</h1>
      <div className="card">
        <Button label="Click me" onPress={fetchRandomDog} />
      </div>
      {pupImage && (
        <div className="card">
          <img src={pupImage} alt="Random Pup" style={{ width: '300px', height: '300px' }} />
          <p className="card">
            I am a {breed} pupper!
          </p>
        </div>
      )}
    </>
  );
}

export default App;
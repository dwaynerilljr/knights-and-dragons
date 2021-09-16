import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [characters, setCharacter] = useState(props.characters)

  const renderCharacters = characters.map(character => {
    return <>
      <div>Name: {character.name}</div>
      <div>Attack: {character.attack}</div>
      <div>Defense: {character.defense}</div>
      <img src={character.avatar} alt="" />
    </>
  })

  return (
    <div className="App">
      {renderCharacters}
    </div>
  );
}

export default App;

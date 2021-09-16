import { useState } from 'react';
import './App.css';

function App(props) {
  const [characters, setCharacter] = useState(props.characters)

  return (
    <div className="grid justify-center h-screen items-center">
      <header className="text-center text-5xl font-uncial">Select your Fighter</header>
      <div className="grid grid-cols-2 gap-4 font-cardo text-xl">
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <div className="flex flex-col text-center border-2 border-blue-400 p-2">
                <img alt="" />
                <h2>{character.name}</h2>
                <p>Attack: <span className="text-blue-600">{character.attack}</span></p>
                <p>Defence: {character.defense}</p>
                <p>HP: {character.hp}</p>
                <button className="bg-green-600 hover:bg-green-800 p-2 font-uncial text-white">Select {character.name}</button>
              </div>
            </div>
        )})}
      </div>
    </div>
  );
}

export default App;

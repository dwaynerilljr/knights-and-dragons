import { useState } from 'react';
import './App.css';

function App(props) {
  const [characters, setCharacter] = useState(props.characters)

  return (
    <div className="grid justify-center h-screen items-center" id="base">
      <header className="text-center text-white text-5xl font-uncial">Select your Character</header>
      <svg className="animate-bounce w-12 h-12"></svg>
      <div className="grid grid-cols-3 gap-4 font-cardo text-xl">
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <div className="flex flex-col text-center bg-white border-2 border-blue-400 p-2">
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

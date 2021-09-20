import { useState } from 'react';
import './App.css';
import {characters} from './characters'
import CharacterSelect from './CharacterSelect';
import TitleScreen from './TitleScreen';

function App() {
  const [select, setSelect] = useState(false)
  const [title, setTitle] = useState(true)

  const renderSelect = () => {
    setSelect(!select);
    setTitle(!title);
  }

  return (
    <div className="grid content-center justify-items h-screen items-center" id="base">
      {title ? (<TitleScreen renderSelect={renderSelect} />) : (null)}
      {select ? (<CharacterSelect characters={characters} />) : (null)}
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import BattleGround from './BattleGround';
import {characters} from './characters'
import CharacterSelect from './CharacterSelect';
import TitleScreen from './TitleScreen';

function App() {
  const [select, setSelect] = useState(false);
  const [title, setTitle] = useState(true);
  const [battle, setBattle] = useState(false);


  const renderSelect = () => {
    setSelect(!select);
    setTitle(!title);
  }

  const returnToTitle = () => {
    setTitle(!title)
    setSelect(!select)
  }

  const battleSelect = () => {
    setBattle(!battle)
    setTitle(title)
    setSelect(!select)
  }

  const returnToSelect = () => {
    setSelect(!select)
    setBattle(!battle)
  }

  return (
    <div className="grid content-center justify-items-center h-screen items-center" id="base">
      {title ? (<TitleScreen renderSelect={renderSelect} />) : (null)}
      {select ? (<CharacterSelect battleSelect={battleSelect} characters={characters} returnToTitle={returnToTitle} />) : (null)}
      {battle ? (<BattleGround characters={characters} returnToSelect={returnToSelect} />) : (null)}
    </div>
  );
}

export default App;

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
  const [mainChar, setMainChar] = useState({})

    const handleSubmit = (e) => {
        alert(JSON.stringify(mainChar));
        e.preventDefault();
        setBattle(!battle)
        setTitle(title)
        setSelect(!select)
    }

    const handleChange = e => {
        switch (e.target.value) {
            case '0':
                setMainChar(characters[0]);
                break;
            case '1':
                setMainChar(characters[1]);
                break;
            case '2':
                setMainChar(characters[2]);
                break;
            case '3':
                setMainChar(characters[3]);
                break;
            case '4':
                setMainChar(characters[4]);
                break;
            case '5':
                setMainChar(characters[5]);
                break;
            default:
                alert('please try again!');
        }
    }


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
      {select ? 
        (<CharacterSelect 
          mainChar={mainChar}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          battleSelect={battleSelect} 
          characters={characters}  
          returnToTitle={returnToTitle} />) : (null)}
      {battle ? (<BattleGround characters={characters} mainChar={mainChar} returnToSelect={returnToSelect} />) : (null)}
    </div>
  );
}

export default App;

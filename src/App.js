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
  const [renderMain, setRenderMain] = useState(false);
  const [mainChar, setMainChar] = useState({});
  const [oppChar, setOppChar] = useState({});
  const [characterIndex, setCharacterIndex] = useState(0);
  const [renderOpp, setRenderOpp] = useState(false);

    const opponentCharacter = characters[characterIndex]

    const randomOpponent = () => {
        setCharacterIndex(Math.floor(Math.random() * 6));
        setRenderOpp(!renderOpp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBattle(!battle)
        setTitle(title)
        setSelect(!select)
    }

    const setOpponent = (e) => {
      setRenderOpp(true)
      switch (e.target.value) {
        case '0':
            setOppChar(characters[0]);
            break;
        case '1':
            setOppChar(characters[1]);
            break;
        case '2':
            setOppChar(characters[2]);
            break;
        case '3':
            setOppChar(characters[3]);
            break;
        case '4':
            setOppChar(characters[4]);
            break;
        case '5':
            setOppChar(characters[5]);
            break;
        default:
            alert('please try again!');
    }
    }

    const setUser = e => {
        setRenderMain(true);
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

  // const battleSelect = () => {
  //   setBattle(!battle)
  //   setTitle(title)
  //   setSelect(!select)
  // }

  const returnToSelect = () => {
    setSelect(!select);
    setBattle(!battle);
    setRenderOpp(false);
    setRenderMain(false);
  }

  return (
    <div className="grid content-center justify-items-center h-screen items-center" id="base">
      {title ? (<TitleScreen renderSelect={renderSelect} />) : (null)}
      {select ? 
        (<CharacterSelect 
          renderMain={renderMain}
          mainChar={mainChar}
          setUser={setUser}
          renderOpp={renderOpp}
          handleSubmit={handleSubmit}
          oppChar={oppChar}
          setOpponent={setOpponent} 
          characters={characters}
          randomOpponent={randomOpponent}
          opponentCharacter={opponentCharacter}  
          returnToTitle={returnToTitle} />) : (null)}
      {battle ? 
        <BattleGround
          mainChar={mainChar}
          oppChar={oppChar}
          returnToSelect={returnToSelect}
        /> : null}
    </div>
  );
}

export default App;

import './App.css';
import {characters} from './characters'
import CharacterSelect from './CharacterSelect';

function App() {

  return (
    <div className="grid content-center justify-center h-screen items-center" id="base">
      <CharacterSelect characters={characters} />
    </div>
  );
}

export default App;

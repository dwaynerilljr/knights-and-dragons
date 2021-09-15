import { characters } from './characters';
import './App.css';

function App() {
  return (
    <div className="App">
      {characters[0].name}
    </div>
  );
}

export default App;

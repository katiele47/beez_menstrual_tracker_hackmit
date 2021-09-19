
import './App.css';
import Main from './Main'
import {PhaseContextProvider} from './context/PhaseContext'

function App() {
  return (
    <div className="App">
      <PhaseContextProvider>
         <Main />
      </PhaseContextProvider>
    
    </div>
  );
}

export default App;

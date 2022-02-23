import './App.css';
import Contact from './Components/Contact';
import { Reducerhook } from './Hooks/Reducerhook';
import UseStateHook from './Hooks/UseHooks';

function App() {
  return (
    <div className="App">
      <UseStateHook/><Contact/><Reducerhook/>
    </div>
  );
}

export default App;

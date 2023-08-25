import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggle = () => {
    setDarkMode(Dark => !Dark);
  };

  return (
    <div className={`container ${darkMode ? 'white' : 'black'}`}>
      <button onClick={toggle} className="theme-button">
        Switch Theme
      </button>
      <p>
        Click the button to switch the background theme.
      </p>
      
    </div>
    
  );
}

export default App;


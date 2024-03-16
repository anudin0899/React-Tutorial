import React from 'react';
import './app.css';
import Routing from './Routes/Routes';
import { ThemeProvider } from './Context/ThemeContext/ThemeContext';

const App = () => {

  return (
    <ThemeProvider>
      <div>
        <Routing />
      </div>
    </ThemeProvider>
  );
}

export default App;

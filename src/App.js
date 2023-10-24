import React, { createContext, useState } from 'react';
import colorPalette from './theme/palette.js';
import Navbar from './view/header/navbar.js';


// Create a context
const paletteContext = createContext("");

const App = () => {
  const [appPalette, setAppPalette] = useState(colorPalette.dark);
 console.log(appPalette)
  return (
    <paletteContext.Provider value={{ appPalette, setAppPalette }}>
      {
        <>
        <Navbar></Navbar>
        </>
      }
    </paletteContext.Provider>
  );
};

export { paletteContext }; // Export the context as a named export
export default App; // Export the App component as the default export

import React ,{useContext} from 'react' ;
import {paletteContext} from '../../App.js'; // Import the context


function Navbar() {
    

    const { appPalette } = useContext(paletteContext); // Use appPalette, not palette
  
    return (
        <div className=''>

        </div>
    );
  }
  
  export default Navbar;
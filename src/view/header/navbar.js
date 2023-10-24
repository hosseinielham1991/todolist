import React ,{useContext} from 'react' ;
import {paletteContext} from '../../App.js'; // Import the context
import { Layout } from 'antd';

function Navbar() {
    
    const { Header } = Layout;

    const { appPalette } = useContext(paletteContext); // Use appPalette, not palette
  
    return (
        <Header style={{backgroundColor:appPalette.bg.main}} >
        
        </Header>
    );
  }
  
  export default Navbar;
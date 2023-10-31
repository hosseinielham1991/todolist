import React ,{useContext} from 'react' ;
import {paletteContext} from '../../App.js'; // Import the context
import { Layout ,Typography } from 'antd';
import { dataContext } from '../../manager/todo.js';
import {  SettingOutlined } from '@ant-design/icons';
import Popovermenu from '../../component/popovermenu/popovermenu.js';
 import styles from './navbar.module.css';
function Navbar() {

  const { appPalette } = useContext(paletteContext); // Use appPalette, not palette
  const { data,setData } = useContext(dataContext); // Use appPalette, not palette
  const handleDataChange =(event)=>{
    const value = event.target.value
    data.name = value === ""? "My Friend!":value;

    setData ({...data})

  };
  const { Text } = Typography;


  const popoverContentName = (
    <div className="flex-container">
      <label htmlFor="inputField">Your Name</label>
      <input onChange={handleDataChange} value={(data.name==="My Friend!"?"":data.name)} type="text" id="inputField" />
    </div>
  ),
  popoverBtntName =(<>  
  <SettingOutlined style={{color:appPalette.font.main}}/>
  <Text style={{color:appPalette.font.main}}>{data.name}</Text></>);

  const popoverContentColor = (
    <div className="flex-container d-flex flex-row align-items-center">
      <label htmlFor="inputField">Your Name</label>
      <input onChange={handleDataChange} value={(data.name==="My Friend!"?"":data.name)} type="text" id="inputField" />
    </div>
  ),

  popoverBtntColor =(<><div style={{backgroundColor:appPalette.bg.main}} className={styles.btnSelectedColor + ' ms-3 rounded '}></div></>);



    return (
        <Layout className='container-lg'  style={{backgroundColor:appPalette.bg.main,color:appPalette.font.main}} >
          <div className='row'>
            <div className='col-6'>
              <Popovermenu btn={popoverBtntName} content={popoverContentName}></Popovermenu>
            </div>
            <div className='col-6 d-flex flex-row-reverse align-items-center'>
              <Popovermenu btn={popoverBtntColor} className={'d-flex flex-row-reverse align-items-center h-100'} content={popoverContentColor}></Popovermenu>
            </div>
          </div>
          
          
        </Layout>
    );
  }
  
  export default Navbar;
import React ,{useContext, useState} from 'react' ;
import {appContext} from '../../App.js'; // Import the context
import { Layout ,Typography ,Button  } from 'antd';
import {  SettingOutlined ,CheckCircleOutlined } from '@ant-design/icons';
import Popovermenu from '../../component/popovermenu/popovermenu.js';
import styles from './navbar.module.css';
import colorPalette from '../theme/palette.js';

function Navbar() {

  const { appPalette,setAppPalette,  appData, appSetData } = useContext(appContext); 
  const [ inputName, setInputName ] = useState((appData.name==="My Friend!"?"":appData.name)); 


  const handleDataChange =(e)=>{
    setInputName(e.target.value);
  };
  const onSaveName = (closePopover)=>{
    closePopover();
    appData.name = inputName === ""? "My Friend!":inputName;
    appSetData ({...appData})

  };

  const { Text } = Typography;


  const popoverContentName = (closePopover)=>{
    return <div >
      <div className="flex-container">
      <label htmlFor="inputField">Your Name</label>
      <input onChange={handleDataChange} value={inputName} type="text" id="inputField" />
      </div>
      <div  className={'d-flex flex-row-reverse align-items-center '}>
         <Button onClick={()=>{onSaveName(closePopover)}} type="primary" className='mt-2'>Save</Button>
      </div>
    </div> 
  },
  popoverBtntName =(<span className='cursor-pointer'>  
  <SettingOutlined style={{color:appPalette.font.main}}/>&nbsp;
  <Text style={{color:appPalette.font.main}}>{appData.name}</Text></span>);

 const changeTheme =(typeTheme)=>{
    setAppPalette(colorPalette[typeTheme]);
 }

  const popoverContentColor = ()=>{
    
     const palletteDiv =  Object.keys(colorPalette).map((themeName, index) => {
      return  <div onClick={()=>{changeTheme(colorPalette[themeName].name)}} className={styles.eachBtnColor+` col-sm-4 d-flex align-items-center justify-content-center`}  key={index} style={{ backgroundColor: colorPalette[themeName].bg.main }}>
         { colorPalette[themeName].name === appPalette.name ? <CheckCircleOutlined className={`selected-color-${colorPalette[themeName].name}`} style={{ color: 'white' }} />:<></>}
      </div>
  });

    return <div className={'d-flex '+styles.holderAllColor}>{palletteDiv}</div>
     
  },

  popoverBtntColor =(<><div style={{backgroundColor:appPalette.bg.main,border:'1px solid'+appPalette.font.main,boxShadow:' 0px 0px 1px 1px '+appPalette.font.main }} className={styles.btnSelectedColor + ' ms-3 rounded cursor-pointer'}></div></>);


    return (
        <Layout className='container-lg'  style={{backgroundColor:appPalette.bg.main,color:appPalette.font.main}} >
          <div className='row'>
            <div className='col-6'>
              <Popovermenu btn={ popoverBtntName} content={({ closePopover }) => ( popoverContentName(closePopover))}></Popovermenu>
            </div>
            <div className='col-6 d-flex flex-row-reverse align-items-center'>
              <Popovermenu btn={popoverBtntColor} className={'d-flex flex-row-reverse align-items-center h-100'} content={({ closePopover })=>(popoverContentColor(closePopover))}></Popovermenu>
            </div>
          </div>
          
          
        </Layout>
    );
  }
  
  export default Navbar;
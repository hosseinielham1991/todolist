import React, { createContext, useState,useEffect  } from 'react';
import colorPalette from './view/theme/palette.js';
import './view/theme/variable.css';
import './view/theme/styles.css';
import Navbar from './view/header/navbar.js';
import Container from './view/main/container.js';
import { Layout,ConfigProvider} from 'antd';
import {hexToRgba} from './utils.js'

// Create a context
const appContext = createContext("");


const App = () => {
  
  const [appData, setAppData] = useState(JSON.parse(localStorage.getItem("todolistData") || '{"name":"My Friend!","tasks":[],"theme":"purple"}'));
  const [appPalette, setAppPalette] = useState(colorPalette[appData.theme]);
  
  useEffect(() => {
    document.body.style.backgroundColor = appPalette.bg.primary;
  }, [appPalette]);

  useEffect(({name =appData.name , theme = appData.theme ,newtask  }={}) => {
    
    localStorage.setItem('todolistData', JSON.stringify(appData));
    
  }, [appData]);

  const { Header,Content } = Layout;

  const updateMainState = function({name =appData.name , theme = appData.theme ,newtask , action}={}){
    appData.name = name;
    appData.theme  = theme;

    if(newtask !== undefined){
      appData.tasks.push(newtask)
    }

    if(action !== undefined){

    // eslint-disable-next-line default-case
    switch (action.type){
      case 'delete':{
        appData.tasks = appData.tasks.filter(function (item) {
          return item.id !== action.id;
        });
        break;
      }
      case 'change':{
        appData.tasks = appData.tasks.filter(function (item) {
          if( item.id === action.id){
            item.status += action.value;
            
          }

           return item;
        });
        break;
      }

      case 'done':{
        appData.tasks = appData.tasks.filter(function (item) {
          if( item.id === action.id){
            item.status = 3;
            
          }

           return item;
        });
        break;
      }
    }

    }
     
    setAppData({...appData})
   
  }

  const getMainstate = function(){
   return appData ;   
  }

  return (
    <appContext.Provider value={{ appPalette, setAppPalette ,updateMainState,getMainstate}}>
      {
      <ConfigProvider
          theme={{
            
            token: {    
              colorBgBase: appPalette.bg.main,     
              colorTextBase: appPalette.font.main,
              colorPrimary: appPalette.bg.btn, 
              colorBorder:appPalette.border.primary,
            },
            components: {
              Layout: {
                bodyBg: appPalette.bg.primary
              },
              Input: {
                boxShadow: '0 0 0 2px red',
              },
              Button:{
             
               colorText :appPalette.font.main, 
               colorBgContainer: appPalette.bg.btn,

              }
            }    
          }}
        >
        
        <Layout className="">
          <Header style={{backgroundColor:appPalette.bg.main}} >
                <Navbar></Navbar>
          </Header>
          <Content style={{}}>
            <Container >
             </Container>
          </Content>
        </Layout>
      
          
        </ConfigProvider>
      }
    </appContext.Provider>
  );
};

export { appContext }; // Export the context as a named export
export default App; // Export the App component as the default export

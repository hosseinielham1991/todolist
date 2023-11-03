import React, { createContext, useState,useEffect  } from 'react';
import colorPalette from './view/theme/palette.js';
import './view/theme/variable.css';
import './view/theme/styles.css';
import Navbar from './view/header/navbar.js';
import Container from './view/main/container.js';
import { Layout,ConfigProvider} from 'antd';


// Create a context
const appContext = createContext("");


const App = () => {
  const [appData, appSetData] = useState(JSON.parse(localStorage.getItem("todolistData") || '{"name":"My Friend!","tasks":[],"theme":"green"}'));
  const [appPalette, setAppPalette] = useState(colorPalette[appData.theme]);
  

  useEffect((params) => {
    //({"name":"hi my friend!","tasks":[]});
    
    localStorage.setItem('todolistData', JSON.stringify(appData));

    //setData( {"name":'dfsfsdfsdfsdfsd',"tasks":[]})

  }, [appData]);

  const { Header,Content } = Layout;

  return (
    <appContext.Provider value={{ appPalette, setAppPalette ,appData, appSetData}}>
      {
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: appPalette.bg.main,      
              colorBgBase: appPalette.bg.main,     
              colorTextBase: appPalette.font.main, 
              cardBorderColor: 'red'     
            },
            components: {
              Layout: {
                bodyBg: appPalette.bg.primary
              },
              Card:{
                cardBorderColor: 'red'     
              },
              Popover:{
                bodyBg: 'red'
              }
            },
            cardBorderColor: 'red'     
          }}
        >
        
        <Layout className="">
          <Header style={{backgroundColor:appPalette.bg.main}} >
                <Navbar></Navbar>
          </Header>
          <Content style={{}}>
            <Container > </Container>
          </Content>
        </Layout>
      
          
        </ConfigProvider>
      }
    </appContext.Provider>
  );
};

export { appContext }; // Export the context as a named export
export default App; // Export the App component as the default export

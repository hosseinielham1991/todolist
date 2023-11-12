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
  const [appData, setAppData] = useState(JSON.parse(localStorage.getItem("todolistData") || '{"name":"My Friend!","tasks":{"todo":[],"progress":[],"done":[]},"theme":"green"}'));
  const [appPalette, setAppPalette] = useState(colorPalette[appData.theme]);
  
  useEffect(() => {
    document.body.style.backgroundColor = appPalette.bg.primary;
  }, [appPalette]);

  useEffect((params) => {
    localStorage.setItem('todolistData', JSON.stringify(appData));
  }, [appData]);

  const { Header,Content } = Layout;

  return (
    <appContext.Provider value={{ appPalette, setAppPalette ,appData, setAppData}}>
      {
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: appPalette.bg.main,      
              colorBgBase: appPalette.bg.main,     
              colorTextBase: appPalette.font.main, 
            },
            components: {
              Layout: {
                bodyBg: appPalette.bg.primary
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

import React, { createContext, useState  } from 'react';
import colorPalette from './view/theme/palette.js';
import './view/theme/variable.css';
import './view/theme/styles.css';
import Navbar from './view/header/navbar.js';
import Container from './view/main/container.js';
import { Layout,ConfigProvider} from 'antd';

import { Todo} from './manager/todo.js';

// Create a context
const paletteContext = createContext("");

const App = () => {
  const [appPalette, setAppPalette] = useState(colorPalette.dark);


  const { Header,Content } = Layout;

  return (
    <paletteContext.Provider value={{ appPalette, setAppPalette }}>
      {
      <ConfigProvider
          theme={{
            components: {
              Layout: {
                bodyBg: "transparent"
              }
            }
          }}
        >
          <Todo body={
          <Layout className="">
            <Header style={{backgroundColor:appPalette.bg.main}} >
                  <Navbar></Navbar>
            </Header>
            <Content style={{}}>
              <Container > </Container>
            </Content>
          </Layout>
        } />
          
        </ConfigProvider>
      }
    </paletteContext.Provider>
  );
};

export { paletteContext }; // Export the context as a named export
export default App; // Export the App component as the default export

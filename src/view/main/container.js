import React ,{useContext} from 'react' ;
import {appContext} from '../../App.js'; // Import the context
import { Layout ,Card} from 'antd';
function Container() {
    

    const { appPalette } = useContext(appContext); // Use appPalette, not palette
  
    const titleContent = (
        <div>
          <h3>This is a custom title with HTML content</h3>
          <p>You can put any HTML elements here.</p>
        </div>
    );
    
    return (
        <Layout style={{backgroundColor:appPalette.bg.primary, color:appPalette.font.primary}} className={'p-4 container-lg '}>
            <Card title={titleContent} bordered={false} style={{ width: '100%' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Layout>
    );
  }
  
  export default Container;
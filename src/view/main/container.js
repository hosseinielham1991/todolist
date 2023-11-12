import React ,{useContext} from 'react' ;
import {appContext} from '../../App.js'; // Import the context
import { Layout ,Card} from 'antd';
import Levelcard from '../main/levelcard.js'
import { ClockCircleOutlined,LoadingOutlined,CheckCircleOutlined,AudioOutlined  } from '@ant-design/icons';
function Container() {
    
    const {appPalette,  appData, setAppData } = useContext(appContext); 
   
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1677ff',
          }}
        />
      );
    const titleContent = (
        <div>
          <h3>This is a custom title with HTML content</h3>
          <p>You can put any HTML elements here.</p>
        </div>
    );
    const icons = {todo:<ClockCircleOutlined  ></ClockCircleOutlined>,
    progress:<LoadingOutlined  ></LoadingOutlined>,
    done:<CheckCircleOutlined  ></CheckCircleOutlined>}
    const levelcards = Object.entries(appData.tasks).map(([key, value]) => {
        return <div key={key} className="col">
            <Levelcard icon={icons[key]} background={appPalette.bg[key]} title={key} value={value} ></Levelcard>
            </div>
      });

    return (
        <Layout style={{backgroundColor:appPalette.bg.primary, color:appPalette.font.primary}} className={'p-4 container-lg '}>
            <Card title={titleContent} bordered={false} style={{ width: '100%' }}>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-3">
                    {levelcards}
                </div>
            </Card>
        </Layout>
    );
  }
  
  export default Container;
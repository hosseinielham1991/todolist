import React ,{useContext,useState} from 'react' ;
import {paletteContext} from '../../App.js'; // Import the context
import { Layout ,Popover,Space ,Typography } from 'antd';
import { dataContext } from '../../manager/todo.js';
import {  SettingOutlined } from '@ant-design/icons';

function Navbar() {
   
    const { appPalette } = useContext(paletteContext); // Use appPalette, not palette
    const { data,setData } = useContext(dataContext); // Use appPalette, not palette

    
    const handleDataChange =(event)=>{
      const value = event.target.value
      data.name = value === ""? "My Friend!":value;

      setData ({...data})

  }
  const { Text } = Typography;
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(true);
  };

  
  const popoverContent = (
    <div className="flex-container">
      <label htmlFor="inputField">Your Name</label>
      <input onChange={handleDataChange} value={(data.name==="My Friend!"?"":data.name)} type="text" id="inputField" />
    </div>
  );
   

    return (
        <Layout className='container-lg'  style={{backgroundColor:appPalette.bg.main,color:appPalette.font.main}} >
           <Space onClick={handleMenuClick}>
            <SettingOutlined style={{color:appPalette.font.main}}/>
            <Text style={{color:appPalette.font.main}}>{data.name}</Text>
            <Popover
                  title="Hi!"
                  content={popoverContent}
                  open={visible}
                  onOpenChange={setVisible}
                >
              
             </Popover>
          </Space>
          

            
        </Layout>
    );
  }
  
  export default Navbar;
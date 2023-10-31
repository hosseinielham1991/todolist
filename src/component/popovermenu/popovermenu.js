import React ,{useState}from 'react';
import { Popover  } from 'antd';
const Popovermenu = (props) => {
    const [visible, setVisible] = useState(false);
    
    
    const handleMenuClick = () => {
        setVisible(true);
    };

    return (
  
    <div className={props.className} onClick={handleMenuClick}>
        {props.btn}
        <Popover
            arrowPointAtCenter
            placement="center"
            content={props.content}
            open={visible}
            onOpenChange={setVisible}
            >
        
        </Popover>
    </div>
   
  );
};

export default Popovermenu;

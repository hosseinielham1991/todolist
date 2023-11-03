import React ,{useState,useContext}from 'react';
import { Popover  } from 'antd';
import {appContext} from '../../App.js'; // Import the context

const Popovermenu = (props) => {

    const [open, setOpen] = useState(false);
    const { appPalette } = useContext(appContext); 
  
    const handleOpenChange = (newOpen) => {
      setOpen(newOpen);
    };

    return (
        <Popover
        content={<div style={{ color: appPalette.font.primary }}>{props.content({ closePopover: () => setOpen(false) })}</div>}
        trigger="click"
        open={open}
        color={appPalette.bg.primary}
        onOpenChange={handleOpenChange}
      >
       {props.btn} {/* Pass closePopover callback */}
      </Popover>

  );
};

export default Popovermenu;

import React, { useState } from 'react';
import { ConfigProvider, Input, Button, Select } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import colorPalette from './theme/pallete.js'; // Import the color palette

function App() {
  
  const [customInputColor, setCustomInputColor] = useState(colorPalette.primary);
  const [customButtonColor, setCustomButtonColor] = useState(colorPalette.primary);

  const changeColors = (newColor) => {
    
    setCustomInputColor(colorPalette[newColor]);
    setCustomButtonColor(colorPalette[newColor]);
  };

  return (
    <ConfigProvider locale={enUS}>
      <div>
        <Input
          style={{ backgroundColor: customInputColor }}
          placeholder="Custom Input Color"
        />
        <Button
          style={{ backgroundColor: customButtonColor }}
          type="primary"
        >
          Custom Button
        </Button>
        <Select defaultValue="primary" onChange={changeColors}>
          {Object.keys(colorPalette).map((color) => (
            <Select.Option key={color} value={color}>
              {color}
            </Select.Option>
          ))}
        </Select>
      </div>
    </ConfigProvider>
  );
}

export default App;

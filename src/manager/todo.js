import React, { useState, useEffect ,createContext} from 'react';

const dataContext = createContext();

const Todo = ({body}) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("todolistData") || '{"name":"My Friend!","tasks":[]}'));




  useEffect((params) => {
    //({"name":"hi my friend!","tasks":[]});
    
    localStorage.setItem('todolistData', JSON.stringify(data));

    //setData( {"name":'dfsfsdfsdfsdfsd',"tasks":[]})

  }, [data]);



  return (
    <dataContext.Provider value={{ data, setData }}>
      <>  
      { body }
      </>
     </dataContext.Provider>
  );
};


export { dataContext ,Todo}; // Export the context as a named export



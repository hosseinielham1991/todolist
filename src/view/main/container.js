import React ,{useContext,useState} from 'react' ;
import {appContext} from '../../App.js'; // Import the context
import { Layout ,Card, Space,Button,Input} from 'antd';
import Levelcard from '../main/levelcard.js'
import { ClockCircleOutlined,LoadingOutlined,CheckCircleOutlined  } from '@ant-design/icons';
function Container() {
    
    const {appPalette,getMainstate ,  updateMainState} = useContext(appContext); 
    const [inputnewtask,setInputnewtask] = useState()

    const copy_task = getMainstate();

    const  addTask = ()=>{

      updateMainState({newtask:{title:inputnewtask,status:1,id:Date.now().toString()}})
     
      setInputnewtask('');

    }

    const titleContent = (
        <div className='col-lg-4'>
          <Space.Compact style={{ width: '100%' }}>
            <Input onChange ={(event)=>{ setInputnewtask((event.target.value)); }} value={inputnewtask} placeholder="Enter your task here" />
            <Button onClick={addTask}>Add</Button>
          </Space.Compact>
        </div>
    );

    

    const seperate_task = {
      todo:{list:[],icon:<ClockCircleOutlined  ></ClockCircleOutlined>},
      progress:{list:[],icon:<LoadingOutlined  ></LoadingOutlined>},
      done:{list:[],icon:<CheckCircleOutlined  ></CheckCircleOutlined>}
    },
    enum_type = {1:'todo',2:'progress',3:'done'}

    for (const element of  copy_task.tasks) {
  
      seperate_task[enum_type[element.status]].list.push(element)
      
    }


    const levelcards = Object.entries(seperate_task).map(([key, value]) => {
        return <div key={key} className="col">
            <Levelcard list={value.list} icon={value.icon} background={'bg-'+key} title={key}></Levelcard>
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
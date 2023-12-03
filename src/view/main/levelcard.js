import React ,{useContext,useState} from 'react' ;
import styles from './levelcard.module.css';
import {appContext} from '../../App.js'; // Import the context
import { RightSquareOutlined  , CheckCircleOutlined , DeleteOutlined,LeftSquareOutlined ,FormOutlined  } from '@ant-design/icons';
import { Space,Button,Input} from 'antd';

function Levelcard(props) {
const { appPalette, updateMainState} = useContext(appContext); 
const [flagRender, setFlagRender] = useState(1);
const [isModeEdit, setIsModeEdit] = useState(0);
const [inputedittask,setInputedittask] = useState();

const btns = ({id,title})=>{
    return <>
   <DeleteOutlined   onClick={()=>{ clickOnICon({type:'delete',id:id})}} className='p-1 font-delete cursor-pointer'></DeleteOutlined>
    { [props.title === 'todo' && <RightSquareOutlined key={'status_one_'+id} onClick={()=>{ clickOnICon({type:'change',id:id,value:1})}}  className='p-1 font-progress cursor-pointer'></RightSquareOutlined>]  }
    { [props.title === 'progress' && <LeftSquareOutlined  key={'status_two_'+id} onClick={()=>{ clickOnICon({type:'change',id:id,value:-1})}}  className='p-1 font-todo cursor-pointer'></LeftSquareOutlined>]  }
    { [props.title !== 'done' && <CheckCircleOutlined  key={'status_compelete'+id} className='p-1 font-done cursor-pointer'  onClick={()=>{ clickOnICon({type:'done',id:id})}}></CheckCircleOutlined>]}
    <FormOutlined className='' onClick={()=>{showInputForEdit({id:id,title:title})}}></FormOutlined>
</>
}

const showInputForEdit =({id,title})=>{
    setInputedittask(title);
    setIsModeEdit(id);

}

const saveInputEdit =({id})=>{
    clickOnICon({type:"title",id:id,value:inputedittask});
}

const inputEdit =({id,value})=>{ 
    return <Space.Compact style={{ width: '100%' }}>
        <Input className={styles.input} onChange ={(event)=>{ setInputedittask(event.target.value); }} value={inputedittask} placeholder="Can not be empty." />
        <Button className={styles.btnSave+' d-flex justify-content-center  align-items-center'}  onClick={()=>{saveInputEdit({id:id})}}>Save</Button>
        </Space.Compact>
}

const  clickOnICon = ({type,id,value})=>{

    updateMainState({action:{type:type,id:id,value:value}})
    setIsModeEdit(0);
    setFlagRender(!flagRender)

}



const html_list = props.list.map((item,index)=>{
    
    const html =( <div  key={index+'dffffd'} style={{'borderColor':appPalette.border.primary}}  className={styles.eachItem + ' w-100 p-2'}>
    {isModeEdit !== item.id && <><div className={styles.holdertitle+' d-flex justify-content-center  align-items-center' }>
     <label title={item.title} className={styles.title}>{item.title}</label></div> 
    <div className={styles.holderBtns +' d-flex justify-content-center  align-items-center'}>
     {btns({id:item.id,title:item.title})}
    </div></>}
    {isModeEdit === item.id && inputEdit({id:item.id,value:item.title})}
 </div>);

 return html;
    
})


return <div className={styles.holderMain + ' d-flex flex-column  rounded'} style={{ borderColor:appPalette.border.primary,boxShadow:'0 1px 3px '+appPalette.border.primary }}>
            <div className={styles.holderHeader + ' d-flex flex-row  p-2 '}  style={{borderColor:appPalette.border.primary}}>
                <div  className={styles.holderType +' me-2 rounded  d-flex justify-content-center '+ props.background}  >{props.icon}</div>
                {props.title}
            </div>
            <div className={styles.holderBody}>{html_list}</div>
       </div>

} 
export default Levelcard;
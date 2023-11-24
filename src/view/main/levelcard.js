import React ,{useContext,useState} from 'react' ;
import styles from './levelcard.module.css';
import {appContext} from '../../App.js'; // Import the context
import { RightSquareOutlined  , CheckCircleOutlined , DeleteOutlined,LeftSquareOutlined   } from '@ant-design/icons';

function Levelcard(props) {
const { appPalette, updateMainState} = useContext(appContext); 
const [flagRender, setFlagRender] = useState(1);
const btns = ({id})=>{
    return <>
   
    <DeleteOutlined onClick={()=>{ clickOnICon({type:'delete',id:id})}} className='p-1 font-delete cursor-pointer'></DeleteOutlined>
    { [props.title === 'todo' && <RightSquareOutlined onClick={()=>{ clickOnICon({type:'change',id:id,value:1})}}  className='p-1 font-progress cursor-pointer'></RightSquareOutlined>]  }
    { [props.title === 'progress' && <LeftSquareOutlined  onClick={()=>{ clickOnICon({type:'change',id:id,value:-1})}}  className='p-1 font-todo cursor-pointer'></LeftSquareOutlined>]  }
    { [props.title !== 'done' && <CheckCircleOutlined className='p-1 font-done cursor-pointer'  onClick={()=>{ clickOnICon({type:'done',id:id})}}></CheckCircleOutlined>]}
   
</>
}

const  clickOnICon = ({type,id,value})=>{

    updateMainState({action:{type:type,id:id,value:value}})
    setFlagRender(!flagRender)

}

const html_list = props.list.map((item)=>{
    
    const html = <div style={{'border-color':appPalette.border.primary}}  className={styles.eachItem + ' w-100 p-2'}>
       <div className={styles.holdertitle}><label>{item.title}</label></div> 
       <div className={styles.holderBtns}>
        {btns({id:item.id})}
       </div>
    </div>

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
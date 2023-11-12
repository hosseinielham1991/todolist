import React ,{useContext} from 'react' ;
import styles from './levelcard.module.css';
import {appContext} from '../../App.js'; // Import the context

function Levelcard(props) {
 const { appPalette,setAppPalette,  appData, setAppData } = useContext(appContext); 
return <div className={styles.holderMain + ' d-flex flex-column  rounded'} style={{ borderColor:appPalette.border.primary,boxShadow:'0 1px 3px '+appPalette.border.primary }}>
            <div className={styles.holderHeader + ' d-flex flex-row  p-2 '}  style={{borderColor:appPalette.border.primary}}>
                <div  className={styles.holderType +' me-2 rounded  d-flex justify-content-center'}  style={{backgroundColor:props.background}}>{props.icon}</div>
                {props.title}
            </div>
            <div className={styles.holderBody}>{props.value}</div>
       </div>

} 
export default Levelcard;
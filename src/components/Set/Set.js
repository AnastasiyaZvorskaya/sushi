import React from 'react';
import s from './Set.module.css';
import set from '../Img/Сеты.png'



const Set = () => {
    return (<div className={s.sets}>
   <div ><img className={s.set_img} src={set}/><span className={s.content}>Сеты</span></div>
    </div>);
}


export default Set;
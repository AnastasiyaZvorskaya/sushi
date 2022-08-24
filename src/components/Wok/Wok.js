import React from 'react';
import s from './Wok.module.css';
import wok from '../Img/2.png';
import wok_page from '../Img/WOK.png';


const Wok = () => {
    return (<div className={s.wok}>
   <div ><img className={s.wok_img} src={wok}/><span className={s.content}>WOK</span></div>
   <img src={wok_page} alt="wok"/>
    </div>);
}


export default Wok;
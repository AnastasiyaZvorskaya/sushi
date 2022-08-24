import React from 'react';
import s from './SideBar.module.css';


const SideBar = () => {
    return (<div className={s.sideBar}>
            <div className={s.shoppingCart}>
                <h2>Ваша корзина пуста.</h2>
                <div id={s.shoppingCart}>Добавьте же скорее что-нибудь!</div>
                <div className={s.free}>Бесплатная доставка от 800 СОМ</div>
            </div>
    </div>);
}


export default SideBar;
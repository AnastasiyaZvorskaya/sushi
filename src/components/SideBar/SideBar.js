import React from 'react';
import s from './SideBar.module.css';


const SideBar = () => {
    return (<div className={s.sideBar}>
        <div className={s.shoppingCart}>
            <h2>Ваша корзина пуста.</h2>
            <div id={s.shoppingCart}>Добавьте же скорее что-нибудь!</div>
            <div className={s.free}>Бесплатная доставка от 800 СОМ</div>
        </div>
        <iframe className={s.maps} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.9614373961995!2d74.57540621537501!3d42.841710179157545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9c3ec40ddbd%3A0xa6334662129c49cd!2zMTI2INGD0LsuINCQLiDQkdCw0LrQsNC10LLQsCwg0JHQuNGI0LrQtdC6LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!5e1!3m2!1sru!2snl!4v1662215184747!5m2!1sru!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </div>);
}


export default SideBar;
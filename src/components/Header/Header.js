import React from 'react';
import s from './Header.module.css';
import time from '../Img/часы.png'
import search from '../Img/search.png'

const Header = () => {
  return <header className={s.header}>
    <div className={s.phone}>
      <div className={s.ourPhone}>Наш телефон</div>
      <div className={s.number}>+996 705 188 955</div>
      <div className={s.number}>+996 705 188 955</div>
   <div className={s.work}>
        <img className={s.time} src={time} alt='o`clock' />
        <div className={s.timeWork} >Работаем с 10:00 до 00:00</div>
      </div> 
    </div>
    <div className={s.contact}>
      <div className={s.delivery}>
        <div className={s.place}>
          <p className={s.city}>Город</p><p className={s.cityName}>Бишкек</p>
        </div>
        <div id={s.reviews}>отзывы</div>
      </div>
      <div className={s.deliveryPay}><p>доставка и оплата</p>
        <img className={s.search} src={search} alt="search" />
      </div>
    </div>
  </header>;
}


export default Header;
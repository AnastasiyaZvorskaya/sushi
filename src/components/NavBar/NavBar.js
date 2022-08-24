import React from 'react';
import s from './NavBar.module.css';
import logo from '../Img/logo.png';
import pizza from '../Img/1.png';
import sets from '../Img/Сеты.png';
import wok from '../Img/2.png';
import rolls from '../Img/Group.png';
import sushi from '../Img/суши.png';
import salads from '../Img/салаты.png';
import soups from '../Img/супы.png';
import cornDogs from '../Img/корн.png';
import beverages from '../Img/напитки.png';
import sale from '../Img/sale.png';


const NavBar = () => {
    return (<>
        <div className={s.sideBar}>
            <div className={s.menu}>
                <img className={s.logo} src={logo} alt="" />
                <h2>ROMSEM</h2>
                <div className={s.line}></div>
            </div>
            <ul>
                <div class={s.menuBar}>
                      <li className={s.str}>
                            <img className={s.pizza} src={pizza} alt="pizza" />
                            <a className={s.text} href="/">Пицца</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={sets} alt="set" />
                            <a className={s.text} href="set">Сеты</a>

                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={wok} alt="set" />
                            <a className={s.text} href="/wok">WOK</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={rolls} alt="set" />
                            <a className={s.text} href="/rolls">Роллы</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={sushi} alt="set" />
                            <a className={s.text} href="/sushi">Суши</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={salads} alt="set" />
                            <a className={s.text} href="/salads">Салаты</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={soups} alt="set" />
                            <a className={s.text} href="/salads">Супы</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={cornDogs} alt="set" />
                            <a className={s.text} href="/salads">Корн доги</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={beverages} alt="set" />
                            <a className={s.text} href="/salads">Напитки</a>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={sale} alt="set" />
                            <a className={s.text} href="/sale">Акции</a>
                        </li>
                    </div> 
            </ul >
        </div >


    </>
    );
}


export default NavBar;


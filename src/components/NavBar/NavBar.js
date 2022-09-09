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
import { NavLink } from 'react-router-dom';


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
                            <NavLink className={s.text} to="/">Пицца</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={sets} alt="set" />
                            <NavLink className={s.text} to="set">Сеты</NavLink>

                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={wok} alt="set" />
                            <NavLink className={s.text} to="/wok">WOK</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={rolls} alt="set" />
                            <NavLink className={s.text} to="/rolls">Роллы</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={sushi} alt="set" />
                            <NavLink className={s.text} to="/sushi">Суши</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={salads} alt="set" />
                            <NavLink className={s.text} to="/salads">Салаты</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={soups} alt="set" />
                            <NavLink className={s.text} to="/salads">Супы</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={cornDogs} alt="set" />
                            <NavLink className={s.text} to="/salads">Корн доги</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={beverages} alt="set" />
                            <NavLink className={s.text} to="/salads">Напитки</NavLink>
                        </li>
                        <li className={s.str}>
                            <img className={s.pizza} src={sale} alt="set" />
                            <NavLink className={s.text} to="/sale">Акции</NavLink>
                        </li>
                    </div> 
            </ul >
        </div >


    </>
    );
}


export default NavBar;


import React from 'react';
import s from './Home.module.css';
import fish from '../Img/111.png';
import acne from '../Img/222.png';
import noMeat from '../Img/333.png';
import pizza from '../Img/444.png';
import stock from '../Img/555.png';



function HomePage() {
    return (
        <>
             <div className={s.picEat}>
                <div className={s.eatMenu}>
                    <div className={s.eat}>
                        <img className={s.fish} src={fish} alt="" />
                        <p className={s.text}>Чикен</p>
                    </div>
                    <div className={s.eat}>
                        <img className={s.acne} src={acne} alt="" />
                        <p className={s.textAcne}>С угрем</p>
                    </div>
                    <div className={s.eat}>
                        <img className={s.noMeat} src={noMeat} alt="" />
                        <p className={s.textNoMeat}>Корн дог</p>
                    </div>
                </div>
                <div className={s.eatCard}>
                    <div className={s.eat}>
                        <img className={s.pizza} src={pizza} alt="" />
                        <p className={s.textPizza}>Пицца</p>
                    </div>
                    <div className={s.eat}>
                        <img className={s.stock} src={stock} alt="" />
                        <p className={s.textStock}>Акции</p>
                    </div>
                </div>
            </div>
            <div className={s.new_popular}>
                <div className={s.new}>Новинки</div>
                <div className={s.popular}>Популярное</div>
            </div>
        </>
    );
}

export default HomePage;
import React from 'react';
import sale from '../Img/Rectangle.png';
import saleNew from '../Img/555.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel'
import fish from '../Img/111.png';
import acne from '../Img/222.png';
import noMeat from '../Img/333.png';
import pizza from '../Img/444.png';
import stock from '../Img/555.png';
import left from '../Img/left.png';
import sushiNew from '../Img/sushi_new.png'
import right from '../Img/right.png';
import sushiNew2 from '../Img/sushi_new2.png';
import sushiNew3 from '../Img/sushi_new3.png';


function Home() {
    return (
        <>
            <Carousel variant="dark" className={s.slide}>
                <Carousel.Item interval={1000}>
                    <img className={s.img}
                        src={sale}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className={s.img}
                        src={saleNew}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className={s.img}
                        src={sale}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

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
            <div className={s.news_product}>
                <img className={s.left} src={left} alt="left" />
                <div className={s.new_card}>
                    <img className={s.sushi_new} src={sushiNew} alt="sushi" />
                    <div className={s.new_card_text}>
                        <p className={s.new_text}>Соломон сет</p>
                    </div>
                    <div className={s.new_card_weight}>
                        <p className={s.new_text_weight}>1050 грамм, 30 кусочков</p>
                    </div>
                    <div className={s.price}>
                        <div className={s.price_text}>1500 COM</div>
                        <button className={s.price_btn}>ХОЧУ</button>
                    </div>
                </div>
                <div className={s.new_card}>
                    <img className={s.sushi_new} src={sushiNew2} alt="sushi" />
                    <div className={s.new_card_text2}>
                        <div className={s.new_text2}>Филадельфия и лосось сет</div>
                    </div>
                    <div className={s.new_card_weight}>
                        <p className={s.new_text_weight}>1260 грамм, 36 кусочков</p>
                    </div>
                    <div className={s.price}>
                        <div className={s.price_text}>1150 COM</div>
                        <button className={s.price_btn}>ХОЧУ</button>
                    </div>
                </div>
                <div className={s.new_card}>
                    <img className={s.sushi_new} src={sushiNew3} alt="sushi" />
                    <div className={s.new_card_text2}>
                        <div className={s.new_text2}>Самая большая Филадельфия</div>
                    </div>
                    <div className={s.new_card_weight}>
                        <p className={s.new_text_weight}>2050 грамм, 45 кусочков</p>
                    </div>
                    <div className={s.price}>
                        <div className={s.price_text}>2100 COM</div>
                        <button className={s.price_btn}>ХОЧУ</button>
                    </div>
                </div>
                <img className={s.left} src={right} alt="right" />
            </div>
        </>
    );
}

export default Home;
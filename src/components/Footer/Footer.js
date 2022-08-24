import React from 'react';
import s from './Footer.module.css';
import instagram from '../Img/instagram.png';
import whatsapp from '../Img/whatsapp.png';
import telegram from '../Img/telegram.png';
import vector from '../Img/Vector.png';


const Footer = () => {
    return (<div>
        <div className={s.footer_text}>
            <h2 className={s.name}>Заказать суши в Бишкеке</h2>
            <p className={s.footer_order}> Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
                приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
                собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
                заказать суши в Харькове с доставкой на дом или в офис.</p>
            <ul className={s.footer_order}>
                В нашем меню более 20 видов суши:
                <li >Классические с сырым лососем, тунцом, окунем.</li>
                <li>Экзотические с тигровой креветкой, морским гребешком.</li>
                <li>Пикантные с копченым лососем, угрем.</li>
            </ul>
            <p className={s.footer_order_text}>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где
                японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши
                с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось
                и окунь.</p>
        </div>
        <div className={s.details}>
            <h2 className={s.details_text}>Подробнее</h2>
            <img className={s.vector} src={vector} alt="vector"/>
        </div>
        <div className={s.footer}>
            <div className={s.leftFooter}>
                <p className={s.textLeft}>О Компании</p>
                <p className={s.textLeft}> Доставка и оплата</p>
                <p className={s.textLeft}> Лента материалов</p>
                <p className={s.textLeft}> Политика возврата</p>
            </div>
            <div className={s.centerFooter}>
                <p className={s.centerText}>Введите номер</p>
                <p className={s.numberText}>+996(__)__ __ __</p>
                <p className={s.appText}>Выберите удобный<br /> мессенджер для общения</p>
                <div className={s.applications}>
                    <a href="https://www.whatsapp.com/"><img className={s.networks} src={whatsapp} alt="telegram" /></a>
                    <a href="https://web.telegram.org/"><img className={s.networks} src={telegram} alt="telegram" /></a>
                    <div id={s.networksInsta}><a href="https://www.instagram.com/"><img className={s.networksInsta} src={instagram} alt="instagram" /></a></div>
                </div>
            </div>
            <div className={s.rightFooter}>
                <p className={s.textRight}>Тел.:+996 705 188 955</p>
                <p className={s.textRight}>Тел.:+996 705 188 955</p>
                <p className={s.textRight}>Адрес:Бакаева 126</p>
            </div> </div>

    </div>);
}


export default Footer;
import React from 'react';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';


let leftFooter = [
    { info: 'О Компании', to: '#' },
    { info: 'Доставка и оплата', to: '#' },
    { info: 'Лента материалов', to: '#' },
    { info: 'Политика возврата', to: '#' },
]


function InfoFooter() {
    return (<div className={s.leftFooter}>
        {leftFooter.map((information) => (
            <NavLink key={information.info} to={information.to} className={s.textLeft}>{information.info}</NavLink>
        )
        )}

    </div>)
}





export default InfoFooter;
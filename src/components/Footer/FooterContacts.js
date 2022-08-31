import React from 'react';
import s from './Footer.module.css';


let footerRight = [
    { contact: 'Тел.:+996 705 188 955' },
    { contact: 'Тел.:+996 705 188 955' },
    { contact: 'Адрес: ул.Бакаева 126' },
]

function FooterContacts() {
    return (<div className={s.rightFooter}>
        {footerRight.map(
            (contacts) => (
                <p className={s.textRight} key={contacts.contact}>
                    {contacts.contact}
                </p>
            )
        )

        }</div>)
}



export default FooterContacts;
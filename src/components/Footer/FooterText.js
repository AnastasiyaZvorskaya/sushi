import React from 'react';
import s from './Footer.module.css';


let footerOrder = [
    { variety: 'Классические с сырым лососем, тунцом, окунем.' },
    { variety: 'Экзотические с тигровой креветкой, морским гребешком.' },
    { variety: 'Пикантные с копченым лососем, угрем.' },
]



function FooterText() {
    return (<div>
        <ul className={s.footer_order}> В нашем меню более 20 видов суши:
            {footerOrder.map(
                (information) => (
                    <li key={information.variety}>
                        {information.variety}
                    </li>
                )
            )
            }
        </ul>
    </div>)


}



export default FooterText;

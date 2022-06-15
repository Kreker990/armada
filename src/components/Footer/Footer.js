import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer_div'>
        <ul className='footer_div_ul'>
            <li className='footer_div_ul_li'>
                <h5>О компании</h5>
                <p>Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit ut aliquam, <br/>
                purus sit amet luctus venenatis, lectus <br/>
                magna fringilla urna, porttitor rhoncus <br/>
                dolor purus non enim</p>
            </li>
            <li className='footer_div_ul_li'>
                <h5>Информация </h5>
                <p>Услуги </p>
                <p>О нас </p>
                <p>Контакты</p>
                <p>Портфолио </p>
                <p>Производство </p>
            </li>
            <li className='footer_div_ul_li'>
                <h5>Контактная информация</h5>
                <p>Бишкек, ул. Калык Акиева 66, <br/>
                ТЦ Весна, 3 этаж, офис №37</p>
                <p>+996 (0553) 577-575</p>
                <p>Email@gmail.com</p>
            </li>
            <li className='footer_div_ul_li'>
                <h5>Мы в социальных сетях </h5>
                <p>Instagram </p>
                <p>Facebook</p>
            </li>
        </ul>
    </div>
  )
}

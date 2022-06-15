import React from 'react'
import './Sectioncontacts.css'
import geo from '../../assets/images/geo.png'
import clock from '../../assets/images/clock.png'
import phone from '../../assets/images/phone.png'
import geo_min from '../../assets/images/geo_min.png'

export default function Sectioncontacts() {
  return (
    <div className='sectioncontacts'>
    <div className='sectioncontacts_conteiner'>
        <div className='sectioncontacts_conteiner_data'>
            <h2>Контакты</h2>
            <div className='sectioncontacts_conteiner_data_div'>
                <img alt='Clock' src={clock}/>
                <div>
                <p className='sectioncontacts_conteiner_data_div_glav'>Режим работы</p>
                <p>c 10:00 до 20:00</p>
                <p>Сб, Вс - выходной.</p></div>
            </div>
            <div className='sectioncontacts_conteiner_data_div'>
                <img alt='Phone' src={phone}/>
                <div>
                <p className='sectioncontacts_conteiner_data_div_glav'>Телефон</p>
                <p >+996 (0553) 577-575, +996 (0773) 577-575</p></div>
            </div>
            <div className='sectioncontacts_conteiner_data_div'>
                <img alt='Geo_min' src={geo_min}/>
                <div>
                <p className='sectioncontacts_conteiner_data_div_glav'>Адрес</p>
                <p>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit ut aliquam</p></div>
            </div>
        </div>
        <img alt='Contacts_geo' src={geo}/>
    </div>
    </div>
  )
}

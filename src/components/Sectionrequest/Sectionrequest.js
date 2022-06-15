import React from 'react'
import './Sectionrequest.css'

export default function Sectionrequest() {
  return (
    <div className='sectionrequest'>
        <h4>Оставьте бесплатную заявку</h4>
        <p>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
        <div className='sectionrequest_submit'>
            <input placeholder='Ваше Имя'/>
            <input placeholder='Ваш телефон '/>
            <button>Отправить</button>
        </div>
    </div>
  )
}

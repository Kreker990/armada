import React from 'react'
import './Sectiondoing.css'
import card5 from '../../assets/images/card5.png'
import card6 from '../../assets/images/card6.png'
import card7 from '../../assets/images/card7.png'
import card8 from '../../assets/images/card8.png'
import linedoing from '../../assets/images/line.png'

export default function Sectiondoing() {
  return (
    <div>
        <div className='sectiondoing_had'>
            <img alt='doingLine' src={linedoing}/>
            <p>Чем мы занимаемся ?</p>
            <img alt='doingLine' src={linedoing}/>
        </div>
        <div className='sectiondoing_blog'>
            <div>
                <img alt='Card5' src={card5}/>
                <p>Конструкция <br/>
                под ключ</p>
            </div>
            <div>
                <img alt='Card6' src={card6}/>
                <p>Вывески, <br/>
                объемные буквы</p>
            </div>
            <div>
                <img alt='Card7' src={card7}/>
                <p>Визитки, буклеты,<br/>
                полиграфия</p>
            </div>
            <div>
                <img alt='Card8' src={card8}/>
                <p>Банеры, самоклейка,<br/>
                монтажная установка</p>
            </div>
        </div>
    </div>
  )
}

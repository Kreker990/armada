import React from 'react'
import './Sectionservice.css'
import line from '../../assets/images/line.png'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import card4 from '../../assets/images/card4.png'

export default function Sectionservice() {
  return (
    <div>
        <div className='section_had'>
            <img alt='Line' src={line}/>
            <p>Наши услуги</p>
            <img alt='Line' src={line}/>
        </div>
        <div className='section_body'>
            <div className='body_conteiner'>
                <div className='body_conteiner_card'>
                    <div>
                        <img alt='Card1' src={card1}/>
                        <h5>Конструкция <br/>
                        под ключ</h5>
                        <p>Хотите узнать подробность,<br/>
                        телефон для связи:</p>
                    </div>
                    <p>+996 (0553) 577-575</p>
                </div>
                <div className='body_conteiner_card'>
                    <div>
                        <img alt='Card2' src={card2}/>
                        <h5>Вывески,<br/> 
                        объемные буквы</h5>
                        <p>Хотите узнать подробность,<br/>
                        телефон для связи:</p>
                    </div>
                    <p>+996 (0553) 577-575</p>
                </div>
                <div className='body_conteiner_card'>
                    <div>
                        <img alt='Card3' src={card3}/>
                        <h5>Визитки, буклеты,<br/>
                        полиграфия</h5>
                        <p>Хотите узнать подробность,<br/>
                        телефон для связи:</p>
                    </div>
                    <p>+996 (0553) 577-575</p>
                </div>
                <div className='body_conteiner_card'>
                    <div>
                        <img alt='Card4' src={card4}/>
                        <h5>Банеры, самоклейка,<br/>
                        монтажная установка </h5>
                        <p>Хотите узнать подробность,<br/>
                        телефон для связи:</p>
                    </div>
                    <p>+996 (0553) 577-575</p>
                </div>
            </div>
        </div>
    </div>
  )
}

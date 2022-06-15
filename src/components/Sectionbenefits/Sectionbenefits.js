import React from 'react'
import './Sectionbenefits.css'
import line from '../../assets/images/line.png'
import benefits1 from '../../assets/images/benefits1.png'
import benefits2 from '../../assets/images/benefits2.png'
import benefits3 from '../../assets/images/benefits3.png'
import benefits4 from '../../assets/images/benefits4.png'

export default function Sectionbenefits() {
  return (
      <>
      <div className='sectionbenefits_had'>
            <img alt='benefitsLine' src={line}/>
            <p>Наши преимущества</p>
            <img alt='benefitsLine' src={line}/>
        </div>
    <div className='sectionbenefits'>
        <div className='sectionbenefits_conteiner'>
            <div>
                <img alt='Benefits' src={benefits1}/>
                <p>Оперативность</p>
            </div>
            <div>
                <img alt='Benefits' src={benefits2}/>
                <p>Высококвалифицированные<br/> специалисты</p>
            </div>
            <div>
                <img alt='Benefits' src={benefits3}/>
                <p>Современное оборудование</p>
            </div>
            <div>
                <img alt='Benefits' src={benefits4}/>
                <p>Широкий спектр услуг</p>
            </div>
        </div>
    </div></>
  )
}

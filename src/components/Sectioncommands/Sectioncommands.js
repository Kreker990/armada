import React from 'react'
import './Sectioncommands.css'
import line from '../../assets/images/line.png'
import comm1 from '../../assets/images/comm1.png'
import comm2 from '../../assets/images/comm2.png'
import comm3 from '../../assets/images/comm3.png'

export default function Sectioncommands() {
  return (
      <>
      <div className='sectioncommands_had'>
            <img alt='commandsLine' src={line}/>
            <p>Наша команда</p>
            <img alt='commandsLine' src={line}/>
        </div>
    <div className='sectioncommands'>
        <div className='sectioncommands_conteiner'>
            <div>
                <img alt='Comm1' src={comm1}/>
                <h4>Юля</h4>
                <p>Соучредитель</p>
            </div>
            <div>
                <img alt='Comm2' src={comm2}/>
                <h4>Анна</h4>
                <p>Дизайнер</p>
            </div>
            <div>
                <img alt='Comm3' src={comm3}/>
                <h4>Андрей </h4>
                <p>Соучредитель</p>
            </div>
        </div>
    </div></>
  )
}

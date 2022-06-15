import React from 'react'
import './Sectionclients.css'
import line from '../../assets/images/line.png'
import Nike from '../Nike/Nike'

export default function Sectionclients() {
  return (
    <div>
        <div className='sectionclients_had'>
            <img alt='clientsLine' src={line}/>
            <p>Наши Клиенты</p>
            <img alt='clientsLine' src={line}/>
        </div>
        <Nike/>
    </div>
  )
}

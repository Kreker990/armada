import React from 'react'
import './Nike.css'
import nike from '../../assets/images/nike.png'

export default function Nike() {
  return (
    <div className='nike'>
        <div className='nike_body'>
            <img alt='Nike' src={nike}></img>
            <img alt='Nike' src={nike}></img>
            <img alt='Nike' src={nike}></img>
            <img alt='Nike' src={nike}></img>
            <img alt='Nike' src={nike}></img>
            <img alt='Nike' src={nike}></img>
        </div>
    </div>
  )
}

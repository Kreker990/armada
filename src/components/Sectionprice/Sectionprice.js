import React from 'react'
import './Sectionprice.css'
import line from "../../assets/images/line.png";
import Price from '../Price/Price';

export default function Sectionprice() {
  return (
    <div>
        <div className='sectionprice_had'>
            <img alt='price_Line' src={line}/>
            <p>Наш прайс</p>
            <img alt='price_Line' src={line}/>
        </div>
        <div className='sectionprice_body'>
            <Price/>
            <Price/>
            <button className='price_button'>Скачать прайс</button>
        </div>
    </div>
  )
}

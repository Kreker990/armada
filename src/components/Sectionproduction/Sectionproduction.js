import React from 'react'
import './Sectionproduction.css'
import productionline from '../../assets/images/line.png'
import secproduction1 from '../../assets/images/secproduction1.png'
import secproduction2 from '../../assets/images/secproduction2.png'
import secproduction3 from '../../assets/images/secproduction3.png'

export default function Sectionproduction() {
  return (
    <div>
        <div className='sectionproduction_had'>
            <img alt='productionLine' src={productionline}/>
            <p>Производство</p>
            <img alt='productionLine' src={productionline}/>
        </div>
        <div className='sectionproduction_body'>
            <img alt='Secproduction1' src={secproduction1}/>
            <img alt='Secproduction2' src={secproduction2}/>
            <img alt='Secproduction3' src={secproduction3}/>
        </div>
    </div>
  )
}

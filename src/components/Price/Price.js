import React from 'react'
import './Price.css'
import price1 from '../../assets/images/price1.png'
import price2 from '../../assets/images/price2.png'
import price3 from '../../assets/images/price3.png'
import price4 from '../../assets/images/price4.png'

export default function Price() {
  return (
    <div className='price_conteiner'>
    <div className='price_conteiner1'>
        <div className='price_conteiner_card'>
            <img alt='price1' src={price1}/>
            <p>Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
            <p className='price_sum'>1990 сом</p>
        </div>
        <div>
            <img alt='price2' src={price2}/>
            <p>Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
            <p className='price_sum'>1990 сом</p>
        </div>
        <div>
            <img alt='price3' src={price3}/>
            <p>Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
            <p className='price_sum'>1990 сом</p>
        </div>
        <div>
            <img alt='price4' src={price4}/>
            <p>Фасадная вывеска (подсветка <br/>внутреняя, железный короб, флекс)</p>
            <p className='price_sum'>1990 сом</p>
        </div>
    </div>
    </div>
  )
}

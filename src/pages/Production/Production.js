import React from 'react'
import './Production.css'
import left from '../../assets/images/storislast.png'
import right from '../../assets/images/storisnext.png'
import productionline from '../../assets/images/line.png'
import production1 from '../../assets/images/production1.png'
import production2 from '../../assets/images/production2.png'
import production3 from '../../assets/images/production3.png'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function Production() {
  return (
    <div>
      
      <div className='production_had'>
        <img alt='productionLine' src={productionline} />
        <p>Производство</p>
        <img alt='productionLine' src={productionline} />
      </div>
      <div className='production_body'>
        <img alt='Production1' src={production1}></img>
        <img alt='Production2' src={production2}></img>
        <img alt='Production3' src={production3}></img>
      </div>
      <div className='production_had'>
        <img alt='productionLine' src={productionline} />
        <p>Оборудование</p>
        <img alt='productionLine' src={productionline} />
      </div>
      <p className='production_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</p>
      <div className='production_foot'>
        <img alt='left' src={left} />
        <p>Печатает около 100 страниц в минуту</p>
        <img alt='right' src={right} />
      </div>
      
    </div>
  )
}

import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import line from '../../assets/images/line.png'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div>
      
      <div className='rotfolio_had'>
        <img alt='Line' src={line} />
        <p>Портфолио</p>
        <img alt='Line' src={line} />
      </div>
      <div className='portfolio'>
        <div className='portfolio_top'>
          <div className='portfolio_top_left portfolio_job'><p>Работа на Манаса</p></div>
          <div className='portfolio_top_right'>
            <div className='portfolio_top_right_top'>
              <div className='portfolio_top_right_top_left portfolio_job'><p>Работа на Манаса</p></div>
              <div className='portfolio_top_right_top_right portfolio_job'><p>Работа на Манаса</p></div>
            </div>
            <div className='portfolio_top_right_buttom portfolio_job'><p>Работа на Манаса</p></div>
          </div>
        </div>
        <div className='portfolio_buttom'>
          <div className='portfolio_buttom_left'>
            <div className='portfolio_buttom_left_top portfolio_job'><p>Работа на Манаса</p></div>
            <div className='portfolio_buttom_left_buttom'>
              <div className='portfolio_buttom_left_buttom_left portfolio_job'><p>Работа на Манаса</p></div>
              <div className='portfolio_buttom_left_buttom_right portfolio_job'><p>Работа на Манаса</p></div>
            </div>
          </div>
          <div className='portfolio_buttom_right portfolio_job'><p>Работа на Манаса</p></div>
        </div>
      </div>
      
    </div>
  )
}

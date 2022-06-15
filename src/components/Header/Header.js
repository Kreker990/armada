import React from 'react'
import './Header.css'
import armada_logo from '../../assets/images/armada_logo.png'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

export default function Header(props) {
  return (
    <div>
      <div className='header_div1'>
        <div className='header_conteiner'>
          <p>Наша сила в вашем успехе !</p>
          <div>
            <p className='header_conteiner_div_p'>Нужна помощь? Свяжитесь с нашим экспретом</p>
            <p className='header_conteiner_div_number'>+996 (553) 993 342</p>
          </div>
        </div>
      </div>
      <div className='header_div2'>
        <div className='header_panel'>
          <Link to='/home'> <img alt='Armada_logo' src={armada_logo} /></Link>
          <nav className='header_nav'>
            <ul className='header_panel_ul'>
              <li>
                <Link to='/service'>Услуги</Link>
              </li>
              <li>
                <Link to='/about'>О нас</Link>
              </li>
              <li>
                <Link to='/contacts'>Контакты</Link>
              </li>
              <li>
                <Link to='/portfolio'>Портфолио</Link>
              </li>
              <li>
                <Link to='/production'>Прои зводство</Link>
              </li>
              <Button text='Скачать прайс'/>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
    </div>
  )
}

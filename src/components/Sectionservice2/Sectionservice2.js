import React from 'react'
import './Sectionservice2.css'
import line from '../../assets/images/line.png'

export default function Sectionservice2() {
  return (
    <div>
        <div className='sectionservice2_had'>
            <img alt='sectionservice2_Line' src={line}/>
            <p>Наши услуги</p>
            <img alt='sectionservice2_Line' src={line}/>
        </div>
        <div className='secservice2'>
        <div className='secservice2_conteiner'>
            <div className='secservice2_conteiner_top'>
                <div className='secservice2_conteiner_top_left'>
                    <div className='secservice2_conteiner_top_left_top'><p>Монтажная<br/> установка</p></div>
                    <div className='secservice2_conteiner_top_left_buttom'><p>Буклеты</p></div>
                </div>
                <div className='secservice2_conteiner_top_middle'>
                    <div className='secservice2_conteiner_top_middle_top'><p>Самоклейка</p></div>
                    <div className='secservice2_conteiner_top_middle_buttom'><p>Визитки</p></div>
                </div>
                <div className='secservice2_conteiner_top_right'><p>Банеры</p></div>
            </div>
            <div className='secservice2_conteiner_buttom'>
                <div className='secservice2_conteiner_buttom_left'><p>Вывески</p></div>
                <div className='secservice2_conteiner_buttom_right'><p>Листовки </p></div>
            </div>
        </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Sectionjob.css'
import line from '../../assets/images/line.png'
import sectionjob_img from '../../assets/images/sectionjob_img.png'

export default function Sectionjob() {
  return (
    <div>
        <div className='sectionjob_had'>
            <img alt='jobLine' src={line}/>
            <p>Наши Работы</p>
            <img alt='jobLine' src={line}/>
        </div>
        <div className='jobsection_body'>
            <div className='jobbody_conteiner'>
                <img alt='sectionjob_img' src={sectionjob_img}/>
                <button>Все работы </button>
            </div>
        </div>
    </div>
  )
}

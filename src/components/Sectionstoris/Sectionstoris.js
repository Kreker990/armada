import React from 'react'
import './Sectionstoris.css'
import storislast from '../../assets/images/storislast.png'
import storisnext from '../../assets/images/storisnext.png'


export default function Sectionstoris() {
  return (
    <div className='sectionstoris'>
      <h2 className='sectionstoris_h2'>Наша история</h2>
      <div className='sectionstoris_conteiner'>
        <button><img alt='Last' src={storislast} /></button>
        <div className='sectionstoris_conteiner_card'>
          <div className='sectionstoris_conteiner_card_top'><p>2015</p></div>
          <p>Lorem ipsum dolor sit<br /> amet, consectetur<br /> adipiscing elit ut aliquam,<br /> purus sit</p>
        </div>
        <div className='sectionstoris_conteiner_card'>
          <div className='sectionstoris_conteiner_card_top'><p>2016</p></div>
          <p>Lorem ipsum dolor sit<br /> amet, consectetur<br /> adipiscing elit ut aliquam,<br /> purus sit</p>
        </div>
        <div className='sectionstoris_conteiner_card'>
          <div className='sectionstoris_conteiner_card_top'><p>2017</p></div>
          <p>Lorem ipsum dolor sit<br /> amet, consectetur<br /> adipiscing elit ut aliquam,<br /> purus sit</p>
        </div>
        <div className='sectionstoris_conteiner_card'>
          <div className='sectionstoris_conteiner_card_top'><p>2018</p></div>
          <p>Lorem ipsum dolor sit<br /> amet, consectetur<br /> adipiscing elit ut aliquam,<br /> purus sit</p>
        </div>
        <div className='sectionstoris_conteiner_card'>
          <div className='sectionstoris_conteiner_card_top'><p>2019</p></div>
          <p>Lorem ipsum dolor sit<br /> amet, consectetur<br /> adipiscing elit ut aliquam,<br /> purus sit</p>
        </div>
        <div className='sectionstoris_conteiner_card'>
          <div className='sectionstoris_conteiner_card_top'><p>2020</p></div>
          <p>Lorem ipsum dolor sit<br /> amet, consectetur<br /> adipiscing elit ut aliquam,<br /> purus sit</p>
        </div>
        <button><img alt='Next' src={storisnext} /></button>
      </div>
    </div>
  )
}

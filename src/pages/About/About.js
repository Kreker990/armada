import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Nike from '../../components/Nike/Nike'
import Sectionbenefits from '../../components/Sectionbenefits/Sectionbenefits'
import Sectionclients from '../../components/Sectionclients/Sectionclients'
import Sectiondoing from '../../components/Sectiondoing/Sectiondoing'
import Sectionrequest from '../../components/Sectionrequest/Sectionrequest'
import Sectionstoris from '../../components/Sectionstoris/Sectionstoris'
import aboutline from '../../assets/images/line.png'
import './About.css'

export default function About() {
  return (
    <div>
      
      <div className='about'></div>
      <div className='about_had'>
            <img alt='aboutLine' src={aboutline}/>
            <p>О компании</p>
            <img alt='aboutLine' src={aboutline}/>
        </div>
      <div className='about_company'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa</p>
      </div>
      <Sectiondoing/>
      <Sectionstoris/>
      <Sectionbenefits/>
      <Sectionclients/>
      <Nike/>
      <Sectionrequest/>
      
    </div>
  )
}
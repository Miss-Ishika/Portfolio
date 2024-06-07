import React, { useRef } from 'react'
import "./WorkExp.css"
import { Container } from 'postcss'
import { WORK_EXP } from '../../utils/data'
import ExpCart from './ExpCart/ExpCart'
import Slider from 'react-slick'

const WorkExp = () => {

  const slideRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoing: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  }

  const slideleft = () => {
    slideRef.current.slickPrev();
  }

  return (
    <section className='exp-container'>
      <h5>Work Experience</h5>

      <div className='right-arrow' onClick={slideRight}>
      <span class="material-symbols-outlined">
        chevron_right
      </span>
      </div>

      <div className='left-arrow' onClick={slideleft}>
      <span class="material-symbols-outlined">
        chevron_left
      </span>
      </div>

      <div className='exp-content'>
        <Slider ref={slideRef} {...settings}>
          {WORK_EXP.map((item) => (
            <ExpCart
            key={item.title} 
            details={item}
            // codeURL = {item.code}
            // visitURL = {item.visit}
            />
          ))}
        </Slider>

        
      </div>

      
    </section>
  )
}

export default WorkExp
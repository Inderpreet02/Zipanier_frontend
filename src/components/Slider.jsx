import React, { useState } from 'react'
import './Slider.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {sliderItems} from '../data.js'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
  return (
    <div className='slider__container'>
        <div className="slider__arrow left" onClick={() => handleClick("left")}>
            <ArrowBackIosIcon/>
        </div>
        
        <div className="nav__wrapper" style={{"transform": `translateX(${slideIndex * -100}vw)`}}>

            {
                sliderItems.map(item=>(

                    <div className="nav__slide" style={{"backgroundColor": `${item.bg}`}}>

                        <div className="nav__imgContainer">
                            <img className='nav__img' src={`${item.img}`} alt="" />
                        </div>

                        <div className="nav__infoContainer">
                            <div className="nav__title">
                                {item.title}
                            </div>
                            <div className="nav__desc">
                                {item.desc}
                            </div>
                            <button className="nav__btn">
                                Show me
                            </button>
                        </div>
                    </div>
                ))
            }

        </div>

        <div className="slider__arrow right" onClick={() => handleClick("right")} >
            <ArrowForwardIosIcon/>
        </div>
    </div>
  )
}

export default Slider
import React from 'react'
import { IoIosSend } from "react-icons/io";
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='news__container'>
        <div className="news__title">
            Newsletter
        </div>
        <div className="news__desc">
            Get regular updates for your favorite products.
        </div>
        <div className="news__inputContainer">
            <input type="text" className="news__input" placeholder='Your Email'/>
            <button className="news__btn">
                <IoIosSend/>
            </button>
        </div>

        
    </div>
  )
}

export default Newsletter
import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login__container'>
        <div className="login__wrapper">
            <div className="login__title">CREATE ACCOUNT</div>
            <form className="login__form">
                <input type="text" placeholder='name' className="login__input" />
                <input type="text" placeholder='password' className="login__input" />
                <div className="login__agreement">
                    By Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet. <b>PRIVACY POLICY</b>
                </div>
                <button className="login__btn">
                    Create
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
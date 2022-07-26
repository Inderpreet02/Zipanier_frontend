import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div className='register__container'>
        <div className="regsiter__wrapper">
            <div className="register__title">CREATE ACCOUNT</div>
            <form className="register__form">
                <input type="text" placeholder='name' className="register__input" />
                <input type="text" placeholder='last name' className="register__input" />
                <input type="text" placeholder='username' className="register__input" />
                <input type="text" placeholder='email' className="register__input" />
                <input type="text" placeholder='password' className="register__input" />
                <input type="text" placeholder='confirm password' className="register__input" />
                <div className="register__agreement">
                    By Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet. <b>PRIVACY POLICY</b>
                </div>
                <button className="register__btn">
                    Create
                </button>
            </form>
        </div>
    </div>
  )
}

export default Register
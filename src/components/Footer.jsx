import React from 'react'
import './Footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className="footer__left">
            <div className="footer__leftTitle">
                Zipanier.
            </div>
            <div className="footer__leftDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora error itaque quod qui voluptates, expedita repellat dignissimos fugiat quo. Commodi non animi placeat ut impedit, reprehenderit hic labore pariatur? Dicta!
            </div>

            <div className="footer__leftSocial">
                <div className="footer__icon co1">
                    <AiFillFacebook/>
                </div>
                <div className="footer__icon co2">
                    <AiFillInstagram/>
                </div>
                <div className="footer__icon co3">
                    <AiOutlineTwitter/>
                </div>
            </div>
        </div>        
        <div className="footer__center">
            <div className="footer__centerTitle">Useful Links</div>
            <ul className="footer__list">
                <li className="footer__listItem">Home</li>
                <li className="footer__listItem">Cart</li>
                <li className="footer__listItem">Fasion</li>
                <li className="footer__listItem">Electronics</li>
                <li className="footer__listItem">Accessories</li>
                <li className="footer__listItem">My Account</li>
                <li className="footer__listItem">Whishlist</li>
                <li className="footer__listItem">Terms</li>
                <li className="footer__listItem">Copyright</li>
            </ul>
        </div>
        <div className="footer__right">
            <div className="footer__rightTitle">Contact Info.</div>
            <div className="footer__contact">
               <BiMap/> #asd, asd, India. 147001
            </div>
            <div className="footer__contact">
                <AiFillPhone/>+1 234 56 78
            </div>
            <div className="footer__contact">
                <AiOutlineMessage/>contact@zipanier.dev
            </div>
        </div>
    </div>
  )
}

export default Footer
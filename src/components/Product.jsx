import React, { useEffect, useState } from 'react'
import './Product.css'
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';


const Product = ({item}) => {

    

    const [isShown, setIsShown] = useState(false);
  return (
    <div className="prod__container" >
        <div className="circle"></div>
        <img src={`${item.img}`} alt="" className="prod__img" />
        <div className={`prod__info ${isShown ? "opac1" : "opac0"}`}>
            <div className="prod__icon">
                <HiShoppingCart/>
            </div>
            <div className="prod__icon">
                <Link to={`/product/${item._id}`}>
                    <AiOutlineSearch/>
                </Link>
            </div>
            <div className="prod__icon">
                <AiOutlineHeart/>
            </div>
        </div>
    </div>
  )
}

export default Product
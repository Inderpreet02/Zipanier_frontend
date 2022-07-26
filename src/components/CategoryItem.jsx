import React from 'react'
import { Link } from 'react-router-dom'
import "./CategoryItem.css"

const CategoryItem = ({item}) => {
  return (
    <div className='item__container'>
      <Link to={`/products/${item.cat}`}>
        <img src={`${item.img}`} alt="" className="item__img" />
        <div className="item__info">
            <div className="item__title">
                {item.title}
            </div>

            <button className="item__btn">
                Shop Now
            </button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem
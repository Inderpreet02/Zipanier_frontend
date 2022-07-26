import React from 'react'
import "./Categories.css"

import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="cat__container">
        {
            categories.map(item => (
                <CategoryItem item={item}/>
            ))
        }
    </div>
  )
}

export default Categories
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Annoucements from '../components/Annoucements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar1'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import './ProductList.css'

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) =>{
        const value = e.target.value;

        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    console.log(filters);
  return (
    <div>
        <Navbar/>
        <Annoucements/>
        <div className="prodlist__title">
            {cat}
        </div>
        <div className="filter__container">
            <div className="filter__item">
                <div className="filter__text">
                    Filter Products:
                </div>
                <select className="filter__select" onChange={handleFilters} name="color">
                    <option className="filter__option" disabled>Color</option>
                    <option className="filter__option">white</option>
                    <option className="filter__option">red</option>
                    <option className="filter__option">blue</option>
                    <option className="filter__option">yellow</option>
                    <option className="filter__option">green</option>
                </select>
                <select className="filter__select" onChange={handleFilters} name="size">
                    <option className="filter__option" disabled >Size</option>
                    <option className="filter__option">XS</option>
                    <option className="filter__option">S</option>
                    <option className="filter__option">M</option>
                    <option className="filter__option">L</option>
                    <option className="filter__option">XL</option>
                </select>
            </div>
            <div className="filter__item">
                <div className="filter__text">
                    Sort Products:
                </div>
                <select className="filter__select" onChange={(e) => setSort(e.target.value)}>
                    <option className="filter__option" value="newest">Newest</option>
                    <option className="filter__option" value="asc">Price (asc)</option>
                    <option className="filter__option" value="desc">Price (desc)</option>
                </select>
            </div>
        </div>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList
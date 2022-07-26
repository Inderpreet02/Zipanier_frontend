import React from 'react'
import './Navbar.css'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)

  console.log(quantity);
  return (
    <div className='nav__container'>
      <div className="nav__wrapper">
        <div className="nav__left">
          <div className="nav__lang">EN</div>
          <div className="nav__searchContainer">
            <input type="text" className="nav__input" placeholder='Search'/>
            <AiOutlineSearch style={{color:"gray"}}/>
          </div>
        </div>
        <div className="nav__center">
          <h1 className="nav__logo">
            Zipanier.
          </h1>
        </div>
        <div className="nav__right">
          <div className="nav__menuItem">register</div>
          <div className="nav__menuItem">sign in</div>
          <Link to="/cart">
            <div className="nav__menuItem">
              <Badge badgeContent={quantity} color="primary">
                <HiShoppingCart size={25} color="action" />
              </Badge>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
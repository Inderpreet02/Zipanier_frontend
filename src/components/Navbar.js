import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Fashion from './Fashion';
import Electronics from './Electronics';
import Home from './Home';
import Misc from './Misc';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
      <nav className='navbar'>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <div className='nav-topic'>
              <i className="fa-solid nav-icons fa-tag"></i>
              <p>Top Offers</p>
              </div>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <div className='nav-topic'>
              <i className="fa-solid nav-icons fa-carrot"></i>
              <p>Grocery</p>
            </div>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <div className='nav-topic'>
              <i className="fa-solid nav-icons fa-mobile"></i>
              <p>Mobiles</p>
            </div>
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={
                ()=>{
                    if (window.innerWidth < 960) {
                        setDropdown1(false);
                      } else {
                        setDropdown1(true);
                      }
                }}
            onMouseLeave={()=>{
                setDropdown1(false);
            }}
          >
            <Link
              to='/fashion'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            <div className='nav-topic'>
              <i className="fa-solid nav-icons fa-shirt"></i>
              <p>Fashion <i className='fas fa-caret-down' /></p>
            </div>
            </Link>
            {dropdown1 && <Fashion />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={
                ()=>{
                    if (window.innerWidth < 960) {
                        setDropdown2(false);
                      } else {
                        setDropdown2(true);
                      }
                }}
            onMouseLeave={()=>{
                setDropdown2(false);
            }}
          >
            <Link
              to='/electronics'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             <div className='nav-topic'>
              <i className="fa-solid nav-icons fa-laptop"></i>
              <p>Electronics <i className='fas fa-caret-down' /></p>
            </div>
            </Link>
            {dropdown2 && <Electronics />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={
                ()=>{
                    if (window.innerWidth < 960) {
                        setDropdown3(false);
                      } else {
                        setDropdown3(true);
                      }
                }}
            onMouseLeave={()=>{
                setDropdown3(false);
            }}
          >
            <Link
              to='/home'
              className='nav-links'
              onClick={closeMobileMenu}
            >
               <div className='nav-topic'>
               <i className="fa-solid nav-icons fa-house-chimney-window"></i>
              <p>Home <i className='fas fa-caret-down' /></p>
            </div>
            </Link>
            {dropdown3 && <Home />}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <div className='nav-topic'>
              <i className="fa-solid nav-icons fa-plane-departure"></i>
              <p>Travel</p>
            </div>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <div className='nav-topic'>
              <i className="fa-solid nav-icons fa-tv"></i>
              <p>Appliances</p>
            </div>
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={
                ()=>{
                    if (window.innerWidth < 960) {
                        setDropdown4(false);
                      } else {
                        setDropdown4(true);
                      }
                }}
            onMouseLeave={()=>{
                setDropdown4(false);
            }}
          >
            <Link
              to='/fashion'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            <div className='nav-topic'>
            <i className="fa-solid nav-icons fa-spray-can"></i>
              <p>Beauty, Toys and More <i className='fas fa-caret-down' /></p>
            </div>
              
            </Link>
            {dropdown4 && <Misc />}
          </li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
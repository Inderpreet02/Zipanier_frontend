import React, { useState } from 'react';
import { FashionItems } from './FashionItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import FashionDrop from './Fashiondropdown';

function Fashion() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  var i = 0;
  function pass(i){
    console.log("index ", i);
    <FashionDrop ind = {i} />
  }
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {/* {dropdown1 ? <FashionDrop ind = {i} />: console.log(i)}; */}
        {/* {dropdown1 && <FashionDrop />}; */}
         
        {FashionItems.map((item, index) => {
          return (
            <li key={index} onMouseEnter={ ()=>{
              i = index;
              console.log(i);
              if (window.innerWidth < 960) {
                  setDropdown1(false);
                } else {
                  setDropdown1(true);
                  pass(i);
                }
          }}
      onMouseLeave={()=>{
          setDropdown1(false);
      }}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
              
            </li>
            
          );
        })}
        
      </ul>
    </>
  );
}

export default Fashion;
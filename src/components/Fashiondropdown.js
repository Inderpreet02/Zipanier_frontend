import React, { useState } from 'react';
import { FashionItems } from './FashionItems';
import './dropdown2.css';
import { Link } from 'react-router-dom';

function FashionDrop(props) {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);

  const handleClick = () => setClick(!click);
//   console.log("on ind", props);
    console.log(props.ind);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu2 clicked' : 'dropdown-menu2'}
      >
        
        {FashionItems[0].list.map((item, index) => {
            
          return (
            <li key={index} >
                {item}
              
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FashionDrop;
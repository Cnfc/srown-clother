import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';


const Header = (props) => (
  <div className='header'>
    <Link to='/'>
      <Logo />
    </Link>
    <div className='options'>
      <Link className="option" to='/shop'>
        SHOP
      </Link>

      <Link className="option" to='/shop'>
        CONTACT
      </Link>

      {/* <Link className="option" to='/shop'>
        
      </Link> */}
    </div>


  </div>
)

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';


const Header = ({ currentUser }) => (
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

      {currentUser ?
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>

        :
        <Link to="/signin" className="option">Sign In</Link>
      }

      {/* <Link className="option" to='/shop'>
        
      </Link> */}
    </div>


  </div>
)

export default Header;
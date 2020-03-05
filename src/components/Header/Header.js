import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import { auth } from "firebase/firebase.utils";
import { ReactComponent as Logo } from "assets/crown.svg";
import CartIcon from "components/CartIcon";
import CartDropdown from "components/CartDropdown/CartDropdown";
// import { selectCartHidden } from "redux/cart/cart.selectors";
// import { selectCurrentUser } from "redux/user/user.selectors";

import {
  HeaderStyled,
  LogoContainerStyled,
  OptionsStyled,
  OptionLinkStyled
} from "./Header.styles.js";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderStyled>
      <LogoContainerStyled to="/">
        <Logo className="logo" />
      </LogoContainerStyled>
      <OptionsStyled>
        <OptionLinkStyled to="/shop">SHOP</OptionLinkStyled>
        <OptionLinkStyled to="/contact">CONTACT</OptionLinkStyled>
        {currentUser ? (
          <OptionLinkStyled as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLinkStyled>
        ) : (
          <OptionLinkStyled to="/signin">SIGN IN</OptionLinkStyled>
        )}
        <CartIcon />
      </OptionsStyled>
      {hidden ? null : <CartDropdown />}
    </HeaderStyled>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);

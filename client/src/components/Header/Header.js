import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "components/CartIcon";
import CartDropdown from "components/CartDropdown/CartDropdown";
import { selectCartHidden } from "redux/cart/cart.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";
import { signOutStart } from "redux/user/user.actions";
import { ReactComponent as Logo } from "assets/crown.svg";

import {
  HeaderStyled,
  LogoContainerStyled,
  OptionsStyled,
  OptionLinkStyled
} from "./Header.styles.js";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderStyled>
      <LogoContainerStyled to="/">
        <Logo className="logo" />
      </LogoContainerStyled>
      <OptionsStyled>
        <OptionLinkStyled to="/shop">SHOP</OptionLinkStyled>
        <OptionLinkStyled to="/contact">CONTACT</OptionLinkStyled>
        <OptionLinkStyled to="/redux">Redux Test Page</OptionLinkStyled>
        <OptionLinkStyled to="/clip">Clip</OptionLinkStyled>
        {currentUser ? (
          <OptionLinkStyled as="div" onClick={signOutStart}>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatch = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatch)(Header);

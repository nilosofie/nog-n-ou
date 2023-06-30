import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
  MainLogo,
} from "./navigation.styles.jsx";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector.js";

//import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import mainLogo from "../../assets/lg nnno black full.png";

import { signOutUser } from "../../utils/firebase/firebase.utils";

/*import NNNO from '../../assets/lg nnno black full.png';*/

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          {/*<CrwnLogo className="logo" />*/}
          <MainLogo
            src={mainLogo}
            className="logo"
            alt={`net nog 'n ou logo`}
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">sign in</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

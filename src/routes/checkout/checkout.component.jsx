import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import NavHead from "../../components/nav-head/nav-head.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <NavHead val="checkout" back="/shop" />
      <CheckoutHeader>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>total: R{cartTotal}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;

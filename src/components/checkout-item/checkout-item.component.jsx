import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCheckout, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <span className="name">{name}</span>
      <span onClick={() => removeItemToCart(cartItem)}>{`<`}</span>
      <span className="quantity">{quantity}</span>
      <span onClick={() => addItemToCart(cartItem)}>{`>`}</span>
      <span className="price">${price}</span>
      <span onClick={() => removeItemFromCheckout(cartItem)}>x</span>
    </div>
  );
}

export default CheckoutItem;

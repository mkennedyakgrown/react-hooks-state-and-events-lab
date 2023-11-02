import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);
  const cartClass = isInCart ? "in-cart" : "";

  function handleAddClick() {
    setInCart((isInCart) => !isInCart);
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddClick}>{isInCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

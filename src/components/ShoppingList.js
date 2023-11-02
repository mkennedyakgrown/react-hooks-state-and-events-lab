import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelected] = useState('All');

  function handleSelect(e) {
    setSelected(e.target.value);
  }

  function getItems() {
    if (selectedCategory == "All") {
      return items.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))
    } else {
      return items.filter((item) => item.category == selectedCategory).map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} value={selectedCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {getItems()}
      </ul>
    </div>
  );
}

export default ShoppingList;
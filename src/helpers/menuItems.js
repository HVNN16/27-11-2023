import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <img src={image} alt={name} className="menuItemImage" />
      <div className="menuItemDetails">
        <h2 className="menuItemName">{name}</h2>
        <p className="menuItemPrice">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItem;

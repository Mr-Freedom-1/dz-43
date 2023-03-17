import React from "react";

function Add({ changeName, changePrice, addProducts, newProducts }) {
  return (
    <div className="add">
      <label>Product name</label>
      <input onBlur={changeName} type="text" value={newProducts.name} />
      <label>Product price</label>
      <input onBlur={changePrice} type="number" value={newProducts.price} />
      <button onClick={addProducts} type="button">Add</button>
    </div>
  );
}

export default Add;


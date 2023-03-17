import React, {useState} from "react";
import Product from "./components/Product";

function App () {

  const productsList = [
    {name: 'Iphone', price: 800, id: 1},
    {name: 'Watch', price: 100, id: 2},
  ];

  const [products, setProducts] = useState(productsList);
  const [newProducts, setNewProducts] = useState({name: '', price: 0.01, id: 3});
  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  const changeName = (e) => {
    setNewProducts((prev)=>({...prev, name: e.target.value}));
  };

  const changePrice = (e) => {
    setNewProducts((prev)=>({...prev, price: e.target.value}));
  };

  const validateName = () => {
    if (newProducts.name.length <= 1) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const validatePrice = () => {
    if (newProducts.price <= 0) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };

  const addProducts = () => {
    validateName();
    validatePrice();
    if (!nameError && !priceError) {
      let key = Math.random();
      setNewProducts((prev)=>({...prev, id: key}));
      setProducts((prev) => ([...prev, newProducts]));
      setNewProducts({name: '', price: '', id: ''});
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter(product => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <div className="add">
        <label>Product name</label>
        <input onInput={changeName} onBlur={validateName} type="text" value={newProducts.name} />
        {nameError && <p>Please enter a valid name with more than one letter.</p>}
        <label>Product price</label>
        <input onInput={changePrice} onBlur={validatePrice} type="number" value={newProducts.price} />
        {priceError && <p>Please enter a valid price greater than 0.</p>}
        <button onClick={addProducts} type="button">Add</button>
      </div>
      <div className="list">
        {products.map(product => <Product onRemove={removeProduct} key={product.id} id={product.id} name={product.name} price={`${product.price} $`} />)}
      </div>
    </div> 
  );
}

export default App;
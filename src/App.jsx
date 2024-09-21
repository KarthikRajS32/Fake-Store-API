import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import CartModal from "./Components/CartModal";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const openCartModal = () => {
    setIsModalOpen(true);
  };

  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Navbar cartCount={cart.length} openCartModal={openCartModal} />
      <ProductList addToCart={addToCart} cart={cart} />
      <CartModal
        isOpen={isModalOpen}
        closeModal={closeCartModal}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;

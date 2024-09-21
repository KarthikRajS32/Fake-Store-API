import React from "react";

const Navbar = ({ cartCount, openCartModal }) => (
  <nav className="bg-gray-800 text-white p-7 flex justify-between items-center animate-marquee2">
    <h1 className="text-2xl text-center">Shoping Mart</h1>
    <div className="cursor-pointer text-xl" onClick={openCartModal}>
      Cart ({cartCount})
    </div>
  </nav>
);

export default Navbar;

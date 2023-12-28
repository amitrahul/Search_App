import React, { useState } from "react";
import "./productnavBar.scss";
import zevi_logo from "../../assets/zevi_logo.png";
import SearchBar from "../SearchBar/SearchBar";

const ProductsNavBar = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  return (
    <div className="products_navbar">
      <SearchBar handleSuggestionBox={setShowSuggestionBox} />
      <img src={zevi_logo} alt="logo" />
    </div>
  );
};

export default ProductsNavBar;

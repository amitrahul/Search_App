import React, { useState } from "react";
import cloth from "../../assets/cloths.jpg";
import "./homePage.scss";
const HomePage: React.FC = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  return (
    <div className="homeContainer">
      <img src={cloth} alt="cloth" />
    </div>
  );
};

export default HomePage;

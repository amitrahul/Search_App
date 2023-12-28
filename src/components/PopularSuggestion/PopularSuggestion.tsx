import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { suggestionApi } from "../../db/data";
import { suggestion } from "../../db/types/products";
import "./popularSuggestion.scss";
const PopularSuggestion: React.FC = () => {
  const [suggestionlist, setSuggestionlist] = useState<suggestion[]>();
  const navigate = useNavigate();
  const getSuggestionlist = async () => {
    try {
      const data = await suggestionApi.getsuggestion();
      setSuggestionlist(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getSuggestionlist();
  }, []);

  const navigateToProductsPage = () => {
    navigate("/products");
  };
  return (
    <div className="suggestionWrapper">
      <h2>Popular suggestions</h2>
      <ul>
        {suggestionlist?.map((product, i) => {
          return (
            <li key={i} onClick={navigateToProductsPage}>
              {product.SuggestionProductName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PopularSuggestion;

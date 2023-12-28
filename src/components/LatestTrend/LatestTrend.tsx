import React, { useEffect, useState } from "react";
import "./LatestTrend.scss";
import PopularSuggestion from "../PopularSuggestion/PopularSuggestion";
import { latestTrendApi } from "../../db/data";
import { latestTrendProducts } from "../../db/types/products";
import { useNavigate } from "react-router-dom";

const LatestTrend: React.FC = () => {
  const [latestTrendsData, setLatestTrendsData] =
    useState<latestTrendProducts[]>();
  const navigate = useNavigate();
  const getLatestTrendslist = async () => {
    try {
      const data = await latestTrendApi.getlatestTrend();
      setLatestTrendsData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getLatestTrendslist();
  }, []);
  const navigateToProductsPage = () => {
    navigate("/products");
  };
  return (
    <div className="latestTrendWrapper">
      <h2>Latest Trends</h2>
      <div className="latest_trend_products">
        {latestTrendsData?.map((trendProduct, i) => {
          console.log(trendProduct);
          return (
            <div
              key={i}
              className="latest_trend_product"
              onClick={navigateToProductsPage}
            >
              <img src={trendProduct.latestProductImage} alt="img" />
              <div>{trendProduct.latestProductName}</div>
            </div>
          );
        })}
      </div>
      <PopularSuggestion />
    </div>
  );
};

export default LatestTrend;

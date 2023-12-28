import { useState } from "react";
import "./ProductItem.scss";
import { products } from "../../db/types/products";
import { ratingBox } from "../../Utilities/utilities";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

interface ProductItemType {
  product: products;
}

const ProductItem = ({ product }: ProductItemType) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showViewProduct, setShowViewProduct] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="product_item">
      <div className="product_img_container">
        <div className="wishlist_icon_container">
          {isInWishlist ? (
            <div onClick={() => setIsInWishlist((prev) => !prev)}>
              <AiFillHeart color="red" />
            </div>
          ) : (
            <div onClick={() => setIsInWishlist((prev) => !prev)}>
              <AiOutlineHeart color="red" />
            </div>
          )}
        </div>
        <img
          className="product_img"
          src={product?.productImage}
          alt="cloth"
          onMouseOver={() => setShowViewProduct(true)}
          onMouseOut={() => setShowViewProduct(false)}
        />
        {showViewProduct && (
          <div
            onMouseOver={() => setShowViewProduct(true)}
            onMouseOut={() => setShowViewProduct(false)}
            className="view_product"
            onClick={() => navigate("/")}
          >
            View Product
          </div>
        )}
      </div>
      <div className="product_Info">
        <div>{product.productName}</div>
        <div className="product_price">
          <span className="org_price">Rs. {product.productPrice} </span>
          <span className="dis_price">Rs. {product.discountPrice} </span>
        </div>
        <div className="rating_and_reviews_container">
          {product.productRating && ratingBox(product.productRating)} (
          {product.productsReviews})
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

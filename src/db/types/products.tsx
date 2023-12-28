export interface latestTrendProducts {
  id?: String;
  latestProductName?: String;
  latestProductImage?: string;
}

export interface suggestion {
  id?: String;
  SuggestionProductName?: String;
}

export interface products {
  id?: String;
  productName?: String;
  productImage?: string;
  productPrice?: number;
  discountPrice?: number;
  productRating?: number;
  productsReviews?: number;
}

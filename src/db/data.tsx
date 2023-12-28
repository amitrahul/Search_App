import type {
  latestTrendProducts,
  suggestion,
  products,
} from "./types/products";

class ProductsApi {
  getProducts(): Promise<products[]> {
    const productData: products[] = [
      {
        id: "5e887ac47eed253091be10cb",
        productImage: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        productName: "Cleveland",
        productPrice: 300,
        discountPrice: 200,
        productsReviews: 400,
        productRating: 4,
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        productName: "Atlanta",
        productPrice: 500,
        discountPrice: 200,
        productsReviews: 450,
        productRating: 3,
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        productName: "Atlanta",
        productPrice: 1500,
        discountPrice: 1200,
        productsReviews: 950,
        productRating: 2,
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        productPrice: 2500,
        discountPrice: 2200,
        productsReviews: 150,
        productRating: 1,
        productName: "Cleveland",
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        productName: "Atlanta",
        productPrice: 2500,
        discountPrice: 1200,
        productsReviews: 750,
        productRating: 5,
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        productName: "Atlanta",
        productPrice: 2500,
        discountPrice: 1400,
        productsReviews: 750,
        productRating: 3,
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage:
          "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        productName: "Atlanta",
        productPrice: 2500,
        discountPrice: 1200,
        productsReviews: 950,
        productRating: 2,
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        productName: "Atlanta",
        productPrice: 2500,
        discountPrice: 1200,
        productsReviews: 1150,
        productRating: 4,
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        productImage: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        productName: "Atlanta",
        productPrice: 2500,
        discountPrice: 1200,
        productsReviews: 750,
        productRating: 5,
      },
    ];
    return Promise.resolve(productData);
  }
}

export const productApi = new ProductsApi();

class LatestTrendApi {
  getlatestTrend(): Promise<latestTrendProducts[]> {
    const latestTrendProductData: latestTrendProducts[] = [
      {
        id: "5e887ac47eed253091be10cb",
        latestProductImage:
          "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        latestProductName: "Cleveland",
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        latestProductImage:
          "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        latestProductName: "Atlanta",
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        latestProductImage:
          "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        latestProductName: "Hoodie black",
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        latestProductImage:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        latestProductName: " Windbreaker",
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        latestProductImage:
          "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        latestProductName: "Lock and Love",
      },
    ];
    return Promise.resolve(latestTrendProductData);
  }
}
export const latestTrendApi = new LatestTrendApi();

class SuggestionApi {
  getsuggestion(): Promise<suggestion[]> {
    const suggestionList: suggestion[] = [
      {
        id: "5e887ac47eed253091be10cb",
        SuggestionProductName: "Stripend shirt dress",
      },
      {
        id: "5e887b209c28ac3dd97f6db5",
        SuggestionProductName: "Stain shirts",
      },
      {
        id: "5e887b209c28ac3dd97f6ds5",
        SuggestionProductName: "Denium jumpsuit",
      },
      {
        id: "5e887b209c28ac3dd97f6pb5",
        SuggestionProductName: "Leather dresses",
      },
      {
        id: "5e887b209c28ac3dd97f6cvg1",
        SuggestionProductName: "Solid tshirts",
      },
    ];
    return Promise.resolve(suggestionList);
  }
}
export const suggestionApi = new SuggestionApi();

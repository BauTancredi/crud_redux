import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DOWNLOAD_PRODUCTS_START,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  PRODUCT_DELETE_GET,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
  PRODUCT_EDIT_GET,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_ERROR,
} from "../types";

const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteproduct: null,
  editproduct: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_PRODUCTS_START:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case DOWNLOAD_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
    case PRODUCT_DELETE_ERROR:
    case PRODUCT_EDIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case PRODUCT_DELETE_GET:
      return {
        ...state,
        deleteproduct: action.payload,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.deleteproduct
        ),
        deleteproduct: null,
      };
    case PRODUCT_EDIT_GET:
      return {
        ...state,
        editproduct: action.payload,
      };
    case PRODUCT_EDIT_SUCCESS:
      return {
        ...state,
        editproduct: null,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };
    default:
      return state;
  }
}

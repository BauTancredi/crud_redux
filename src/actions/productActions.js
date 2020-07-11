import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import clientAxios from "../config/axios";

export function createNewProductAction(product) {
  return async (disptach) => {
    disptach(addProduct());

    try {
      // Insert in API
      await clientAxios.post("/produsts", product);

      // Update state success
      disptach(addProductSuccess(product));
    } catch (error) {
      console.log(error);
      disptach(addProductError(true));
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (status) => ({
  type: ADD_PRODUCT_ERROR,
  payload: status,
});

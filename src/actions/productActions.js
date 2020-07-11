import Swal from "sweetalert2";

import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import clientAxios from "../config/axios";

export function createNewProductAction(product) {
  return async (disptach) => {
    disptach(addProduct());

    try {
      // Insert in API
      await clientAxios.post("/producsts", product);

      // Update state success
      disptach(addProductSuccess(product));

      // Alert
      Swal.fire("Success", "The product has been added", "success");
    } catch (error) {
      console.log(error);
      disptach(addProductError(true));

      // Alert
      Swal.fire({
        icon: "error",
        title: "There has been an error",
        text: "Try again",
      });
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

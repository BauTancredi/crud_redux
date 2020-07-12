import Swal from "sweetalert2";

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
} from "../types";

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

export function obtainProductsAction() {
  return async (disptach) => {
    disptach(downloadProducts());

    try {
      const response = await clientAxios.get("/products");

      disptach(downloadProductsSuccess(response.data));
    } catch (error) {
      disptach(downloadProductsError());
    }
  };
}

const downloadProducts = () => ({
  type: DOWNLOAD_PRODUCTS_START,
  payload: true,
});

const downloadProductsSuccess = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products,
});

const downloadProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});

export function deleteProductAction(id) {
  return async (disptach) => {
    disptach(getProductDelete(id));

    try {
      const response = await clientAxios.delete(`/products/${id}`);

      disptach(deleteProductSuccess());

      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    } catch (error) {
      disptach(deleteProductError());
    }
  };
}

const getProductDelete = (id) => ({
  type: PRODUCT_DELETE_GET,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: PRODUCT_DELETE_SUCCESS,
});
const deleteProductError = () => ({
  type: PRODUCT_DELETE_ERROR,
  payload: true,
});

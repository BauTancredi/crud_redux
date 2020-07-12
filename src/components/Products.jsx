import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { obtainProductsAction } from "../actions/productActions";

const Products = () => {
  const disptach = useDispatch();

  useEffect(() => {
    const loadProducts = () => disptach(obtainProductsAction());
    loadProducts();
  }, []);
  return (
    <Fragment>
      <h2 className="text-center my-5">Product Listing</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Fragment>
  );
};

export default Products;

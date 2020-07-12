import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "./Product";

import { obtainProductsAction } from "../actions/productActions";

const Products = () => {
  const disptach = useDispatch();

  useEffect(() => {
    const loadProducts = () => disptach(obtainProductsAction());
    loadProducts();
  }, []);

  const products = useSelector((state) => state.products.products);
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
        <tbody>
          {products.lenght === 0
            ? "There are no products"
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { editProductAction } from "../actions/productActions";

const EditProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const productedit = useSelector((state) => state.products.editproduct);

  useEffect(() => {
    setProduct(productedit);
  }, [productedit]);

  const onChangeForm = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const { name, price } = product;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editProductAction(product));

    history.push("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit product</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="price"
                  value={price}
                  onChange={onChangeForm}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                SAVE CHANGES
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

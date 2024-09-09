import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";

const Product = () => {
  const { product } = useContext(ProductContext);
  console.log(product);

  return (
    <div>
      <h1>Product</h1>
      {product &&
        product.length > 0 &&
        product.map((product, idx) => (
          <div>
            <div
              style={{
                border: " 1px solid orange",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={idx}
                to={`/singleproduct?id${product.id}`}
              >
                <div>{product.id}</div>
                <div>{product.title}</div>
                <div>{product.price}</div>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SingleProduct = () => {
  let [searcParams] = useSearchParams();
  let id = searcParams.get("id");
  console.log(searcParams);
  const [singleProduct, setSingleProduct] = useState();
  console.log(singleProduct);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div>
      <div>{singleProduct && singleProduct.id}</div>
      <div>{singleProduct && singleProduct.title}</div>
      <div>{singleProduct && singleProduct.price}</div>
    </div>
  );
};

export default SingleProduct;

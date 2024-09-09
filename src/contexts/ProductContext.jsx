import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();
export const ProductProvider = (props) => {
  console.log(props);
  const [product, setProduct] = useState();
  console.log(product);
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {props.children}
    </ProductContext.Provider>
  );
};

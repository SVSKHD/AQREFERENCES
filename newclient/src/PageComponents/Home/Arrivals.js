import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/product";
import ProductCard from "../../Components/cards/productCard";
//import LoadingCard from "../../Components/cards/loadingProductCard";

const NewArrivals = () => {
  useEffect(() => {
    loadAllProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const loadAllProducts = () => {
    // sort, order, limit
    getProducts("createdAt", "desc").then((res) => {
      setProducts(res.data);
    });
  };
  return (
    <>
      <div>
        <h1>hello products</h1>
        <hr />
        <div className="row">
          {products.map((r, i) => (
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12" key={i}>
              <ProductCard title={r.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;

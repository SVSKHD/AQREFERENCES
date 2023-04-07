import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/product";
import ProductCard from "../../Components/cards/productCard";
import LoadingCard from "../../Components/cards/loadingProductCard";

const NewArrivals = () => {
  useEffect(() => {
    loadAllProducts();
  }, []);

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const loadAllProducts = () => {
    setLoading(true);
    // sort, order, limit
    getProducts("sold", "desc").then((res) => {
      console.log("prod" , res.data)
      setProducts(res.data);
      setLoading(false);
    });
  };
  return (
    <>
      <div>
        {loading ? (
          <div className="row">
            {products.map((r, i) => (
              <div className="col-md-6 col-lg-4 col-xs-12 col-sm-12" key={i}>
                <LoadingCard />
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {products.map((r, i) => (
              <div className="col-md-6 col-lg-4 col-xs-12 col-sm-12" key={i}>
                <ProductCard r={r} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NewArrivals;

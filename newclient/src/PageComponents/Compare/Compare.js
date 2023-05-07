import { useEffect, useState } from "react";
import CompareCommonCard from "../../Components/cards/CompareCommonCard";
import CompareExpandedCard from "../../Components/cards/CompareExpandedCard";
import AquaLayout from "../../Layout/Layout";
import UserCartAndWish from "./userCartAndWishListTab";
import { getProductsByCount } from "../../services/product";
import { useSelector, useDispatch } from "react-redux";
const ComparePage = () => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => ({ ...state }));
  const [products, setProducts] = useState([]);
  const [ComparedProducts, setComparedProducts] = useState([]);
  const [product1, setProduct1] = useState({});
  const [product2, setProduct2] = useState({});
  const [productShow, setProductShow] = useState(false);
  useEffect(() => {
    getProductsByCount(10).then((res) => {
      setProducts(res.data);
    });
  }, []);
  const CartProductsLoad = () => {
    return (
      <>
        <h1>Cart Products Load</h1>
        <hr />
        {cart.map((r, i) => (
          <div>
            <CompareCommonCard title={r.title} images={r.images[0].url} />
          </div>
        ))}
      </>
    );
  };
  const ShowProducts = (data) => {
    setProductShow(true);
    setProduct1(data);
    console.log("compare data", product1);
  };
  const ShowListedProducts = () => {
    return (
      <div>
        <div className="mb-2">
          <h4 className="display-4">Listed products</h4>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
            <CompareExpandedCard product={product1} />
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
            <CompareExpandedCard product={product2} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <AquaLayout>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-xs-12 col-sm-12">
              <div className="card shadow-lg mb-5 aq-card-height">
                <div className="card-body">
                  <h4>All Products</h4>
                  <hr />
                  {products.map((r, i) => (
                    <>
                      <CompareCommonCard
                        key={i}
                        image={r.images[0].url}
                        title={r.title}
                        description={r.description}
                        add={() => ShowProducts(r)}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
              <div className="card shadow-lg">
                <div className="card-body">
                  {productShow ? (
                    ShowListedProducts()
                  ) : (
                    <h4 className="display-4">
                      Please Add Products to compare here
                    </h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default ComparePage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getRelated } from "../../services/product";
import AquaLayout from "../../Layout/Layout";
import ProductDetail from "./ProductDetail";
const AqIndividualProduct = () => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  useEffect(() => {
    loadSingleProduct();
  }, []);
  const Match = useParams();
  const loadSingleProduct = () => {
    getProduct(Match.name).then((res) => {
      setProduct(res.data);
      // load related
      //getRelated(res.data._id).then((res) => setRelated(res.data));
    });
  };
  return (
    <>
      <AquaLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <div className="p-2">
                {" "}
                <h4>Products Images</h4>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <div className="p-2">
                <ProductDetail product={product}/>
              </div>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default AqIndividualProduct;

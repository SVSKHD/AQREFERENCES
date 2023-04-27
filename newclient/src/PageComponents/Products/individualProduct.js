import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getRelated } from "../../services/product";
import AquaLayout from "../../Layout/Layout";
import ProductDetail from "./ProductDetail";
import AqProductCarousel from "./ProductCarousel";
import RelatedProductsLoad from "./relatedProducts";

const AqIndividualProduct = () => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [Images, setImages] = useState([]);
  const Match = useParams();
  useEffect(() => {
    getProduct(Match.name).then((res) => {
      setProduct(res.data);
      setImages(res.data.images);
      // load related
      getRelated(res.data._id).then((res) => setRelated(res.data));
    });
  }, [Match]);

  return (
    <>
      <AquaLayout>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
              <div className="p-2">
                <AqProductCarousel images={Images} />
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-xs-12 col-sm-12">
              <div className="p-2">
                <ProductDetail product={product} />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2>Related Products</h2>
            <hr />
            <RelatedProductsLoad related={related} />
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default AqIndividualProduct;

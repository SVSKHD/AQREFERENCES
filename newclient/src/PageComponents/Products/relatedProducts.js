import ProductCard from "../../Components/cards/productCard";
const RelatedProductsLoad = (props) => {
  const { related } = props;
  return (
    <>
      <div className="row">
        {related.map((r, i) => (
          <div className="col-md-6 col-lg-4 col-xs-12 col-sm-12 mb-5" key={i}>
            <ProductCard r={r} />
          </div>
        ))}
      </div>
    </>
  );
};
export default RelatedProductsLoad;

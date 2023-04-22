import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AquaLayout from "../../Layout/Layout";
import { getCategory } from "../../services/category";
import ProductCard from "../../Components/cards/productCard";
import AqDefaultSpinner from "../../Components/Resuables/spinners";


const IndivdualCategoryComponent = () => {
  const Match = useParams();
  const category = Match.name;

  const [products, setProducts] = useState([]);
  const [Category, setCategory] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategory(category).then((res) => {
      console.log(res.data, null, 4);
      setCategory(res.data.category);
      setProducts(res.data.products);
      setLoading(false);
    });
  }, [category]);

  return (
    <>
      <AquaLayout>
        <div className="container mb-5">
          {Loading ? (
           <AqDefaultSpinner/>
          ) : (
            <div>
              <h1 className="text-center display-2 text-primary">
                {Category.name}
              </h1>
              <hr />
              <div className="row">
                {products.length ? (
                  <>
                    <>
                      {products.map((r, i) => (
                        <>
                          <div
                            key={i}
                            className="col-md-4 col-lg-4 col-xs-12 col-sm-12"
                          >
                            <ProductCard r={r} />
                          </div>
                        </>
                      ))}
                    </>
                  </>
                ) : (
                  <>
                    <h2 className="text-center display-2">
                      No Products in the category yet
                    </h2>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </AquaLayout>
    </>
  );
};
export default IndivdualCategoryComponent;

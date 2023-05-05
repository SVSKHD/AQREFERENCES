import CompareCommonCard from "../../Components/cards/CompareCommonCard";
import AquaLayout from "../../Layout/Layout";
import UserCartAndWish from "./userCartAndWishListTab";
import { useSelector, useDispatch } from "react-redux";
const ComparePage = () => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => ({ ...state }));

  const CartProductsLoad = () => {
    return (
      <>
        <h1>Cart Products Load</h1>
        <hr />
        {cart.map((r, i) => (
          <div>
            <CompareCommonCard title={r.title} />
          </div>
        ))}
      </>
    );
  };
  const WishListProductsLoad = () => {
    return (
      <>
        <h1>WishList Products Load</h1>
        <hr />
      </>
    );
  };
  const TrendingProductsLoad = () =>{
    return(
      <>
      <h1>Trending Products Load</h1>
      <hr/>
      </>
    )
  }
  return (
    <>
      <AquaLayout>
        <div className="container">
          <UserCartAndWish
            cart={<CartProductsLoad />}
            wishlist={<WishListProductsLoad />}
            trending={<TrendingProductsLoad/>}
          />
          <h1 className="text-center display-2">Compare Your Products</h1>
        </div>
      </AquaLayout>
    </>
  );
};
export default ComparePage;

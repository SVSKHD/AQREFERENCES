import AquaLayout from "../../Layout/Layout";
import UserCartAndWish from "./userCartAndWishListTab";

const ComparePage = () => {
  return (
    <>
      <AquaLayout>
        <div className="container">
          <UserCartAndWish />
          <h1 className="text-center display-2">Compare Your Products</h1>
        </div>
      </AquaLayout>
    </>
  );
};
export default ComparePage;

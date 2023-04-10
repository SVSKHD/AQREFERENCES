import AqOffersAndCoupon from "./offersAndCoupon";
import AquaLayout from "../../Layout/Layout";
import NewArrivals from "./Arrivals";
import AquaHomeCarousel from "./carousel";


const HomeComponent = () => {
  return (
    <AquaLayout>
      <div className="container">
        <AquaHomeCarousel />
      </div>
      <AqOffersAndCoupon/>
      <NewArrivals />
    </AquaLayout>
  );
};
export default HomeComponent;

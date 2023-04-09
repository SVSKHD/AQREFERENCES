import AquaLayout from "../../Layout/Layout";
import NewArrivals from "./Arrivals";
import AquaHomeCarousel from "./carousel"

const HomeComponent = () => {
  return (
    <AquaLayout>
      <AquaHomeCarousel/>
      <div className="container">
        <NewArrivals />
      </div>
    </AquaLayout>
  );
};
export default HomeComponent;

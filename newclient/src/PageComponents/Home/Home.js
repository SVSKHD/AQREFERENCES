import AquaLayout from "../../Layout/Layout";
import NewArrivals from "./Arrivals";

const HomeComponent = () => {
  return (
    <AquaLayout>
      <div className="container">
        <NewArrivals />
      </div>
    </AquaLayout>
  );
};
export default HomeComponent;

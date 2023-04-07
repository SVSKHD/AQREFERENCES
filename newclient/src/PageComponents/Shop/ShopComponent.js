import AquaLayout from "../../Layout/Layout";
import { Card } from "react-bootstrap";

const ShopComponent = () => {
  return (
    <>
      <AquaLayout>
        <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </div>
        <div className="col-md-7 col-lg-6 col-xs-12 col-sm-12"></div>
      </AquaLayout>
    </>
  );
};
export default ShopComponent;

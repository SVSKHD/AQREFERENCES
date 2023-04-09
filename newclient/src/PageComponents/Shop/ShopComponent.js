import { useState } from "react";
import AquaLayout from "../../Layout/Layout";
import { Card, Button } from "react-bootstrap";
import AqDrawer from "../../Components/Drawers/Drawer";

const ShopComponent = () => {
  const [filters, setShowFilters] = useState(false);
  return (
    <>
      <AquaLayout>
        <div className="row">
          {filters}
          <div className="col-md-2 col-lg-2 col-xs-12 col-sm-12 aq-shop-filters">
            {filters ? (
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            ) : (
              <h4>hello not visible</h4>
            )}
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </div>
          <div className="col-md-10 col-lg-10 col-xs-12 col-sm-12">
            <h4>products</h4>
          </div>
        </div>
        <div className="aq-mobile-filters">
          <Button variant="light" onClick={() => setShowFilters(true)}>
            filters
          </Button>
        </div>
        <AqDrawer show={filters} />
      </AquaLayout>
    </>
  );
};
export default ShopComponent;

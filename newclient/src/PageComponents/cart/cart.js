import AquaLayout from "../../Layout/Layout";
const cartComponent = () => {
  return (
    <>
      <AquaLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <h1>cart items</h1>
              <hr />
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
              <h4>total</h4>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default cartComponent;

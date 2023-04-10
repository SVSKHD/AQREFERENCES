import AquaLayout from "../../Layout/Layout";
const CartComponent = () => {
  return (
    <>
      <AquaLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <div class="card">
                <div class="card-body shadow-lg">
                  <h5 class="card-title display-4">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
              <div class="card shadow-lg">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AquaLayout>
    </>
  );
};
export default CartComponent;

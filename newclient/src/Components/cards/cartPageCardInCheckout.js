import { FaMinus, FaPlus } from "react-icons/fa";
import { ButtonGroup, Button } from "react-bootstrap";
const CartPageComponent = (props) => {
  return (
    <>
      <div class="card mb-3 shadow-lg">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.image}
              class="img-fluid rounded-start"
              alt={props.title}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
              <ButtonGroup aria-label="Basic example">
                <Button variant="link">
                  <FaMinus size={20} />
                </Button>
                <Button variant="link" className="aq-text-decorate">
                  {props.count}
                </Button>
                <Button variant="link">
                  <FaPlus size={20} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card mb-3 shadow-lg">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="rounded-start" height="200" alt={props.title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title aq-cart-page-title">

                                {props.title}

                            </h5>
                            <p className="card-text">{props.description}</p>
                            
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};
export default CartPageComponent;

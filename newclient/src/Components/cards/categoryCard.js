import { useNavigate } from "react-router-dom";
import AQ from "../../Assests/Default.png";
const AqCategoryCard = (props) => {
  const Navigate = useNavigate();
  const toRoute = (val) => {
    Navigate(`category/${val}`);
  };
  return (
    <>
      <div onClick={()=>toRoute(props.slug)} class="card m-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={AQ} class="img-fluid rounded-start" alt={props.title} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AqCategoryCard;

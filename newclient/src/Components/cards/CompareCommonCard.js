import { FaPlus } from "react-icons/fa";
import AQ from "../../Assests/Default.png"
const CompareCommonCard = (props) => {
  const { title, image, description , add } = props;
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={image}
            class="img-fluid rounded-start"
            alt={title}
            height="100"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description.substring(0,10)}</p>
            <button onClick={add} className="btn btn-link">
              <FaPlus size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompareCommonCard;

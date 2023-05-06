import {FaPlus} from "react-icons/fa"
const CompareCommonCard = (props) => {
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={props.images}
            class="img-fluid rounded-start"
            alt={props.title}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
           <button className="btn btn-link"><FaPlus size={25}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompareCommonCard;

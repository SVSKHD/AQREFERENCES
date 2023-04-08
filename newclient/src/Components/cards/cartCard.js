import AQ from "../../Assests/Default.png";
const AqCartCard = (props) => {
  const { title, description, price, images } = props;
  return (
    <>
      <div class="card mb-3 shadow-lg">
        <div class="row g-0">
          <div class="col-md-5">
            <div className="p-2">
              <img
                src={images ? images[0].url : AQ}
                class="img-fluid rounded-start img-thumbnail"
                alt="Aquakart"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>

              <p class="card-text">
                <small class="text-muted">{price}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AqCartCard;

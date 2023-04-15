import AquaFooter from "./Footer";
import AquaNavHead from "./NavHead";
import AquaHead from "./Head";
import AquaMapCategories from "../Components/Resuables/categories";

const AquaLayout = (props) => {
  return (
    <>
      <AquaNavHead />
      <AquaMapCategories />
      <AquaHead
        title={props.title}
        description={props.description}
        keywords={props.keywords}
        images={props.images}
        canurl={props.canurl}
      />
      <div className="container-fluid layout-height">{props.children}</div>
      <AquaFooter />
    </>
  );
};
export default AquaLayout;

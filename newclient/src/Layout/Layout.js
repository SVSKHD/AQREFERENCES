import AquaFooter from "./Footer";
import AquaNavHead from "./NavHead";
import AquaHead from "./Head";

const AquaLayout = (props) => {
  return (
    <>
      <AquaNavHead />
      <AquaHead title={props.title} />
      <div className="container-fluid layout-height">{props.children}</div>
      <AquaFooter />
    </>
  );
};
export default AquaLayout;

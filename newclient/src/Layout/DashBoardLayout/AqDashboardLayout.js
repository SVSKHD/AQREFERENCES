import AqDashboardFooter from "./AqDashboardFooter";
import AqDashNav from "./AqDashboardNav";

const AqDashboardLayout = (props) => {
  return (
    <>
      <AqDashNav />
      {props.children}
      <AqDashboardFooter />
    </>
  );
};
export default AqDashboardLayout;

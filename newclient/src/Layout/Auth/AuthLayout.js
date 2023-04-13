import AuthFooter from "./AuthFooter";
import AuthHead from "./AuthHead";

const AuthLayout = (props) => {
  return (
    <>
      <AuthHead />
      {props.children}
      <AuthFooter />
    </>
  );
};
export default AuthLayout;

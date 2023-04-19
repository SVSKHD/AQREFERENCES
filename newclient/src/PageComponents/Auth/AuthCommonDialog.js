import AuthDialogLayout from "../../Components/Auth/AuthDialogLayout";
import SignupAuth from "../../Components/Auth/SignupDialog";
import LoginAuth from "../../Components/Auth/LoginDialog";
import useAuthStore from "../../zustStore/Auth";

const AuthCommonDialog = (props) => {
  const userSignup = useAuthStore((state) => state.userSignupStatus);
  const toggleSignup = useAuthStore((state) => state.toggleSignup);
  

  const ToggleSignupStatus = () => {
    toggleSignup();
  };

  return (
    <AuthDialogLayout show={props.show} hide={props.hide}>
      <div className="container-fluid">
        {userSignup ? <SignupAuth /> : <LoginAuth />}
        <div className="text-center">
          <button className="btn" onClick={ToggleSignupStatus}>
            {userSignup
              ? "Already A User..? Please Login"
              : "No Account Yet..? Please Signup"}
          </button>
        </div>
      </div>
    </AuthDialogLayout>
  );
};

export default AuthCommonDialog;

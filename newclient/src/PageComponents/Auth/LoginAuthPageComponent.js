import AuthLayout from "../../Layout/Auth/AuthLayout";
import AQ from "../../Assests/Default.png";
import { FaGoogle } from "react-icons/fa";
import { auth, Provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import AqCustomToast from "../../Components/toasts/toasts"

const LoginAuthPageComponent = () => {
  const Navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, Provider).then((data) => {
        console.log("data", data);
      });
      Navigate("/")
      AqCustomToast("succesfully logged in")
    } catch (error) {
      console.log(error);
      AqCustomToast("sorry")
    }
  };
  return (
    <AuthLayout>
      <div className="container">
        <div class="card mb-3 shadow-lg">
          <div className="container">
            <div class="row g-0">
              <div class="col-md-6">
                <img
                  src={AQ}
                  class="img-fluid rounded-start"
                  alt="Aquakart Logo"
                />
              </div>
              <div class="col-md-6">
                <div className="container">
                  <div className="mb-5" />
                  <img src={AQ} alt="Aqukart Logo" height="150" />
                  <div class="card-body">
                    <form>
                      <h3>Sign In</h3>
                      <div className="mb-3">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="mb-3">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="mb-3" />
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                      <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                      </p>
                    </form>
                    <hr className="login-hr" />
                    <div className="text-center">
                      <button className="btn text-danger" onClick={handleGoogleLogin}>
                        <FaGoogle size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
export default LoginAuthPageComponent;

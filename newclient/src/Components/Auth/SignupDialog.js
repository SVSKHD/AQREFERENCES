import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../config/firebase";
import { createOrUpdateUser } from "../../services/auth";
import { useDispatch } from "react-redux";
import AqCustomToast from "../toasts/toasts";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  //redux
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth,email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          dispatch({
            type: "SET_AUTH_DRAWER_VISIBLE",
            payload: false,
          });
          AqCustomToast(`Succesfully Logged In ${user.email}`)
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
      AqCustomToast(error.message);
      setLoading(false);
    }
  };
  const handleGoogleSignup = async () => {};
  return (
    <>
      <div className="container-fluid">
        <h1>Signup</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="row">
            <div className="col-md-5">
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">
                  Signup
                </button>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <h4>or</h4>
            </div>
            <div className="col-md-5">
              <div class="d-grid gap-2">
                <button
                  onClick={handleGoogleSignup}
                  class="btn text-danger"
                  type="submit"
                >
                  <FaGoogle size={25} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignupAuth;

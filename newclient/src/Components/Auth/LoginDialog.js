import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { auth, Provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import {useDispatch , useSelector} from "react-redux"
import AqCustomToast from "../toasts/toasts";
import {createOrUpdateUser} from "../../services/auth"
import useAuthStore from "../../zustStore/Auth";

const LoginAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch()

  //zustand
  const toggleDialogFalse = useAuthStore((state) => state.toggleAuthDialogFalse);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await signInWithPopup(auth, Provider).then(async(data) => {
        const {user} = data
        const idTokenResult = await user.getIdTokenResult();
        console.log(idTokenResult)
        await createOrUpdateUser(idTokenResult.token).then((res)=>{
          // let data = res
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
        })
        setGoogleLoading(false);
        toggleDialogFalse()
      });
      AqCustomToast("succesfully logged in");
    } catch (error) {
      console.log(error);
      setGoogleLoading(false)
      AqCustomToast("sorry");
    }
  };
  return (
    <>
      <div className="container-fluid">
        {user}
        <h1>Login</h1>
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
                  Login
                </button>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <h4>or</h4>
            </div>
            <div className="col-md-5">
              <div class="d-grid gap-2">
                <button
                  class="btn text-danger"
                  type="submit"
                  onClick={handleGoogleLogin}
                >
                  {googleLoading ? (
                    <div class="spinner-border text-danger" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <FaGoogle size={25} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginAuth;

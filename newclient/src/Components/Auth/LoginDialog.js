import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
const LoginAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false)
  const [googleLoading , setGoogleLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container-fluid">
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
                <button class="btn text-danger" type="submit">
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
export default LoginAuth;

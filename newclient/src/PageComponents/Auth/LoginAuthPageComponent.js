import AuthLayout from "../../Layout/Auth/AuthLayout";
import AQ from "../../Assests/Default.png";

const LoginAuthPageComponent = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div class="card mb-3 aq-login-page shadow-lg">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-4">
              <img src={AQ} class="img-fluid rounded-start" alt="Aquakart Logo" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div className="text-left mb-4">
                  <img src={AQ} alt="Aquakart-logo" height="100" />
                </div>
                <div className="container-fluid">
                  <h5>Sign into your account</h5>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
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

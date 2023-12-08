import { Formik } from "formik";
import { connect } from "react-redux";
import swal from "sweetalert";
import { loginUser } from "../../redux/action/auth";
import { siginSchema } from "./Schema";
const SignIn = ({ onClick, onClick1, loginUser, errorMsg }) => {
  const msg = () => {
    swal({
      title: !errorMsg.auth ? "error" : "success",
      text: errorMsg.msg,
      icon: !errorMsg.auth ? "error" : "success",
      buttons: {
        confirm: {
          text: !errorMsg.auth ? "Try Again" : "Login success",
          closeModal: true,
        },
      },
    }).then();
  };
  return (
    <div
      id="sign-in"
      className="auth-form tab-pane fade show active form-validation"
    >
      {errorMsg && msg()}
      <Formik
        initialValues={{ password: "user123", email: "user@user.com" }}
        validationSchema={siginSchema}
        onSubmit={(values, { setSubmitting }) => {
          loginUser(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            id="dz_login_signup_form"
            className="form-validate"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center mb-4 text-black">
              Sign in your account
            </h3>
            <div className="form-group">
              <label className="mb-1 text-black" htmlFor="val-email">
                <strong>Email</strong>
              </label>
              <div>
                <input
                  type="email"
                  className="form-control"
                  id="val-email"
                  name="email"
                  placeholder="hello@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div
                  id="val-username1-error"
                  className="invalid-feedback animated fadeInUp"
                  style={{ display: "block" }}
                >
                  {errors.email && errors.email}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="mb-1 text-black" htmlFor="val-password">
                <strong>Password</strong>
              </label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  id="val-password"
                  name="password"
                  defaultValue="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div
                  id="val-username1-error"
                  className="invalid-feedback animated fadeInUp"
                  style={{ display: "block" }}
                >
                  {errors.password && errors.password}
                </div>
              </div>
            </div>
            <div className="form-row d-flex justify-content-between mt-4 mb-2">
              <div className="form-group">
                <div className="custom-control custom-checkbox ml-1">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="basic_checkbox_1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="basic_checkbox_1"
                  >
                    Remember my preference
                  </label>
                </div>
              </div>
              <div className="form-group">
                <a
                  onClick={() => onClick()}
                  className="c-pointer"
                  data-toggle="tab"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div
              className="form-group text-center mt-4"
              disabled={isSubmitting}
            >
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="dz-signup-submit"
              >
                Sign In
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className="new-account mt-3">
        <p>
          Don't have an account?{" "}
          <a
            className="text-primary"
            href="#"
            data-toggle="tab"
            onClick={() => onClick1()}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  errorMsg: state.auth.authErrors,
});

export default connect(mapStateToProps, { loginUser })(SignIn);

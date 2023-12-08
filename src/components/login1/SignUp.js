import { Formik } from "formik";
import { connect } from "react-redux";
import swal from "sweetalert";
import { registerUser } from "../../redux/action/auth";
import { sigupSchema } from "./Schema";
const SignUp = ({ onClick, registerUser, errorMsg }) => {
  const msg = () => {
    swal({
      title: errorMsg && !errorMsg.auth ? "error" : "success",
      text: errorMsg && errorMsg.errorMessage,
      icon: errorMsg && !errorMsg.auth ? "error" : "success",
      buttons: {
        confirm: {
          text: errorMsg && !errorMsg.auth ? "Try Again" : "Signup success",
          closeModal: true,
        },
      },
    }).then();
  };
  return (
    <div
      id="sign-up"
      className="auth-form tab-pane fade show active  form-validation"
    >
      {errorMsg && msg()}
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        validationSchema={sigupSchema}
        onSubmit={(values, { setSubmitting }) => {
          registerUser(values);
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
              Sign up your account
            </h3>
            <div className="form-group">
              <label className="mb-1 text-black" htmlFor="val-username">
                <strong>Username</strong>
              </label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="val-username1"
                  placeholder="Enter a username.."
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <div
                  id="val-username1-error"
                  className="invalid-feedback animated fadeInUp"
                  style={{ display: "block" }}
                >
                  {errors.username && errors.username}
                </div>
              </div>
            </div>
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
            <div
              className="form-group text-center mt-4"
              disabled={isSubmitting}
            >
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="dz-signup-submit"
              >
                Sign up
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className="new-account mt-3">
        <p>
          Already have an account?{" "}
          <a
            className="text-primary"
            href="#"
            data-toggle="tab"
            onClick={() => onClick()}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.auth.authErrors,
});

export default connect(mapStateToProps, { registerUser })(SignUp);

import { Formik } from "formik";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { forgetPasswordSchema } from "./Schema";
const ForgetPassword = () => {
  const [error, setError] = useState("");
  return (
    <div
      id="forgot-password"
      className="auth-form tab-pane fade show active form-validation"
    >
      {error && (
        <div class={`alert alert-${error.error ? "danger" : "success"}`}>
          {error.msg}
        </div>
      )}
      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgetPasswordSchema}
        onSubmit={(values, { setSubmitting }) => {
          auth
            .sendPasswordResetEmail(values.email)
            .then(() => {
              setError({
                msg: "Sent forget password link check your mail .",
                error: false,
              });
            })
            .catch((error) => {
              setError({ msg: error.message, error: true });
            });
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
            <h3 className="text-center mb-4 text-black">Forgot Password</h3>
            <div className="form-group">
              <label className="mb-1 " htmlFor="val-email">
                <strong>Enter Email</strong>
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
            <div
              className="form-group text-center mt-4"
              disabled={isSubmitting}
            >
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="dz-signup-submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}
      </Formik>{" "}
    </div>
  );
};

export default ForgetPassword;

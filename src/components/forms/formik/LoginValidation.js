import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const LoginValidation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Your username must consist of at least 3 characters ")
      .max(50, "Your username must consist of at least 3 characters ")
      .required("Please enter a username"),
    password: Yup.string()
      .min(5, "Your password must be at least 5 characters long")
      .max(50, "Your password must be at least 5 characters long")
      .required("Please provide a password"),
  });
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        <form onSubmit={handleSubmit}>
          <div
            className={`form-group ${
              values.username
                ? errors.username
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
          >
            <label className="text-label">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user" />{" "}
                </span>
              </div>
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

              <div
                id="val-username1-error"
                className="invalid-feedback animated fadeInUp"
                style={{ display: "block" }}
              />
            </div>
          </div>
          <div
            className={`form-group ${
              values.password
                ? errors.password
                  ? "is-invalid"
                  : "is-valid"
                : ""
            }`}
          >
            <label className="text-label">Password *</label>
            <div className="input-group transparent-append">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock" />{" "}
                </span>
              </div>
              <input
                type={`${showPassword ? "text" : "password"}`}
                className="form-control"
                id="val-password1"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Choose a safe one.."
              />

              <div
                className="input-group-append show-pass"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-eye-slash" />
                </span>
              </div>
              <div
                id="val-username1-error"
                className="invalid-feedback animated fadeInUp"
                style={{ display: "block" }}
              >
                {errors.password && errors.password}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                id="checkbox1"
                className="form-check-input"
                type="checkbox"
              />
              <label htmlFor="checkbox1" className="form-check-label">
                Check me out
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn mr-2 btn-primary"
            disabled={isSubmitting}
          >
            Submit
          </button>
          <button type="submit" className="btn btn-light">
            cencel
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginValidation;

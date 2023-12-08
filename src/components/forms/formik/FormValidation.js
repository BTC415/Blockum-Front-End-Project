import { Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const FormValidation = () => {
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Your username must consist of at least 3 characters ")
      .max(50, "Your username must consist of at least 3 characters ")
      .required("Please enter a username"),
    email: Yup.string().email().required("Please enter a email"),
    password: Yup.string()
      .min(5, "Your password must be at least 5 characters long")
      .max(50, "Your password must be at least 5 characters long")
      .required("Please provide a password"),
    suggestions: Yup.string()
      .required("What can we do to become better?")
      .min(5, "What can we do to become better?"),
    skill: Yup.string().required("Please select a skill!"),
    currency: Yup.number("What can we do to become better?")
      .typeError("Please enter a price!")
      .required("Please enter a price!"),
    website: Yup.string().url().required("Please enter your website!"),
    phoneus: Yup.number()
      .typeError("Please enter a US phone!")
      .required("Please enter a US phone!"),
    digits: Yup.number()
      .typeError("Please enter only digits!")
      .required("Please enter only digits!")
      .min(7),
    number: Yup.number()
      .typeError("Please enter a number!")
      .required("Please enter a number!"),
    range: Yup.string()
      .typeError("Please enter a number between 1 and 5!")
      .matches(/^[0-5]+$/, "Please enter a number between 1 and 5!")
      .required("Please enter a number between 1 and 5!"),
    terms: Yup.string().required("You must agree to the service terms!"),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        suggestions: "",
        skill: "",
        currency: "",
        website: "",
        phoneus: "",
        digits: "",
        number: "",
        range: "",
        terms: "",
      }}
      validationSchema={formSchema}
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
        <form
          className="form-valide"
          action="#"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-xl-6">
              <div className="form-group row">
                <label
                  className="col-lg-4 col-form-label"
                  htmlFor="val-username"
                >
                  Username
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-username"
                    name="username"
                    placeholder="Enter a username.."
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
              <div className="form-group row">
                <label className="col-lg-4 col-form-label" htmlFor="val-email">
                  Email <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-email"
                    name="email"
                    placeholder="Your valid email.."
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
              <div className="form-group row">
                <label
                  className="col-lg-4 col-form-label"
                  htmlFor="val-password"
                >
                  Password
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="password"
                    className="form-control"
                    id="val-password"
                    name="password"
                    placeholder="Choose a safe one.."
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

              <div className="form-group row">
                <label
                  className="col-lg-4 col-form-label"
                  htmlFor="val-suggestions"
                >
                  Suggestions <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <textarea
                    className="form-control"
                    id="val-suggestions"
                    name="suggestions"
                    rows="5"
                    placeholder="What would you like to see?"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.suggestions}
                  ></textarea>
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.suggestions && errors.suggestions}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="form-group row">
                <label className="col-lg-4 col-form-label" htmlFor="val-skill">
                  Best Skill
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <select
                    className="form-control"
                    id="val-skill"
                    name="skill"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.skill}
                    defaultValue={"option"}
                  >
                    <option value="">Please select</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="angular">Angular</option>
                    <option value="angular">React</option>
                    <option value="vuejs">Vue.js</option>
                    <option value="ruby">Ruby</option>
                    <option value="php">PHP</option>
                    <option value="asp">ASP.NET</option>
                    <option value="python">Python</option>
                    <option value="mysql">MySQL</option>
                  </select>
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.skill && errors.skill}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-lg-4 col-form-label"
                  htmlFor="val-currency"
                >
                  Currency
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-currency"
                    name="currency"
                    placeholder="$21.60"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.currency}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.currency && errors.currency}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-lg-4 col-form-label"
                  htmlFor="val-website"
                >
                  Website
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-website"
                    name="website"
                    placeholder="http://example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.website && errors.website}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-lg-4 col-form-label"
                  htmlFor="val-phoneus"
                >
                  Phone (US)
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-phoneus"
                    name="phoneus"
                    placeholder="212-999-0000"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneus}
                  />
                  <div
                    id="val-phoneus-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.phoneus && errors.phoneus}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-4 col-form-label" htmlFor="val-digits">
                  Digits <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-digits"
                    name="digits"
                    placeholder="5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.digits}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.digits && errors.digits}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-4 col-form-label" htmlFor="val-number">
                  Number <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-number"
                    name="number"
                    placeholder="5.0"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.number && errors.number}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-4 col-form-label" htmlFor="val-range">
                  Range [1, 5]
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="val-range"
                    name="range"
                    placeholder="4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.range}
                  />
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.range && errors.range}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-4 col-form-label">
                  <Link href="">
                    <a>Terms &amp; Conditions</a>
                  </Link>{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="col-lg-8">
                  <label
                    className="css-control css-control-primary css-checkbox"
                    htmlFor="val-terms"
                  >
                    <input
                      type="checkbox"
                      className="css-control-input mr-2"
                      id="val-terms"
                      defaultValue={1}
                      name="terms"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.terms}
                    />
                    <span className="css-control-indicator" /> I agree to the
                    terms
                  </label>
                  <div
                    id="val-username1-error"
                    className="invalid-feedback animated fadeInUp"
                    style={{ display: "block" }}
                  >
                    {errors.terms && errors.terms}
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-8 ml-auto">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormValidation;

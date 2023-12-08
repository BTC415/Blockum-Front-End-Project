import { useState } from "react";
import { auth } from "../../src/firebaseConfig";
import AuthLayout from "../../src/layouts/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => setEmail(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          setError({
            msg: "Sent forget password link check your mail .",
            error: false,
          });
        })
        .catch((error) => {
          setError({ msg: error.message, error: true });
        });
    }
  };
  return (
    <AuthLayout>
      {error && (
        <div class={`alert alert-${error.error ? "danger" : "success"}`}>
          {error.msg}
        </div>
      )}
      <h4 className="text-center mb-4">Forgot Password</h4>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label>
            <strong>Email</strong>
          </label>
          <input
            type="email"
            className="form-control"
            defaultValue="hello@example.com"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block">
            SUBMIT
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;

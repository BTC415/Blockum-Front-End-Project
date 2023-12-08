import Link from "next/link";
import { useState } from "react";
import { connect } from "react-redux";
import AuthLayout from "../../src/layouts/AuthLayout";
import { registerUser } from "../../src/redux/action/auth";

const Register = ({ registerUser, errorMsg }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = userInfo;
  const onChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email && password && password) {
      registerUser(userInfo);
    }
  };
  return (
    <AuthLayout>
      {errorMsg && (
        <div className={`alert alert-${errorMsg.auth ? "success" : "danger"}`}>
          {errorMsg.msg}
        </div>
      )}
      <h4 className="text-center mb-4">Sign up your account</h4>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label className="mb-1">
            <strong>Username</strong>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label className="mb-1">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="hello@example.com"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label className="mb-1">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            defaultValue="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary btn-block">
            Sign me up
          </button>
        </div>
      </form>

      <div className="new-account mt-3">
        <p>
          Already have an account?{" "}
          <Link href="/pages/login2">
            <a className="text-primary">Sign in</a>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

const mapStateToProps = (state) => ({
  errorMsg: state.auth.authErrors,
});

export default connect(mapStateToProps, { registerUser })(Register);

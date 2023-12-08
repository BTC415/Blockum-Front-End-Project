import Router from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ForgetPassword from "../../src/components/login1/ForgetPassword";
import SignIn from "../../src/components/login1/SignIn";
import SignUp from "../../src/components/login1/SignUp";
import { getUser } from "../../src/redux/action/auth";

const Login1 = ({ getUser, users }) => {
  useEffect(() => {
    getUser();
  }, []);
  if (users) {
    Router.push("/dashboard");
  }

  const [active, setActive] = useState(2);
  return (
    <div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="login-aside text-center  d-flex flex-column flex-row-auto">
        <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <div className="text-center mb-4 pt-5">
            <img src="/images/logo-full.png" alt="" />
          </div>
          <h3 className="mb-2">Welcome back!</h3>
          <p>
            User Experience &amp; Interface Design <br />
            Strategy SaaS Solutions
          </p>
        </div>
        <div
          className="aside-image"
          style={{ backgroundImage: "url(/images/background/pic1.svg)" }}
        />
      </div>
      <div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div className="authincation-content style-2">
            <div className="row no-gutters">
              <div className="col-xl-12 tab-content">
                {active === 1 && <SignUp onClick={() => setActive(2)} />}
                {active === 2 && (
                  <SignIn
                    onClick={() => setActive(3)}
                    onClick1={() => setActive(1)}
                  />
                )}
                {active === 3 && <ForgetPassword />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
});

export default connect(mapStateToProps, { getUser })(Login1);

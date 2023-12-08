import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/action/auth";

const AuthLayout = ({ children, users, getUser }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("vh-100");
    getUser();
  }, []);
  if (users) {
    Router.push("/");
  }
  return (
    <div className="authincation h-100">
      <div className="container vh-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link href="/">
                        <a>
                          <img src="/images/logo-full.png" alt="" />
                        </a>
                      </Link>
                    </div>
                    {children}
                  </div>
                </div>
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

export default connect(mapStateToProps, { getUser })(AuthLayout);

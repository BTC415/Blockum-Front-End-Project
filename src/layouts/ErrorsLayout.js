import Link from "next/link";
import { useEffect } from "react";
import Demos from "./Demos";
import Settings from "./Settings";

const ErrorsLayout = ({ children }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("vh-100");
  }, []);
  return (
    <div className="authincation h-100">
      <div className="container vh-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-5">
            <div className="form-input-content text-center error-page">
              {children}
              <div>
                <Link href="/">
                  <a className="btn btn-primary">Back to Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="main-wrapper" className="d-none" />
      <div id="preloader" className="d-none" /> */}
      <Demos />
      <Settings />
    </div>
  );
};

export default ErrorsLayout;

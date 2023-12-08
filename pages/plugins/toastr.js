import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle_ from "../../src/components/PageTitle";
import {
  notifyBottomCenter,
  notifyBottomFullWidth,
  notifyBottomLeft,
  notifyBottomRight,
  notifyError,
  notifyInfo,
  notifyTopCenter,
  notifyTopFullWidth,
  notifyTopLeft,
  notifyTopRight,
  notifyWarning,
} from "../../src/components/plugins/ToasterData";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const Toastr = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Toastr");
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="Toastr" mother="Advanced" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Toastr</h4>
            </div>
            <div className="card-body">
              <button
                onClick={notifyTopRight}
                type="button"
                className="btn btn-dark mb-2 mr-2"
                id="toastr-success-top-right"
              >
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Top Right
              </button>
              <button
                onClick={notifyBottomRight}
                type="button"
                className="btn btn-dark mb-2  mr-2"
                id="toastr-success-bottom-right"
              >
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Bottom Right
              </button>
              <button
                onClick={notifyBottomLeft}
                type="button"
                className="btn btn-dark mb-2  mr-2"
                id="toastr-success-bottom-left"
              >
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Bottom Left
              </button>
              <button
                onClick={notifyTopLeft}
                type="button"
                className="btn btn-dark mb-2  mr-2"
                id="toastr-success-top-left"
              >
                <ToastContainer
                  position="top-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Top Left
              </button>
              <button
                onClick={notifyTopFullWidth}
                type="button"
                className="btn btn-dark mb-2  mr-2"
                id="toastr-success-top-full-width"
              >
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Top Full Width
              </button>
              <button
                onClick={notifyBottomFullWidth}
                type="button"
                className="btn btn-dark mb-2  mr-2"
                id="toastr-success-bottom-full-width"
              >
                <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Bottom Full Width
              </button>
              <button
                onClick={notifyTopCenter}
                type="button"
                className="btn btn-dark mb-2  mr-2"
                id="toastr-success-top-center"
              >
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Top Center
              </button>
              <button
                onClick={notifyBottomCenter}
                type="button"
                className="btn btn-dark mb-2  mr-2"
                id="toastr-success-bottom-center"
              >
                <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Bottom Center
              </button>
              <button
                onClick={notifyInfo}
                type="button"
                className="btn btn-info mb-2  mr-2"
                id="toastr-info-top-right"
              >
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Info
              </button>
              <button
                onClick={notifyWarning}
                type="button"
                className="btn btn-warning mb-2  mr-2"
                id="toastr-warning-top-right"
              >
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Warning
              </button>
              <button
                onClick={notifyError}
                type="button"
                className="btn btn-danger mb-2  mr-2"
                id="toastr-danger-top-right"
              >
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                Error
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Toastr);

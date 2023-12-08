import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import swal from "sweetalert";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const Sweetalert = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Sweetalert");
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="Sweetalert" mother="Components" customText={true} />
      <div className="row">
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Wrong</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal("Oops", "Something went wrong!", "error")
                    }
                    className="btn btn-danger btn sweet-wrong"
                  >
                    Sweet Wrong
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Message</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Hey, Here's a message !!                      ",
                      })
                    }
                    className="btn btn-info btn sweet-message"
                  >
                    Sweet Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Text</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Hey, Here's a message !!",
                        text: "It's pretty, isn't it?",
                      })
                    }
                    className="btn btn-primary btn sweet-text"
                  >
                    Sweet Text
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Success</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal("Good job!", "You clicked the button!", "success")
                    }
                    className="btn btn-success btn sweet-success"
                  >
                    Sweet Success
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Confirm</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your imaginary file is safe!");
                        }
                      })
                    }
                    className="btn btn-warning btn sweet-confirm"
                  >
                    Sweet Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Confirm Or Cancel</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your imaginary file is safe!");
                        }
                      })
                    }
                    className="btn btn-warning btn sweet-success-cancel"
                  >
                    Sweet Confirm Or Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Image Message</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Sweet !!",
                        text: "Hey, Here's a custom image !!",
                      })
                    }
                    className="btn btn-info btn sweet-image-message"
                  >
                    Sweet Image Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet HTML</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Sweet !!",
                        text: "true",
                      })
                    }
                    className="btn btn-primary btn sweet-html"
                  >
                    Sweet HTML
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Auto Close</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Sweet auto close alert !!",
                        text: "Hey, i will close in 2 seconds !!",
                        timer: 2e3,
                        showConfirmButton: !1,
                      })
                    }
                    className="btn btn-danger btn sweet-auto"
                  >
                    Sweet Auto Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Prompt</h4>
              <div className="card-content">
                <div className="sweetalert mt-5">
                  <button
                    onClick={() =>
                      swal({
                        title: "Enter an input !!",
                        text: "Write something interesting !!",
                        buttons: true,
                      })
                    }
                    className="btn btn-success btn sweet-prompt"
                  >
                    Sweet Prompt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sweet Ajax</h4>
              <div className="card-content"></div>
              <div className="sweetalert mt-4">
                <button
                  onClick={() =>
                    swal({
                      title: "Sweet ajax request !!                        ",
                      text: "Submit to run ajax request !!",
                      icon: "info",
                      buttons: true,
                    })
                  }
                  className="btn btn-info btn sweet-ajax"
                >
                  Sweet Ajax
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Sweetalert);

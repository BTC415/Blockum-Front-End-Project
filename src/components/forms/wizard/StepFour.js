import React from "react";

const StepFour = () => {
  return (
    <section>
      <div className="row emial-setup">
        <div className="col-lg-3 col-sm-6 col-6">
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="mailclient11"
              className="mailclinet mailclinet-gmail"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#EEF5F9",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <input
                type="radio"
                className="redio-false"
                name="emailclient"
                id="mailclient11"
                style={{ display: "none" }}
              />
              <span
                className="mail-icon"
                style={{
                  fontSize: "3rem",
                  display: "inline-block",
                  lineHeight: "1",
                  marginTop: "-1rem",
                }}
              >
                <i className="mdi mdi-google-plus" aria-hidden="true"></i>
              </span>
              <span
                className="mail-text"
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: ".5rem",
                }}
              >
                I'm using Gmail
              </span>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <div className="form-group">
            <label
              htmlFor="mailclient11"
              className="mailclinet mailclinet-gmail"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#EEF5F9",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <input
                type="radio"
                className="redio-false"
                name="emailclient"
                id="mailclient11"
                style={{ display: "none" }}
              />
              <span
                className="mail-icon"
                style={{
                  fontSize: "3rem",
                  display: "inline-block",
                  lineHeight: "1",
                  marginTop: "-1rem",
                }}
              >
                <i className="mdi mdi-office" aria-hidden="true"></i>
              </span>
              <span
                className="mail-text"
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: ".5rem",
                }}
              >
                I'm using Office
              </span>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <div className="form-group">
            <label
              htmlFor="mailclient11"
              className="mailclinet mailclinet-gmail"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#EEF5F9",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <input
                type="radio"
                className="redio-false"
                name="emailclient"
                id="mailclient11"
                style={{ display: "none" }}
              />
              <span
                className="mail-icon"
                style={{
                  fontSize: "3rem",
                  display: "inline-block",
                  lineHeight: "1",
                  marginTop: "-1rem",
                }}
              >
                <i className="mdi mdi-google-drive" aria-hidden="true"></i>
              </span>
              <span
                className="mail-text"
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: ".5rem",
                }}
              >
                I'm using Drive
              </span>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <div className="form-group">
            <label
              htmlFor="mailclient11"
              className="mailclinet mailclinet-gmail"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#EEF5F9",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <input
                type="radio"
                className="redio-false"
                name="emailclient"
                id="mailclient11"
                style={{ display: "none" }}
              />
              <span
                className="mail-icon"
                style={{
                  fontSize: "3rem",
                  display: "inline-block",
                  lineHeight: "1",
                  marginTop: "-1rem",
                }}
              >
                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
              </span>
              <span
                className="mail-text"
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: ".5rem",
                }}
              >
                Another Service
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="skip-email text-center pt-5 pb-2">
            <p>Or if want skip this step entirely and setup it later</p>
            <a href="#" className="wizard-four-color">
              Skip step
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepFour;

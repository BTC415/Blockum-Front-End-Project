import { Fragment, useEffect, useState } from "react";
import Multistep from "react-multistep";
import { connect, useSelector } from "react-redux";
import StepFour from "../../src/components/forms/wizard/StepFour";
import StepOne from "../../src/components/forms/wizard/StepOne";
import StepThree from "../../src/components/forms/wizard/StepThree";
import StepTwo from "../../src/components/forms/wizard/StepTwo";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const Wizard = ({ pageTitle }) => {
  const colors = [
    { "color-1": "#FF720D" },
    { "color-2": "#6610f2" },
    { "color-3": "#FF720D" },
    { "color-4": "#e83e8c" },
    { "color-5": "#FF720D" },
    { "color-6": "#FF720D" },
    { "color-7": "#FF720D" },
    { "color-8": "#FF720D" },
    { "color-9": "#FF720D" },
    { "color-10": "#FF720D" },
    { "color-11": "#FF720D" },
    { "color-12": "#FF720D" },
    { "color-13": "#FF720D" },
    { "color-14": "#FF720D" },
    { "color-15": "#FF720D" },
  ];
  const [bodyColor, setBodyColor] = useState(colors[0].value);
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Form Wizard");
    setBodyColor(document.querySelector("body").attributes["data-primary"]);
  }, []);
  const steps = [
    { name: "Personal Info", component: <StepOne /> },
    { name: "Company Info", component: <StepTwo /> },
    { name: "Business Hours", component: <StepThree /> },
    { name: "Email Setup", component: <StepFour /> },
  ];
  const prevStyle = {
    background: "#F7FAFC",
    borderWidth: "0px",
    color: "#333333",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    padding: "0.55em 2em",
    border: "1px solid #EEEEEE",
    marginRight: "1rem",
  };
  const nextStyle = {
    background: "#FF720D",
    borderWidth: "0px",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    padding: "0.55em 2em",
  };
  return (
    <Fragment>
      <PageTitle_ active="Component" mother="Home" customText={true} />

      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Form step</h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="step-form-horizontal"
                className="step-form-horizontal"
              >
                <Multistep
                  showNavigation={true}
                  steps={steps}
                  prevStyle={prevStyle}
                  nextStyle={nextStyle}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Wizard);

import { Fragment, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import FormValidation from "../../src/components/forms/formik/FormValidation";
import LoginValidation from "../../src/components/forms/formik/LoginValidation";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const Validation = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Form Validat");
  }, []);
  return (
    <Fragment>
      <PageTitle_ active="Validation" mother="Form" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Form Validation</h4>
            </div>
            <div className="card-body">
              <div className="form-validation">
                <FormValidation />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Vertical Forms with icon</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <LoginValidation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Validation);

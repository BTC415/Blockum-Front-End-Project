import React from "react";
import ErrorsLayout from "../../../src/layouts/ErrorsLayout";

const Erorr403 = () => {
  return (
    <ErrorsLayout>
      <div>
        <h1 className="error-text  font-weight-bold">403</h1>
        <h4>
          <i className="fa fa-times-circle text-danger" /> Forbidden Error!
        </h4>
        <p>You do not have permission to view this resource.</p>
      </div>
    </ErrorsLayout>
  );
};

export default Erorr403;

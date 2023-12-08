import React from "react";
import ErrorsLayout from "../../../src/layouts/ErrorsLayout";

const Erorr500 = () => {
  return (
    <ErrorsLayout>
      <div>
        <h1 className="error-text  font-weight-bold">500</h1>
        <h4>
          <i className="fa fa-times-circle text-danger" /> Internal Server Error
        </h4>
        <p>You do not have permission to view this resource</p>
      </div>
    </ErrorsLayout>
  );
};

export default Erorr500;

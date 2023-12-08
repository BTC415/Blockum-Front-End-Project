import React from "react";
import ErrorsLayout from "../../../src/layouts/ErrorsLayout";

const Erorr503 = () => {
  return (
    <ErrorsLayout>
      <div>
        <h1 className="error-text  font-weight-bold">503</h1>
        <h4>
          <i className="fa fa-times-circle text-danger" /> Service Unavailable
        </h4>
        <p>Sorry, we are under maintenance!</p>
      </div>
    </ErrorsLayout>
  );
};

export default Erorr503;

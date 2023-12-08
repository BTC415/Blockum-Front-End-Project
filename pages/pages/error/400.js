import React from "react";
import ErrorsLayout from "../../../src/layouts/ErrorsLayout";

const Erorr404 = () => {
  return (
    <ErrorsLayout>
      <h1 className="error-text font-weight-bold">400</h1>
      <h4>
        <i className="fa fa-thumbs-down text-danger" /> Bad Request
      </h4>
      <p>Your Request resulted in an error</p>
    </ErrorsLayout>
  );
};

export default Erorr404;

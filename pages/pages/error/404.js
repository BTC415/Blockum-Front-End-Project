import React from "react";
import ErrorsLayout from "../../../src/layouts/ErrorsLayout";

const Erorr404 = () => {
  return (
    <ErrorsLayout>
      <div>
        <h1 className="error-text  font-weight-bold">404</h1>
        <h4>
          <i className="fa fa-exclamation-triangle text-warning" /> The page you
          were looking for is not found!
        </h4>
        <p>You may have mistyped the address or the page may have moved.</p>
      </div>
    </ErrorsLayout>
  );
};

export default Erorr404;

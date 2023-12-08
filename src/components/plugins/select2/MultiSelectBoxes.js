import React from "react";
import MultipulSelect from "./MultipulSelect";

const MultiSelectBoxes = () => {
  return (
    <div class="col-xl-6">
      <div class="card">
        <div class="card-body">
          <div class="mb-4">
            <h4 class="card-title">Multi-select boxes</h4>
            <p>
              Select2 also supports multi-value select boxes. The select below
              is declared with the multiple{" "}
              <mark class="text-primary">attribute</mark>.
            </p>
          </div>
          <MultipulSelect />
        </div>
      </div>
    </div>
  );
};

export default MultiSelectBoxes;

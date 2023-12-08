import { useState } from "react";
import SingleSelect from "./SingleSelect";
const SingleSelectBoxes = () => {
  const [selectOption, setSelectOption] = useState(null);
  const options = [
    { value: "Alabama", label: "Alabama" },
    { value: "Wyoming", label: "Wyoming" },
  ];

  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Single select boxes</h4>
            <p>Select2 can take a regular select box like this...</p>
          </div>
          <SingleSelect />
        </div>
      </div>
    </div>
  );
};

export default SingleSelectBoxes;

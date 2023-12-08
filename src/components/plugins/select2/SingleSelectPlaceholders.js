import { useState } from "react";
import Select from "react-select";
const SingleSelectPlaceholders = () => {
  const [selectOption, setSelectOption] = useState({
    value: "Alabama",
    label: "Alabama",
  });
  const options = [
    { value: "Alabama", label: "Alabama" },
    { value: "Wyoming", label: "Wyoming" },
  ];
  return (
    <div className="col-xl-4">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Single select placeholders</h4>
            <p>
              Select2 supports displaying a placeholder value using the
              <code>placeholder</code> configuration option. The placeholder
              value will be displayed until a selection is made.
            </p>
          </div>
          <Select
            defaultValue={selectOption}
            onChange={setSelectOption}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleSelectPlaceholders;

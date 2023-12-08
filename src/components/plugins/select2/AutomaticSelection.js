import { useState } from "react";
import Select from "react-select";
const AutomaticSelection = () => {
  const [selectOption, setSelectOption] = useState({
    value: "Alabama",
    label: "Alabama",
  });
  const options = [
    { value: "Alabama", label: "Alabama" },
    { value: "Wyoming", label: "Wyoming" },
  ];
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Automatic Selection</h4>
            <p>
              Select2 can be configured to automatically select the currently
              highlighted result when the dropdown is closed by using the{" "}
              <code>selectOnClose</code> option:
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

export default AutomaticSelection;

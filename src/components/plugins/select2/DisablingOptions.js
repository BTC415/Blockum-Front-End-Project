import { useState } from "react";
import Select from "react-select";
import { colourOptions } from "./data";
const DisableingOption = () => {
  const [selectOption, setSelectOption] = useState(null);

  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <div>
              <h4 className="card-title">Disabling options</h4>
              <p>
                Select2 will correctly handle disabled options when{" "}
                <code>disabled</code> attribute is set) and from remote srouces
                where the object has <code>disabled: true</code> set.
              </p>
            </div>
          </div>
          <Select
            defaultValue={selectOption}
            onChange={setSelectOption}
            options={colourOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default DisableingOption;

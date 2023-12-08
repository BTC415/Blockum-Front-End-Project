import React from "react";
import Select, { components } from "react-select";
import { colourOptions } from "./data";

const DropdownIndicator = (props) => {
  return <components.DropdownIndicator {...props} />;
};

const FixedOptions = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Fixed Option</h4>
            <p>
              Tagging can also be used in multi-value select boxes. In the
              example below, we set the <code>multiple="multiple"</code>{" "}
              attribute on a Select2 control that also has{" "}
              <code>tags: true</code> enabled:
            </p>
          </div>
          <Select
            closeMenuOnSelect={true}
            components={{ DropdownIndicator }}
            defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={colourOptions}
            styles={{
              multiValueRemove: (base) => ({
                ...base,
                cursor: "pointer",
              }),
              clearIndicator: (base) => ({
                ...base,
                display: "none",
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FixedOptions;

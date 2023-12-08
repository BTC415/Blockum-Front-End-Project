import { useState } from "react";
import { components } from "react-select";
import MultipulSelect from "./MultipulSelect";
import SingleSelect from "./SingleSelect";

const DropdownIndicator = (props) => {
  return <components.DropdownIndicator {...props} />;
};
const DisablingASelect2Control = () => {
  const [selectOption, setSelectOption] = useState(null);
  const [disable, setDisable] = useState(false);
  const options = [
    { value: "Alabama", label: "Alabama" },
    { value: "Wyoming", label: "Wyoming" },
  ];
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Disabling a Select2 control</h4>
            <p>
              Select2 will respond to the <code>disabled</code> attribute on
              <code>&lt;select&gt;</code> elements. You can also initialize
              Select2 with
              <code>disabled: true</code> to get the same effect.
            </p>
          </div>
          <div className="mb-3">
            <SingleSelect disable={disable} />
          </div>
          <div className="mb-3">
            <MultipulSelect disable={disable} />
          </div>
          <button
            className="btn btn-primary mr-2"
            id="js-programmatic-enable"
            onClick={() => setDisable(false)}
          >
            Enable
          </button>
          <button
            className="btn btn-primary"
            id="js-programmatic-disable"
            onClick={() => setDisable(true)}
          >
            Disable
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisablingASelect2Control;

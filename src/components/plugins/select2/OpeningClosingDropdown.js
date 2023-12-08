import { useState } from "react";
import Select from "react-select";
const OpeningClosingDropdown = () => {
  const [selectOption, setSelectOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: "Alabama", label: "Alabama" },
    { value: "Wyoming", label: "Wyoming" },
  ];
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Opening/Closing the dropdown</h4>
            <p>
              Select2 will trigger a few different events when different actions
              are taken using the component, allowing you to add custom hooks
              and perform actions.
            </p>
          </div>
          <button
            id="opening-dropdown-trigger"
            className="btn btn-primary mb-2 mr-1"
            onClick={() => setIsOpen(true)}
          >
            Open Dropdown
          </button>
          <button
            onClick={() => setIsOpen(false)}
            id="closing-dropdown-trigger"
            className="btn btn-primary mb-2"
          >
            Close Dropdown
          </button>
          <div className="mt-4">
            <Select
              defaultValue={selectOption}
              onChange={setSelectOption}
              options={options}
              menuIsOpen={isOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningClosingDropdown;

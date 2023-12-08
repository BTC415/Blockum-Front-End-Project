import { useState } from "react";
import Select from "react-select";
const OpeningTheDropdown = () => {
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
            <h4 className="card-title">Opening the dropdown</h4>
            <p>
              Select2 will trigger a few different events when different actions
              are taken using the component, allowing you to add custom hooks
              and perform actions.
            </p>
          </div>
          <button
            id="dropdown-trigger-open"
            className="btn btn-primary mb-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Open"} Dropdown
          </button>

          <Select
            defaultValue={selectOption}
            onChange={setSelectOption}
            options={options}
            menuIsOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default OpeningTheDropdown;

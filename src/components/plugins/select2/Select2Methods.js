import { useState } from "react";
import Select from "react-select";
const Select2Methods = () => {
  const [selectOption, setSelectOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDistory, setIsDistory] = useState(false);
  const [isValue, setIsValue] = useState(null);
  const options = [
    { value: "California", label: "California" },
    { value: "Alabama", label: "Alabama" },
    { value: "Wyoming", label: "Wyoming" },
  ];
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Select2 methods</h4>
            <p>
              Select2 has several built-in methods that allow programmatic
              control of the component.{" "}
            </p>
          </div>
          <label className="select2-label">Single select</label> <br />
          <button
            className="js-programmatic-set-val btn btn-primary mb-2 mr-1"
            aria-label="Set Select2 option"
            onClick={() => setSelectOption(options[0])}
          >
            Set "California"
          </button>
          <button
            className="js-programmatic-open btn btn-primary mb-2 mr-1"
            onClick={() => setIsOpen(true)}
          >
            Open
          </button>
          <button
            className="js-programmatic-close btn btn-primary mb-2 mr-1"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <button
            className="js-programmatic-destroy btn btn-primary mr-1 mb-2"
            onClick={() => setIsDistory(true)}
          >
            Destroy
          </button>
          <button
            className="js-programmatic-init btn btn-primary mb-2 mr-1"
            onClick={() => setIsDistory(false)}
          >
            Re-initialize
          </button>
          <div className="mt-4">
            {isDistory ? (
              <select className="single-event-unbind">
                <option value="AL">Alaska</option>
                <option value="HA">Hawaii</option>
                <option value="CA">California</option>
              </select>
            ) : (
              <Select
                defaultValue={selectOption}
                onChange={setSelectOption}
                options={options}
                menuIsOpen={isOpen}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select2Methods;

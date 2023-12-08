import React from "react";
import { components } from "react-select";
import Creatable from "react-select/creatable";
import { colourOptions } from "./data";

const Menu = (props) => {
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {optionSelectedLength < 2 ? (
        props.children
      ) : (
        <div style={{ padding: "6px" }}>You can only select 2 items</div>
      )}
    </components.Menu>
  );
};

const LimitingTheNumberOfSelections = () => {
  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 5;
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Limiting the number of selections</h4>
            <p>
              Select2 multi-value select boxes can set restrictions regarding
              the maximum number of options that can be selected. The select
              below is declared with the
              <code>multiple</code> attribute with{" "}
              <code>maximumSelectionLength</code> in the select2 options.
            </p>
          </div>
          <Creatable
            components={{ Menu }}
            isMulti
            isValidNewOption={isValidNewOption}
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

export default LimitingTheNumberOfSelections;

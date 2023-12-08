import React from "react";
import Select, { components } from "react-select";
import { colourOptions } from "./data";

const DropdownIndicator = (props) => {
  return <components.DropdownIndicator {...props} />;
};

const MultipulSelect = ({ disable }) => {
  return (
    <Select
      closeMenuOnSelect={true}
      components={{ DropdownIndicator }}
      defaultValue={[]}
      isMulti
      options={colourOptions}
      isDisabled={disable ? disable : false}
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
  );
};

export default MultipulSelect;

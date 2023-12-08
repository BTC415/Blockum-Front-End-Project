import React from "react";
import Select from "react-select";
import { colourOptions, groupedOptions } from "./data";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const DropdownOptionGroups = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Dropdown option groups</h4>
            <p>
              In HTML, <code>&lt;option&gt;</code> elements can be grouped by
              wrapping them with in <br /> an <code>&lt;optgroup&gt;</code>{" "}
              element:{" "}
            </p>
          </div>
          <Select
            defaultValue={colourOptions[1]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownOptionGroups;

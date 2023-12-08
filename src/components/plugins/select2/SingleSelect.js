import { useState } from "react";
import Select from "react-select";
const SingleSelect = ({ disable }) => {
  const [selectOption, setSelectOption] = useState(null);
  const options = [
    { value: "Alabama", label: "Alabama" },
    { value: "Wyoming", label: "Wyoming" },
  ];

  return (
    <Select
      defaultValue={selectOption}
      onChange={setSelectOption}
      options={options}
      isDisabled={disable ? disable : false}
    />
  );
};

export default SingleSelect;

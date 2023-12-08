import SingleSelect from "./SingleSelect";

const DropdownPlacement = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Dropdown placement</h4>
            <p>
              The <code>dropdownParent</code> option allows you to pick an
              alternative element for the dropdown to be appended to:
            </p>
          </div>
          <SingleSelect />
          <div id="select2-modal"></div>
        </div>
      </div>
    </div>
  );
};

export default DropdownPlacement;

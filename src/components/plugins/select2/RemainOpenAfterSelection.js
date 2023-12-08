import SingleSelect from "./SingleSelect";

const RemainOpenAfterSelection = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Remain open after selection</h4>
            <p>
              Select2 will automatically close the dropdown when an element is
              selected, similar to what is done with a normal select box. You
              may use the
              <code>closeOnSelect</code> option to prevent the dropdown from
              closing when a result is selected:
            </p>
          </div>
          <SingleSelect />
        </div>
      </div>
    </div>
  );
};

export default RemainOpenAfterSelection;

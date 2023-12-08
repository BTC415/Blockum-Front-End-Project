import MultipulSelect from "./MultipulSelect";
import SingleSelect from "./SingleSelect";

const Select2WithLabels = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Select2 With Labels</h4>
            <p>
              You can, and should, use a <code>&lt;label&gt;</code> with
              Select2, just like any other <code>&lt;select&gt;</code> element.
            </p>
          </div>
          <label className="mb-4 select2-label" htmlFor="id_label_single">
            Click this to highlight the single select element <br />
            <SingleSelect />
          </label>
          <label className="select2-label" htmlFor="id_label_multiple">
            Click this to highlight the multiple select element <br />
            <MultipulSelect />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Select2WithLabels;

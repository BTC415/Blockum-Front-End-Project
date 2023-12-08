import MultipulSelect from "./MultipulSelect";

const MultiSelectPlaceholders = () => {
  return (
    <div className="col-xl-4">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Multi-select placeholders</h4>
            <p>
              For multi-selects, you must <strong>not</strong> have an empty
              <code>&lt;option&gt;</code>element:
            </p>
          </div>
          <MultipulSelect />
        </div>
      </div>
    </div>
  );
};

export default MultiSelectPlaceholders;

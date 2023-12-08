import SingleSelect from "./SingleSelect";

const DefaultSelectionPlaceholders = () => {
  return (
    <div className="col-xl-4">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Default selection placeholders</h4>
            <p>
              Alternatively, the value of the <code>placeholder</code> option
              can be a data object representing a default selection (
              <code>&lt;option&gt;</code>). In this case the <code>id</code> of
              the data object should match the
              <code>value</code> of the corresponding default selection.
            </p>
          </div>
          <SingleSelect />
        </div>
      </div>
    </div>
  );
};

export default DefaultSelectionPlaceholders;

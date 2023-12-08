import SingleSelect from "./SingleSelect";

const LoadingArrayData = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Loading array data</h4>
            <p>
              You may use the <code>data</code> configuration option to load
              dropdown options from a local array.
            </p>
          </div>
          <SingleSelect />
        </div>
      </div>
    </div>
  );
};

export default LoadingArrayData;

import MultipulSelect from "./MultipulSelect";
import SingleSelect from "./SingleSelect";

const ContainerWidth = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Container Width</h4>
            <p>
              The two Select2 boxes below are styled to <code>50%</code> and{" "}
              <code>75%</code> width respectively to support responsive design:
            </p>
          </div>
          <div className="mb-3">
            <SingleSelect />
          </div>
          <div className="mb-3">
            <MultipulSelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWidth;

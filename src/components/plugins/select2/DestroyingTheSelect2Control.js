import { useState } from "react";
import SingleSelect from "./SingleSelect";

const DestroyingTheSelect2Control = () => {
  const [distory, setDistory] = useState(false);
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Destroying the Select2 control</h4>
            <p>
              The <code>destroy</code> method will remove the Select2 widget
              from the target element. It will revert back to a standard{" "}
              <code>select</code> control:
            </p>
          </div>
          <div className="mb-4">
            {distory ? (
              <select className="destroy-selector">
                <option value="Alaska">Alaska</option>
                <option value="Hawaii">Hawaii</option>
                <option value="California">California</option>
              </select>
            ) : (
              <SingleSelect />
            )}
          </div>
          <button
            id="destroy-selector-trigger"
            className="btn btn-primary"
            onClick={() => setDistory(true)}
          >
            Destroy Select2
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestroyingTheSelect2Control;

import SingleSelect from "./SingleSelect";

const DynamicOptionCreation = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Dynamic option creation</h4>
            <p>
              In addition to a prepopulated menu of options, Select2 can
              dynamically create new options from text input by the user in the
              search box. This feature is called "tagging". To enable tagging,
              set the <code>tags</code> option to
              <code>true</code>:
            </p>
          </div>
          <SingleSelect />
        </div>
      </div>
    </div>
  );
};

export default DynamicOptionCreation;

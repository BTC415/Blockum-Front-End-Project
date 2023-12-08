const Themes = () => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="mb-4">
            <h4 className="card-title">Themes</h4>
            <p>
              Select2 supports custom themes using the <code>theme</code> option
              so you can style Select2 to match the rest of your application.
            </p>
          </div>
          <div className="mb-4">
            <select className="js-example-theme-single">
              <option value="AL">Alabama</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className>
            <select
              className="js-example-theme-multiple"
              name="states[]"
              multiple="multiple"
            >
              <option value="AL">Alabama</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;

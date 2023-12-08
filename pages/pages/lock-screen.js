import AuthLayout from "../../src/layouts/AuthLayout";

const LockScreen = () => {
  return (
    <AuthLayout>
      <h4 className="text-center mb-4">Account Locked</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            defaultValue="Password"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block">
            Unlock
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LockScreen;

import EmailLeft from "./EmailLeft";
import ToolBar2 from "./ToolBar2";
import Toolber from "./Toolber";
const EmailLayout = ({ children, readToolbar }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <EmailLeft />
            <div className="email-right-box ml-0 ml-sm-4 ml-sm-0">
              {readToolbar ? <ToolBar2 /> : <Toolber />}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailLayout;

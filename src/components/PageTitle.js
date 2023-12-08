import Link from "next/link";
const PageTitle_ = ({ active, mother, customText }) => {
  return (
    <div className="row page-titles mx-0">
      <div className="col-sm-6 p-md-0">
        <div className="welcome-text">
          <h4>Hi, welcome back!</h4>
          <span>
            {customText ? "Your business dashboard template" : active}
          </span>
        </div>
      </div>
      <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="">
              <a>{mother}</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <Link href="">
              <a>{active}</a>
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PageTitle_;

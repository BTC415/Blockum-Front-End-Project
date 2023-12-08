import { Dropdown } from "react-bootstrap";
const Banner = ({
  banner: { headerImg, name, email, designation, profileImg },
}) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="profile card card-body px-3 pt-3 pb-0">
          <div className="profile-head">
            <div className="photo-content">
              <div
                className="cover-photo"
                style={{
                  background: `url(${headerImg && headerImg}) cover center`,
                }}
              />
            </div>
            <div className="profile-info">
              <div className="profile-photo">
                <img
                  src={profileImg && profileImg}
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <div className="profile-details">
                <div className="profile-name px-3 pt-2">
                  <h4 className="text-primary mb-0">{name && name}</h4>
                  <p>{designation && designation}</p>
                </div>
                <div className="profile-email px-2 pt-2">
                  <h4 className="text-muted mb-0">{email && email}</h4>
                  <p>Email</p>
                </div>
                <Dropdown className="dropdown ml-auto">
                  <Dropdown.Toggle
                    variant=""
                    className="btn btn-primary i-false light sharp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={5} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={19} cy={12} r={2} />
                      </g>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu alignRight={true}>
                    <Dropdown.Item>
                      <i className="fa fa-user-circle text-primary mr-2" /> View
                      profile
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-users text-primary mr-2" /> Add to
                      close friends
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-plus text-primary mr-2" /> Add to
                      group
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-ban text-primary mr-2" /> Block
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

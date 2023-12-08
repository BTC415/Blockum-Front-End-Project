import Link from "next/link";
import { Fragment, useState } from "react";
import { Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import useWindowSize from "../../../redux/action/useWindowSize";
import { sentMsg } from "../../../redux/action/utils";

const MsgBox = ({ onClick, msgBoxData, sentMsg }) => {
  const [msg, setMsg] = useState("");

  const { height } = useWindowSize();
  const msgFun = (e) => {
    setMsg(e.target.value);
  };
  const hendelSubmit = () => {
    if (msg) {
      sentMsg(msg);
      setMsg("");
    }
  };
  return (
    <Fragment>
      <div className="card-header chat-list-header text-center">
        <Link href="">
          <a className="dz-chat-history-back" onClick={() => onClick()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24" />
                <rect
                  fill="#000000"
                  opacity="0.3"
                  transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                  x={14}
                  y={7}
                  width={2}
                  height={10}
                  rx={1}
                />
                <path
                  d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                  fill="#000000"
                  fillRule="nonzero"
                  transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                />
              </g>
            </svg>
          </a>
        </Link>

        <div>
          <h6 className="mb-1">Chat with Khelesh</h6>
          <p className="mb-0 text-success">Online</p>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="" className="p-0 i-false c-pointer" as="a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <rect x={0} y={0} width={24} height={24} />
                <circle fill="#000000" cx={5} cy={12} r={2} />
                <circle fill="#000000" cx={12} cy={12} r={2} />
                <circle fill="#000000" cx={19} cy={12} r={2} />
              </g>
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul" alignRight={true}>
            <Dropdown.Item>
              <i className="fa fa-user-circle text-primary mr-2" /> View profile
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="fa fa-users text-primary mr-2" /> Add to close
              friends
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="fa fa-plus text-primary mr-2" /> Add to group
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="fa fa-ban text-primary mr-2" /> Block
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {msgBoxData && (
        <PerfectScrollbar
          className={`card-body msg_card_body dz-scroll `}
          id="DZ_W_Contacts_Body3"
          style={{
            height: `${height - 200}px`,
          }}
        >
          {msgBoxData.map((msg, i) => (
            <div
              className={`d-flex justify-content-${
                msg.name == "you" ? "start" : "end"
              } mb-4`}
              key={i}
            >
              {msg.name == "you" && (
                <div className="img_cont_msg">
                  <img
                    src={msg.img}
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
              )}

              <div
                className={`msg_cotainer${msg.name == "you" ? "" : "_send"}`}
              >
                {msg.msg}
                <span className={`msg_time${msg.name == "you" ? "" : "_send"}`}>
                  {msg.time}
                </span>
              </div>
              {msg.name == "me" && (
                <div className="img_cont_msg">
                  <img
                    src={msg.img}
                    className="rounded-circle user_img_msg"
                    alt=""
                  />
                </div>
              )}
            </div>
          ))}
        </PerfectScrollbar>
      )}
      <div className="card-footer type_msg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            hendelSubmit();
          }}
        >
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Type your message..."
              onChange={(e) => msgFun(e)}
              value={msg}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                onClick={() => hendelSubmit()}
              >
                <i className="fa fa-location-arrow" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  msgBoxData: state.utils.msgBox,
});

export default connect(mapStateToProps, { sentMsg })(MsgBox);

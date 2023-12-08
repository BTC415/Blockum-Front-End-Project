import { Fragment, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { chatBox } from "../../../redux/action/utils";
import AddUserModal from "./AddUserModal";
import MsgBox from "./MsgBox";
import Notes from "./note/Notes";

const ChatBox = ({ active, chatBox, chatLists }) => {
  const [activeChatBox, setActiveChatBox] = useState(false);
  const [addUser, setAddUser] = useState(false);

  return (
    <div className={`chatbox ${active ? "active" : ""}`}>
      <AddUserModal modal={addUser} modalChange={() => setAddUser(false)} />
      <div className="chatbox-close" onClick={() => chatBox(false)} />
      <Tab.Container defaultActiveKey="chat">
        <div className="custom-tab-1">
          <Nav as="ul" className="nav nav-tabs">
            <Nav.Item as="li">
              <Nav.Link data-toggle="tab" eventKey="notes">
                Notes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link data-toggle="tab" eventKey="alerts">
                Alerts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link data-toggle="tab" eventKey="chat">
                Chat
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="chat">
              <div
                className={`card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box  ${
                  activeChatBox ? "d-none" : ""
                }`}
              >
                <div className="card-header chat-list-header text-center">
                  <a href="#" onClick={() => setAddUser(true)}>
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
                        <rect
                          fill="#000000"
                          x={4}
                          y={11}
                          width={16}
                          height={2}
                          rx={1}
                        />
                        <rect
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                          x={4}
                          y={11}
                          width={16}
                          height={2}
                          rx={1}
                        />
                      </g>
                    </svg>
                  </a>
                  <div>
                    <h6 className="mb-1">Chat List</h6>
                    <p className="mb-0">Show All</p>
                  </div>
                  <a href="#">
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
                  </a>
                </div>
                <PerfectScrollbar
                  className="card-body contacts_body p-0 dz-scroll  "
                  id="DZ_W_Contacts_Body"
                >
                  <ul className="contacts">
                    {chatLists &&
                      chatLists.map((chat, i) => (
                        <Fragment key={i}>
                          <li
                            className={`dz-chat-user ${
                              chat.active ? "active" : ""
                            }`}
                            onClick={() => setActiveChatBox(true)}
                          >
                            <div className="d-flex bd-highlight">
                              <div className="img_cont">
                                <img
                                  src={chat.img}
                                  className="rounded-circle user_img"
                                  alt=""
                                  width={40}
                                  height={40}
                                />
                                <span
                                  className={`online_icon ${
                                    chat.active ? "" : "offline"
                                  }`}
                                />
                              </div>
                              <div className="user_info">
                                <span>{chat.name}</span>
                                <p>
                                  {chat.active
                                    ? `${chat.name.split(" ")[0]} is online`
                                    : `${chat.name.split(" ")[0]} left ${
                                        chat.lastActive
                                      } mins ago`}{" "}
                                </p>
                              </div>
                            </div>
                          </li>
                        </Fragment>
                      ))}
                  </ul>
                </PerfectScrollbar>
              </div>
              <div
                className={`card chat dz-chat-history-box  ${
                  activeChatBox ? "d-block" : "d-none"
                }`}
              >
                <MsgBox onClick={() => setActiveChatBox(false)} />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="alerts">
              <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header chat-list-header text-center">
                  <a href="#">
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
                  </a>
                  <div>
                    <h6 className="mb-1">Notications</h6>
                    <p className="mb-0">Show All</p>
                  </div>
                  <a href="#">
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
                        <path
                          d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="0.3"
                        />
                        <path
                          d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
                <PerfectScrollbar
                  className="card-body contacts_body p-0 dz-scroll"
                  id="DZ_W_Contacts_Body1"
                >
                  <ul className="contacts">
                    <li className="name-first-letter">SEVER STATUS</li>
                    <li className="active">
                      <div className="d-flex bd-highlight">
                        <div className="img_cont primary">KK</div>
                        <div className="user_info">
                          <span>David Nester Birthday</span>
                          <p className="text-primary">Today</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">SOCIAL</li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="img_cont success">RU</div>
                        <div className="user_info">
                          <span>Perfection Simplified</span>
                          <p>Jame Smith commented on your status</p>
                        </div>
                      </div>
                    </li>
                    <li className="name-first-letter">SEVER STATUS</li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="img_cont primary">AU</div>
                        <div className="user_info">
                          <span>AharlieKane</span>
                          <p>Sami is online</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex bd-highlight">
                        <div className="img_cont info">MO</div>
                        <div className="user_info">
                          <span>Athan Jacoby</span>
                          <p>Nargis left 30 mins ago</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </PerfectScrollbar>
                <div className="card-footer" />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="notes">
              <Notes />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  active: state.utils.chatBox,
  chatLists: state.utils.chatLists,
});

export default connect(mapStateToProps, { chatBox })(ChatBox);

import { Fragment, useEffect } from "react";
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../src/components/PageTitle";
import ActiveUser from "../src/components/widgetBasic/ActiveUser";
import AllSell1 from "../src/components/widgetBasic/AllSell1";
import AllSell2 from "../src/components/widgetBasic/AllSell2";
import BloodPressure from "../src/components/widgetBasic/BloodPressure";
import Clolesterol from "../src/components/widgetBasic/Clolesterol";
import FeeCollection from "../src/components/widgetBasic/FeeCollection";
import GlucoseRate from "../src/components/widgetBasic/GlucoseRate";
import HeartRate from "../src/components/widgetBasic/HeartRate";
import LifeTimeEarning from "../src/components/widgetBasic/LifeTimeEarning";
import MarketNow from "../src/components/widgetBasic/MarketNow";
import NewStudent from "../src/components/widgetBasic/NewStudent";
import PowerBar from "../src/components/widgetBasic/PowerBar";
import PowerLine from "../src/components/widgetBasic/PowerLine";
import SalesAnalysis from "../src/components/widgetBasic/SalesAnalysis";
import TopProducts1 from "../src/components/widgetBasic/TopProducts1";
import TopProducts2 from "../src/components/widgetBasic/TopProducts2";
import TotalCourse from "../src/components/widgetBasic/TotalCourse";
import TotalStudent from "../src/components/widgetBasic/TotalStudent";
import ViewProject from "../src/components/widgetBasic/ViewProject";
import VisitorActivity from "../src/components/widgetBasic/VisitorActivity";
import WeeklySales1 from "../src/components/widgetBasic/WeeklySales1";
import WeeklySales2 from "../src/components/widgetBasic/WeeklySales2";
import Widget1 from "../src/components/widgetBasic/Widget1";
import Widget2 from "../src/components/widgetBasic/Widget2";
import { moodChange, pageTitle } from "../src/redux/action/utils";
import { getWidgetBasic } from "../src/redux/action/widget";

const WidgetBasic = ({ pageTitle, getWidgetBasic, widgetData }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Widget");
    getWidgetBasic();
  }, []);

  const svgIcon = {
    user: (
      <svg
        id="icon-customers"
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-user"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    ),
    document: (
      <svg
        id="icon-orders"
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-file-text"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} y1={13} x2={8} y2={13} />
        <line x1={16} y1={17} x2={8} y2={17} />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    dollar: (
      <svg
        id="icon-revenue"
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-dollar-sign"
      >
        <line x1={12} y1={1} x2={12} y2={23} />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    database: (
      <svg
        id="icon-database-widget"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-database"
      >
        <ellipse cx={12} cy={5} rx={9} ry={3} />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  };

  const allChart = (name, chartData) => {
    const charts = {
      TotalStudent: <TotalStudent chartData={chartData} />,
      NewStudent: <NewStudent chartData={chartData} />,
      TotalCourse: <TotalCourse chartData={chartData} />,
      FeeCollection: <FeeCollection chartData={chartData} />,
      BloodPressure: <BloodPressure chartData={chartData} />,
      HeartRate: <HeartRate chartData={chartData} />,
      GlucoseRate: <GlucoseRate chartData={chartData} />,
      Clolesterol: <Clolesterol chartData={chartData} />,
      PowerLine: <PowerLine chartData={chartData} />,
      PowerBar: <PowerBar chartData={chartData} />,
      ViewProject: <ViewProject chartData={chartData} />,
      LifeTimeEarning: <LifeTimeEarning chartData={chartData} />,
      Widget1: <Widget1 chartData={chartData} />,
      Widget2: <Widget2 chartData={chartData} />,
      MarketNow: <MarketNow chartData={chartData} />,
      SalesAnalysis: <SalesAnalysis chartData={chartData} />,
      TopProducts1: <TopProducts1 chartData={chartData} />,
      TopProducts2: <TopProducts2 chartData={chartData} />,
      AllSell1: <AllSell1 chartData={chartData} />,
      AllSell2: <AllSell2 chartData={chartData} />,
    };
    return charts[name];
  };

  return (
    <Fragment>
      <PageTitle_ active="Statistics" mother="Widget" />
      <div className="row">
        <div className="col-xl-4 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Timeline</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                id="DZ_W_TimeLine"
                className="widget-timeline dz-scroll height370"
              >
                <ul className="timeline">
                  {widgetData &&
                    widgetData.timeline.map((timeline, i) => (
                      <li key={i}>
                        <div className={`timeline-badge ${timeline.badge}`} />
                        <a className="timeline-panel text-muted" href="#">
                          <span>{timeline.time} minutes ago</span>
                          <h6 className="mb-0">
                            {timeline.text}{" "}
                            <strong
                              className={`text-${timeline.specialTextClass}`}
                            >
                              {timeline.specialText}
                            </strong>
                            .
                          </h6>
                          <p className="mb-0">{timeline.dec}</p>
                        </a>
                      </li>
                    ))}
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Timeline 2</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                id="DZ_W_TimeLine11"
                className="widget-timeline dz-scroll style-1 height370"
              >
                <ul className="timeline">
                  {widgetData &&
                    widgetData.timeline.map((timeline, i) => (
                      <li key={i}>
                        <div className={`timeline-badge ${timeline.badge}`} />
                        <a className="timeline-panel text-muted" href="#">
                          <span>{timeline.time} minutes ago</span>
                          <h6 className="mb-0">
                            {timeline.text}{" "}
                            <strong
                              className={`text-${timeline.specialTextClass}`}
                            >
                              {timeline.specialText}
                            </strong>
                            .
                          </h6>
                          <p className="mb-0">{timeline.dec}</p>
                        </a>
                      </li>
                    ))}
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header  border-0 pb-0">
              <h4 className="card-title">Notifications</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                id="DZ_W_Todo1"
                className="widget-media dz-scroll height370"
              >
                <ul className="timeline">
                  {widgetData &&
                    widgetData.notifications.map((notifications, i) => (
                      <li key={i}>
                        <div className="timeline-panel">
                          {notifications.profile.img ? (
                            <div className="media mr-2">
                              <img
                                alt="image"
                                width={50}
                                src={notifications.profile.img}
                              />
                            </div>
                          ) : (
                            <div
                              className={`media mr-2 media-${notifications.profile.bg}`}
                            >
                              {notifications.profile.text ? (
                                notifications.profile.text
                              ) : (
                                <i
                                  className={`fa fa-${notifications.profile.icon}`}
                                />
                              )}
                            </div>
                          )}

                          <div className="media-body">
                            <h5 className="mb-1">{notifications.title}</h5>
                            <small className="d-block">
                              {notifications.date} - {notifications.time}
                            </small>
                          </div>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant=""
                              className={`btn btn-${notifications.variant} light sharp i-false`}
                            >
                              <svg
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
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight={true}>
                              <Dropdown.Item>Edit</Dropdown.Item>
                              <Dropdown.Item>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                    ))}
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-6 col-lg-6">
          <div className="card border-0 pb-0">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Notifications 2</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                id="DZ_W_Todo2"
                className="widget-media dz-scroll height370"
              >
                <ul className="timeline">
                  {widgetData &&
                    widgetData.notifications.map((notifications, i) => (
                      <li key={i}>
                        <div className="timeline-panel">
                          {notifications.profile.img ? (
                            <div className="media mr-2">
                              <img
                                alt="image"
                                width={50}
                                src={notifications.profile.img}
                              />
                            </div>
                          ) : (
                            <div
                              className={`media mr-2 media-${notifications.profile.bg}`}
                            >
                              {notifications.profile.text ? (
                                notifications.profile.text
                              ) : (
                                <i
                                  className={`fa fa-${notifications.profile.icon}`}
                                />
                              )}
                            </div>
                          )}
                          <div className="media-body">
                            <h5 className="mb-1">
                              {notifications.title}{" "}
                              <span
                                className={`badge badge-${notifications.badge.class}`}
                              >
                                {notifications.badge.text}
                              </span>
                            </h5>
                            <small className="d-block">
                              {notifications.date} - {notifications.time}
                            </small>
                          </div>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant=""
                              className={`btn btn-${notifications.variant} light sharp i-false`}
                            >
                              <svg
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
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight={true}>
                              <Dropdown.Item>Edit</Dropdown.Item>
                              <Dropdown.Item>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                    ))}
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-6 col-lg-6">
          <div className="card border-0 pb-0">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Message</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                id="DZ_W_Todo3"
                className="widget-media dz-scroll height370"
              >
                <ul className="timeline">
                  {widgetData &&
                    widgetData.message.map((message, i) => (
                      <li key={i}>
                        <div className="timeline-panel">
                          {message.profile.img ? (
                            <div className="media mr-2">
                              <img
                                alt="image"
                                width={50}
                                src={message.profile.img}
                              />
                            </div>
                          ) : (
                            <div
                              className={`media mr-2 media-${message.profile.bg}`}
                            >
                              {message.profile.text}
                            </div>
                          )}

                          <div className="media-body">
                            <h5 className="mb-1">
                              {message.name}{" "}
                              <small className="text-muted">
                                {message.time}
                              </small>
                            </h5>
                            <p className="mb-1">{message.text}</p>
                            <a
                              href="#"
                              className="btn btn-primary btn-xxs shadow"
                            >
                              Reply
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-danger btn-xxs ml-1"
                            >
                              Delete
                            </a>
                          </div>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant=""
                              className={`btn btn-${message.variant} light sharp i-false`}
                            >
                              <svg
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
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight={true}>
                              <Dropdown.Item>Edit</Dropdown.Item>
                              <Dropdown.Item>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                    ))}
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-6 col-lg-6">
          <div className="card border-0 pb-0">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">To Do List</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                id="DZ_W_Todo4"
                className="widget-media dz-scroll height370"
              >
                <ul className="timeline">
                  {widgetData &&
                    widgetData.todo.map((todo, i) => (
                      <li key={i}>
                        <div className="timeline-panel">
                          <div
                            className={`custom-control custom-checkbox checkbox-${todo.color} check-lg mr-3`}
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={`customCheckBox-${i}`}
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`customCheckBox-${i}`}
                            />
                          </div>
                          <div className="media-body">
                            <h5 className="mb-0">{todo.title}</h5>
                            <small className="text-muted">
                              {todo.date} - {todo.time}
                            </small>
                          </div>
                          <Dropdown>
                            <Dropdown.Toggle
                              as="button"
                              variant=""
                              className={`btn btn-${todo.color} light sharp i-false`}
                            >
                              <svg
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
                                  <circle
                                    fill="#000000"
                                    cx={12}
                                    cy={12}
                                    r={2}
                                  />
                                  <circle
                                    fill="#000000"
                                    cx={19}
                                    cy={12}
                                    r={2}
                                  />
                                </g>
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight={true}>
                              <Dropdown.Item>Edit</Dropdown.Item>
                              <Dropdown.Item>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                    ))}
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        {widgetData &&
          widgetData.fristWidget.map((widget, i) => (
            <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6" key={i}>
              <div className="widget-stat card">
                <div className="card-body p-4">
                  <div className="media ai-icon">
                    <span
                      className={`mr-3 bgl-${widget.color} text-${widget.color}`}
                    >
                      {/* <i className="ti-user"></i> */}
                      {svgIcon[widget.icon]}
                    </span>
                    <div className="media-body">
                      <p className="mb-1">{widget.name}</p>
                      <h4 className="mb-0">{widget.value}</h4>
                      <span className={`badge badge-${widget.color}`}>
                        {widget.overView}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {widgetData &&
          widgetData.secondWidget.map((widget, i) => (
            <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6" key={i}>
              <div className={`widget-stat card bg-${widget.color}`}>
                <div className="card-body  p-4">
                  <div className="media">
                    <span className="mr-3">
                      <i className={`flaticon-381-${widget.icon}`} />
                    </span>
                    <div className="media-body text-white text-right">
                      <p className="mb-1">{widget.name}</p>
                      <h3 className="text-white">{widget.value}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {widgetData &&
          widgetData.widgetWithprogress.map((widget, i) => (
            <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6" key={i}>
              <div className={`widget-stat card bg-${widget.bg}`}>
                <div className="card-body  p-4">
                  <div className="media">
                    <span className="mr-3">
                      <i className={`la la-${widget.icon}`} />
                    </span>
                    <div className="media-body text-white">
                      <p className="mb-1">{widget.name}</p>
                      <h3 className="text-white">{widget.value}</h3>
                      <div className="progress mb-2 bg-secondary">
                        <div
                          className={`progress-bar progress-animated bg-light`}
                          style={{ width: `${widget.proggressBar.value}%` }}
                        />
                      </div>
                      <small>
                        {widget.increase}% Increase in {widget.day} Days
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {widgetData &&
          widgetData.widgetWithprogress.map((widget, i) => (
            <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6" key={i}>
              <div className="widget-stat card">
                <div className="card-body p-4">
                  <h4 className="card-title">{widget.name}</h4>
                  <h3>{widget.value}</h3>
                  <div className="progress mb-2">
                    <div
                      className={`progress-bar progress-animated bg-${widget.proggressBar.color}`}
                      style={{ width: `${widget.proggressBar.value}%` }}
                    />
                  </div>
                  <small>
                    {widget.increase}% Increase in {widget.day} Days
                  </small>
                </div>
              </div>
            </div>
          ))}
        <div className="col-xl-12 col-lg-12 col-sm-12">
          <div className="row">
            {widgetData &&
              widgetData.widgetWithChart.map((widget, i) => (
                <div className="col-xl-3 col-xxl-6 col-lg-6 col-sm-6" key={i}>
                  <div className={`widget-stat card bg-${widget.bg}`}>
                    <div className="card-header border-0 pb-0">
                      <h3 className="card-title text-white">{widget.title}</h3>
                      <h5 className="text-white mb-0">
                        <i className="fa fa-caret-up" /> {widget.overView}
                      </h5>
                    </div>
                    <div className={`card-body ${i === 0 ? "" : "p-0"}`}>
                      <div className="ico-sparkline">
                        {allChart(widget.name, widget.chartDate)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-sm-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h2 className="card-title">about me</h2>
            </div>
            <div className="card-body pb-0">
              <p>{widgetData && widgetData.profile.aboutMe}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Gender</strong>
                  <span className="mb-0">
                    {widgetData && widgetData.profile.gender}
                  </span>
                </li>
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Education</strong>
                  <span className="mb-0">
                    {widgetData && widgetData.profile.education}
                  </span>
                </li>
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Designation</strong>
                  <span className="mb-0">
                    {widgetData && widgetData.profile.designation}
                  </span>
                </li>
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Operation Done</strong>
                  <span className="mb-0">
                    {widgetData && widgetData.profile.operation}
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-footer pt-0 pb-0 text-center">
              <div className="row">
                {widgetData &&
                  widgetData.profile.activity.map((activity, i) => (
                    <div
                      className={`col-4 pt-3 pb-3 ${
                        widgetData &&
                        widgetData.profile.activity.length - 1 == i
                          ? ""
                          : "border-right"
                      }`}
                      key={i}
                    >
                      <h3 className="mb-1 text-primary">{activity.value}</h3>
                      <span>{activity.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-xxl-8 col-lg-12 col-sm-12">
          <div id="user-activity" className="card">
            <Tab.Container
              defaultActiveKey={
                widgetData && widgetData.visitorActivity[0].event
                  ? widgetData.visitorActivity[0].event
                  : "Day"
              }
            >
              <div className="card-header border-0 pb-0 d-sm-flex d-block">
                <h4 className="card-title">Visitor Activity</h4>
                <div className="card-action mb-sm-0 my-2">
                  <Nav className="nav nav-tabs" role="tablist">
                    {widgetData &&
                      widgetData.visitorActivity.map((visitorActivity, i) => (
                        <Nav.Item key={i}>
                          <Nav.Link eventKey={visitorActivity.event}>
                            {visitorActivity.event}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                  </Nav>
                </div>
              </div>
              <div className="card-body">
                <Tab.Content className="tab-content" id="myTabContent">
                  {widgetData &&
                    widgetData.visitorActivity.map((visitorActivity, i) => (
                      <Tab.Pane eventKey={visitorActivity.event} key={i}>
                        <VisitorActivity chartData={visitorActivity.data} />
                      </Tab.Pane>
                    ))}
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-sm-6">
          <div className="card overflow-hidden">
            <div className="card-body pb-0">
              <div className="text-center">
                <div className="profile-photo">
                  <img
                    src={widgetData && widgetData.profile.img}
                    width={100}
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <h3 className="mt-4 mb-1">
                  {widgetData && widgetData.profile.name}
                </h3>
                <p className="text-muted">
                  {widgetData && widgetData.profile.designation}
                </p>
                <a
                  className="btn btn-outline-primary btn-rounded mt-3 px-5"
                  href="javascript:void(0)"
                >
                  Folllow
                </a>
              </div>
            </div>
            <div className="card-footer pt-0 pb-0 text-center">
              <div className="row">
                {widgetData &&
                  widgetData.profile.social.map((social, i) => (
                    <div
                      className={`col-4 pt-3 pb-3 ${
                        widgetData && widgetData.profile.social.length - 1 === i
                          ? ""
                          : "border-right"
                      }`}
                      key={i}
                    >
                      <h3 className="mb-1">{social.value}</h3>
                      <span>{social.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-sm-6">
          <div className="card active_users">
            <div className="card-header bg-primary border-0 pb-0">
              <h4 className="card-title text-white">Active Users</h4>
              <span id="counter" />
            </div>
            <div className="bg-primary">
              <ActiveUser />
            </div>
            <div className="card-body pt-0">
              <div className="list-group-flush mt-4">
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 font-weight-semi-bold border-top-0">
                  <p className="mb-0">Top Active Pages</p>
                  <p className="mb-0">Active Users</p>
                </div>
                {widgetData &&
                  widgetData.activeUser.map((active, i) => (
                    <div
                      className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1"
                      key={i}
                    >
                      <p className="mb-0">{active.name}</p>
                      <p className="mb-0">{active.value}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-sm-12">
          <div className="card overflow-hidden">
            <div
              className="text-center p-3 overlay-box "
              style={{
                backgroundImage: `url(${widgetData && widgetData.profile.bg})`,
              }}
            >
              <div className="profile-photo">
                <img
                  src={widgetData && widgetData.profile.img}
                  width={100}
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <h3 className="mt-3 mb-1 text-white">
                {widgetData && widgetData.profile.name}
              </h3>
              <p className="text-white mb-0">
                {widgetData && widgetData.profile.designation}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Patient Gender</span>{" "}
                <strong className="text-muted">
                  {widgetData && widgetData.profile.gender}
                </strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Years Old</span>{" "}
                <strong className="text-muted">
                  Age: {widgetData && widgetData.profile.age}{" "}
                </strong>
              </li>
            </ul>
            <div className="card-footer border-0 mt-0">
              <button className="btn btn-primary btn-lg btn-block">
                <i className="fa fa-bell-o" /> Reminder Alarm
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Recent Payments Queue</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Ward No.</th>
                      <th scope="col">Patient</th>
                      <th scope="col">Dr Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Bills</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {widgetData &&
                      widgetData.recentPaymentsQueue.map(
                        (recentPaymentsQueue, i) => (
                          <tr key={i}>
                            <td>{recentPaymentsQueue.no}</td>
                            <td>{recentPaymentsQueue.patient}</td>
                            <td>{recentPaymentsQueue.drName}</td>
                            <td>{recentPaymentsQueue.date}</td>
                            <td>
                              <span
                                className={`badge badge-rounded badge-${recentPaymentsQueue.status.color}`}
                              >
                                {recentPaymentsQueue.status.text}
                              </span>
                            </td>
                            <td>${recentPaymentsQueue.bills}</td>
                            <td>
                              <Dropdown className="custom-dropdown mb-0">
                                <Dropdown.Toggle
                                  variant=""
                                  className="btn sharp btn-primary tp-btn p-0 i-false"
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
                                      <rect
                                        x={0}
                                        y={0}
                                        width={24}
                                        height={24}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={5}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={12}
                                        r={2}
                                      />
                                      <circle
                                        fill="#000000"
                                        cx={12}
                                        cy={19}
                                        r={2}
                                      />
                                    </g>
                                  </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu alignRight={true}>
                                  <Dropdown.Item>Details</Dropdown.Item>
                                  <Dropdown.Item className="text-danger">
                                    Cancel
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
          <div className="card text-white bg-primary">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Blood type :</span>
                <strong>{widgetData && widgetData.profile.bolod.type}</strong>
              </li>
              {widgetData &&
                widgetData.profile.bolod.data.map((bolod, i) => (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={i}
                  >
                    <span className="mb-0">{bolod.name} :</span>
                    <strong>{bolod.value}</strong>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
          <div className="card text-white bg-warning text-black">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">
                  {widgetData && widgetData.profile.checkups.name}
                </span>
              </li>
              {widgetData &&
                widgetData.profile.checkups.data.map((checkup, i) => (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={i}
                  >
                    <span className="mb-0">{checkup.name} :</span>
                    <strong>{checkup.value}</strong>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-xxl-4 col-sm-12">
          <div className="card">
            <div className="card-body text-center ai-icon  text-primary">
              <svg
                id="rocket-icon"
                className="my-2"
                viewBox="0 0 24 24"
                width={80}
                height={80}
                stroke="currentColor"
                strokeWidth={1}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1={3} y1={6} x2={21} y2={6} />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <h4 className="my-2">You don’t have badges yet</h4>
              <a
                href="javascript:void(0);"
                className="btn my-2 btn-primary btn-lg px-4"
              >
                <i className="fa fa-usd" /> Earn Budges
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-12 col-xxl-8 col-sm-12">
          <div className="row">
            {widgetData &&
              widgetData.bloodReatWidget.map((bloodWidget, i) => (
                <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6" key={i}>
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <div className="clearfix">
                        <h3 className="card-title">{bloodWidget.name}</h3>
                        <span>{bloodWidget.subTitle}</span>
                      </div>
                      <div className="clearfix text-center">
                        <h3 className={`text-${bloodWidget.value.color} mb-0`}>
                          {bloodWidget.value.value}
                        </h3>
                        <span>{bloodWidget.value.text}</span>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <div className="ico-sparkline">
                        {allChart(
                          bloodWidget.chart.name,
                          bloodWidget.chart.data
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-sm-12">
          <div className="card overflow-hidden">
            <div
              className="text-center p-5 overlay-box"
              style={{
                backgroundImage: `url(${widgetData && widgetData.profile.bg})`,
              }}
            >
              <img
                src={widgetData && widgetData.profile.img}
                width={100}
                className="img-fluid rounded-circle"
                alt=""
              />
              <h3 className="mt-3 mb-0 text-white">
                {widgetData && widgetData.profile.name}
              </h3>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6">
                  <div className="bgl-primary rounded p-3">
                    <h4 className="mb-0">
                      {widgetData && widgetData.profile.gender}
                    </h4>
                    <small>Patient Gender</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bgl-primary rounded p-3">
                    <h4 className="mb-0">
                      Age: {widgetData && widgetData.profile.age}
                    </h4>
                    <small>Years Old</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer mt-0">
              <button className="btn btn-primary btn-lg btn-block">
                View Profile
              </button>
            </div>
          </div>
        </div>
        {widgetData &&
          widgetData.powerWidget.map((powerWidget, i) => (
            <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6" key={i}>
              <div className={`card bg-${powerWidget.bg}`}>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col">
                      <h5 className="text-white">{powerWidget.name}</h5>
                      <span className="text-white">{powerWidget.date}</span>
                    </div>
                    <div className="col text-right">
                      <h5 className="text-white">
                        <i className="fa fa-caret-up" /> {powerWidget.overView}
                      </h5>
                      <span className="text-white">
                        {powerWidget.overView2}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="chart-wrapper">
                  {allChart(powerWidget.chart.name, powerWidget.chart.data)}
                </div>
              </div>
            </div>
          ))}

        {widgetData &&
          widgetData.projectAndEarningWidget.map(
            (projectAndEarningWidget, i) => (
              <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6" key={i}>
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="row">
                      <div className="col">
                        <h5>{projectAndEarningWidget.value}</h5>
                        <span>{projectAndEarningWidget.subTitle}</span>
                      </div>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    {allChart(
                      projectAndEarningWidget.name,
                      projectAndEarningWidget.chartData
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        <div className="col-xl-12 col-xxl-12">
          <div className="row">
            {widgetData &&
              widgetData.loramWidget.map((loramWidget, i) => (
                <div className="col-md-6" key={i}>
                  <div className="card">
                    <div className="card-body pb-0">
                      <div className="row justify-content-between">
                        <div className="col-auto">
                          <h5>{loramWidget.title}</h5>
                        </div>
                        <div className="col-auto">
                          <h5>
                            <span>
                              <i className="fa fa-caret-up"></i>
                            </span>
                            <span>{loramWidget.value}</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="chart-wrapper">
                      <div id="chart_widget_6">
                        {allChart(loramWidget.name, loramWidget.chartData)}
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        {loramWidget.footer.map((footer, i) => (
                          <div className="col text-center" key={i}>
                            <h5 className="font-weight-normal">
                              {footer.value}
                            </h5>
                            <span>Type {footer.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {widgetData &&
          widgetData.analysisWidget.map((analysisWidget, i) => (
            <div className="col-xl-6 col-lg-6" key={i}>
              <div className="card">
                <div className="card-body pb-0">
                  <h4 className="card-title text-uppercase font-weight-normal">
                    {analysisWidget.title}
                  </h4>
                  <h2 className="font-weight-normal text-danger">
                    <span>
                      <i className="fa fa-caret-up" />
                    </span>
                    <span> {analysisWidget.value}</span>
                  </h2>
                  <div className="row mt-5">
                    {analysisWidget.overView.map((overView, i) => (
                      <div className="col text-center" key={i}>
                        <h5 className="font-weight-normal">{overView.name}</h5>
                        <span
                          className={`text-${
                            overView.value.split(" ")[0] === "+"
                              ? "success"
                              : "danger"
                          }`}
                        >
                          {overView.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chart-wrapper">
                  {allChart(analysisWidget.name, analysisWidget.chartData)}
                </div>
              </div>
            </div>
          ))}

        {widgetData &&
          widgetData.products.map((product, i) => (
            <div className="col-xl-6 col-lg-12" key={i}>
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="card-title">Top Products</h4>
                </div>
                <div className="card-body pb-0">
                  <div className="widget-media">
                    <ul className="timeline">
                      {product.data.map((notifications, i) => (
                        <li key={i}>
                          <div className="timeline-panel">
                            {notifications.profile.img ? (
                              <div className="media mr-2">
                                <img
                                  alt="image"
                                  width={50}
                                  src={notifications.profile.img}
                                />
                              </div>
                            ) : (
                              <div
                                className={`media mr-2 media-${notifications.profile.bg}`}
                              >
                                {notifications.profile.text ? (
                                  notifications.profile.text
                                ) : (
                                  <i
                                    className={`fa fa-${notifications.profile.icon}`}
                                  />
                                )}
                              </div>
                            )}

                            <div className="media-body">
                              <h5 className="mb-1">{notifications.title}</h5>
                              <small className="d-block">
                                {notifications.date} - {notifications.time}
                              </small>
                            </div>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                className={`btn btn-${notifications.variant} light sharp i-false`}
                              >
                                <svg
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu alignRight={true}>
                                <Dropdown.Item>Edit</Dropdown.Item>
                                <Dropdown.Item>Delete</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="chart-wrapper">
                  {allChart(product.chart.name, product.chart.chartData)}
                </div>
              </div>
            </div>
          ))}
        <div className="col-xl-6 col-xxl-8 col-lg-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-5 p-0">
                    <div className="card-body">
                      <h6 className="font-weight-normal text-uppercase">
                        {widgetData && widgetData.weeklySales.title}
                      </h6>
                      <h4>$ {widgetData && widgetData.weeklySales.value}</h4>
                      <div>
                        <span className="badge badge-light">
                          {widgetData && widgetData.weeklySales.overView}%
                        </span>
                        <span>
                          {" "}
                          {widgetData && widgetData.weeklySales.overViewText}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 p-0">
                    <div className="chart-wrapper">
                      <WeeklySales1
                        chartData={
                          widgetData && widgetData.weeklySales.chartData
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {widgetData &&
              widgetData.sales.map((sales, i) => (
                <div className="col-sm-6" key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h5>{sales.value}</h5>
                      <p>{sales.title}</p>
                    </div>
                    <div className="chart-wrapper">
                      {allChart(sales.name, sales.chartData)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="col-xl-6 col-xxl-4 col-lg-12">
          <div className="card">
            <div className="chart-wrapper">
              <WeeklySales2
                chartData={widgetData && widgetData.salesStatus.chartData}
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                {widgetData && widgetData.salesStatus.title}
              </h4>
              <div className="row">
                {widgetData &&
                  widgetData.salesStatus.proggressBar.map((proggressBar, i) => (
                    <div className={`col-12 ${i === 0 ? "" : "mt-4"}`} key={i}>
                      <div className="d-flex justify-content-between">
                        <h6>{proggressBar.value}%</h6>
                        <span>Grow</span>
                      </div>
                      <div className="progress">
                        <div
                          className={`progress-bar bg-${proggressBar.color}`}
                          style={{ width: `${proggressBar.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {widgetData &&
          widgetData.social.map((social, i) => (
            <div className="col-xl-3 col-xxl-3 col-sm-6" key={i}>
              <div className="card overflow-hidden">
                <div className={`social-graph-wrapper widget-${social.name}`}>
                  <span className="s-icon">
                    <i className={`fa fa-${social.icon}`} />
                  </span>
                </div>
                <div className="row">
                  <div className="col-6 border-right">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">
                        <span className="counter">{social.friends}</span> k
                      </h4>
                      <p className="m-0">Friends</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                      <h4 className="m-1">
                        <span className="counter">{social.flw}</span> k
                      </h4>
                      <p className="m-0">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  widgetData: state.widget.data,
});

export default connect(mapStateToProps, { pageTitle, getWidgetBasic })(
  WidgetBasic
);

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect, useSelector } from "react-redux";
import { getDashboardData } from "../src/redux/action/dashboard";
import { moodChange, pageTitle } from "../src/redux/action/utils";

const Menu = dynamic(() => import("../src/uena/home/Menu"), {
  ssr: false,
});
const DailyTarget = dynamic(() => import("../src/uena/home/DailyTarget"), {
  ssr: false,
});
const OrderChart = dynamic(() => import("../src/uena/home/OrderChart"), {
  ssr: false,
});
const CustomersChart = dynamic(
  () => import("../src/uena/home/CustomersChart"),
  {
    ssr: false,
  }
);
const CustomerMap1 = dynamic(() => import("../src/uena/home/CustomerMap1"), {
  ssr: false,
});
const CustomerMap2 = dynamic(() => import("../src/uena/home/CustomerMap2"), {
  ssr: false,
});
const CustomerMap3 = dynamic(() => import("../src/uena/home/CustomerMap3"), {
  ssr: false,
});
const Index = ({
  pageTitle,
  getDashboardData,
  dailyTargetChart,
  orderChart,
  customerChart,
  menuChart,
  customerMapChart,
  trendingMenu,
  orderRequest,
}) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    moodChange();

    pageTitle("Dashboard");
    getDashboardData();
  }, []);
  const [refresh, setRefresh] = useState(false);
  const [numberOfShow, setNumberOfShow] = useState(2);
  const onClick = () => {
    setRefresh(true);
    setTimeout(() => {
      setNumberOfShow(numberOfShow + 1);
      setRefresh(false);
    }, 1000);
  };
  return (
    <div className="row">
      <div className="col-xl-3 col-xxl-4">
        <div className="row">
          <div className="col-xl-12 col-lg-6 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <div className="separator" />
                <div className="mr-auto">
                  <h4 className="card-title mb-2">
                    {dailyTargetChart && dailyTargetChart.name}
                  </h4>
                  <p className="fs-12 mb-0">
                    {dailyTargetChart && dailyTargetChart.subHeading}
                  </p>
                </div>
              </div>
              <div className="card-body  text-center">
                {dailyTargetChart && (
                  <div id="radialChart">
                    <DailyTarget
                      data={dailyTargetChart && dailyTargetChart.data}
                    />
                  </div>
                )}
                <h3 className="fs-28 text-black font-w500">
                  ${dailyTargetChart && dailyTargetChart.value}
                </h3>
                <span className="mb-3 d-block">
                  from ${dailyTargetChart && dailyTargetChart.heightValue}
                </span>
                <p className="fs-14">
                  {dailyTargetChart && dailyTargetChart.details}
                </p>
                <Link href="/apps/post-details">
                  <a className="btn btn-outline-primary">More Details</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-6 col-md-6">
            <div className="card trending-menus">
              <div className="card-header border-0">
                <div className="separator" />
                <div className="mr-auto">
                  <h4 className="text-black fs-20">
                    {trendingMenu && trendingMenu.name}
                  </h4>
                  <p className="fs-13 mb-0">
                    {trendingMenu && trendingMenu.subHeading}
                  </p>
                </div>
              </div>
              <div className="card-body ">
                {trendingMenu && (
                  <PerfectScrollbar
                    className="dz-scroll height500"
                    id="tredingMenus"
                  >
                    {trendingMenu &&
                      trendingMenu.data.map((data, i) => (
                        <div
                          key={i}
                          className={`d-flex pb-3 mb-3 tr-row align-items-center ${
                            trendingMenu && trendingMenu.data.length - 1 !== i
                              ? "border-bottom"
                              : ""
                          }`}
                        >
                          <span className="num">#{i + 1}</span>
                          <div className="mr-auto pr-3">
                            <Link href="/apps/post-details">
                              <a>
                                <h2 className="text-black fs-14 font-w500">
                                  {data.title}
                                </h2>
                              </a>
                            </Link>
                            <span className="text-black font-w600 d-inline-block mr-3">
                              ${data.price}{" "}
                            </span>{" "}
                            <span className="fs-14">Order {data.order}x</span>
                          </div>
                          <img src={data.img} alt="Picture of the author" />
                        </div>
                      ))}
                  </PerfectScrollbar>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-xxl-8">
        <div className="row">
          <div className="col-xl-4 col-xxl-6 col-sm-6">
            <div className="card">
              <div className="card-header media border-0 pb-0">
                <div className="media-body d-flex">
                  <div className="mr-4 mt-1">
                    <svg
                      className="card-ico"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.10333 12.25H4.66666V19.8333C4.66666 20.6069 4.97395 21.3487 5.52093 21.8957C6.06791 22.4427 6.80978 22.75 7.58333 22.75H8.74999C9.52354 22.75 10.2654 22.4427 10.8124 21.8957C11.3594 21.3487 11.6667 20.6069 11.6667 19.8333V12.25H13.23C13.7436 12.25 14.2362 12.0459 14.5994 11.6827C14.9626 11.3195 15.1667 10.8269 15.1667 10.3133C15.1683 9.94246 15.0608 9.57933 14.8575 9.26914L10.4533 2.41498C10.2072 2.03206 9.86883 1.71709 9.4693 1.49895C9.06977 1.28082 8.62186 1.1665 8.16666 1.1665C7.71146 1.1665 7.26355 1.28082 6.86401 1.49895C6.46448 1.71709 6.12613 2.03206 5.87999 2.41498L1.47583 9.26914C1.27256 9.57933 1.16504 9.94246 1.16666 10.3133C1.16666 10.8269 1.3707 11.3195 1.7339 11.6827C2.09709 12.0459 2.58969 12.25 3.10333 12.25Z"
                        fill="#FF720D"
                      />
                      <path
                        d="M24.8966 15.75H23.3333V8.16667C23.3333 7.39312 23.026 6.65125 22.479 6.10427C21.932 5.55729 21.1902 5.25 20.4166 5.25H19.25C18.4764 5.25 17.7346 5.55729 17.1876 6.10427C16.6406 6.65125 16.3333 7.39312 16.3333 8.16667V15.75H14.77C14.5156 15.75 14.2638 15.8001 14.0288 15.8974C13.7939 15.9947 13.5804 16.1374 13.4005 16.3172C13.2207 16.4971 13.078 16.7106 12.9807 16.9455C12.8834 17.1805 12.8333 17.4323 12.8333 17.6867C12.8317 18.0575 12.9392 18.4206 13.1425 18.7308L17.5466 25.585C17.7928 25.9679 18.1311 26.2829 18.5307 26.501C18.9302 26.7192 19.3781 26.8335 19.8333 26.8335C20.2885 26.8335 20.7364 26.7192 21.1359 26.501C21.5355 26.2829 21.8738 25.9679 22.12 25.585L26.5241 18.7308C26.7274 18.4206 26.8349 18.0575 26.8333 17.6867C26.8333 17.4323 26.7832 17.1805 26.6859 16.9455C26.5886 16.7106 26.4459 16.4971 26.2661 16.3172C26.0862 16.1374 25.8727 15.9947 25.6378 15.8974C25.4028 15.8001 25.151 15.75 24.8966 15.75Z"
                        fill="#FF720D"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-black fs-32 font-w600 mb-0">
                      {orderChart && orderChart.value}{" "}
                      <span className="text-success fs-18 font-w500">
                        {orderChart && orderChart.overview}%
                      </span>
                    </h2>
                    <p className="mb-0 text-black font-w500">
                      {orderChart && orderChart.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                {orderChart && (
                  <div id="widgetChart1" className="dashboard-chart">
                    <OrderChart data={orderChart && orderChart.data} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xxl-6 col-sm-6">
            <div className="card">
              <div className="card-header media border-0 pb-0">
                <div className="media-body d-flex">
                  <div className="mr-4 mt-1">
                    <svg
                      className="card-ico"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4608 12.0692C17.0158 9.47919 16.835 5.09253 14.0816 2.72419C11.5733 0.56586 7.67079 0.711693 5.32579 3.12086C3.06246 5.44253 2.95163 9.12919 4.87079 11.5442C7.15746 14.4259 11.7716 14.7875 14.4608 12.0692Z"
                        fill="#FF720D"
                      />
                      <path
                        d="M4.08329 26.8334H15.75C17.78 26.8334 18.6958 25.025 18.7191 23.2342C18.7541 20.615 17.7216 17.9259 15.7091 16.1992C12.0866 13.0025 6.55663 13.3409 3.35996 16.9634C1.60996 18.9467 1.16663 21.3559 1.16663 23.9167C1.16663 25.5267 2.47329 26.8334 4.08329 26.8334Z"
                        fill="#FF720D"
                      />
                      <path
                        d="M25.0833 7.58333C25.0891 2.94 19.5999 0.145831 15.8374 2.85833C18.0541 5.6175 18.0541 9.54916 15.8374 12.3083C15.7849 12.3725 16.9983 12.9092 17.0916 12.9442C20.7024 14.4433 25.0774 11.5208 25.0833 7.58333Z"
                        fill="#FF720D"
                      />
                      <path
                        d="M19.25 13.4167C17.8908 13.4167 16.555 13.79 15.3825 14.4842C15.5983 14.3559 16.9808 15.7909 17.15 15.9775C18.8416 17.78 19.8333 20.2592 19.8333 22.75V23.9167C19.8333 24.7508 19.5766 25.5675 19.0983 26.25H23.9166C25.5266 26.25 26.8333 24.9433 26.8333 23.3333C26.8333 21.2625 26.9383 19.2617 25.9175 17.3833C25.0891 15.8609 23.7358 14.6475 22.1375 13.9825C21.2216 13.6092 20.2358 13.4167 19.25 13.4167Z"
                        fill="#FF720D"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-black fs-32 font-w600 mb-0">
                      {customerChart && customerChart.value}{" "}
                      <span className="text-danger fs-18 font-w500">
                        {customerChart && customerChart.overview}%
                      </span>
                    </h2>
                    <p className="mb-0 text-black font-w500">
                      {customerChart && customerChart.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                {customerChart && (
                  <div id="widgetChart2" className="dashboard-chart">
                    <CustomersChart
                      data={customerChart && customerChart.data}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-xxl-12">
            <div className="card">
              <div className="card-header media border-0 pb-0">
                <div className="media-body d-flex">
                  <div className="mr-4 mt-1">
                    <svg
                      className="card-ico"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.9167 10.5H4.08335C2.47252 10.5 1.16669 11.8058 1.16669 13.4167V14.5833C1.16669 16.1942 2.47252 17.5 4.08335 17.5H23.9167C25.5275 17.5 26.8334 16.1942 26.8334 14.5833V13.4167C26.8334 11.8058 25.5275 10.5 23.9167 10.5Z"
                        fill="#FF720D"
                      />
                      <path
                        d="M23.9167 19.8334H4.08335C2.47252 19.8334 1.16669 21.1392 1.16669 22.75V23.9167C1.16669 25.5275 2.47252 26.8334 4.08335 26.8334H23.9167C25.5275 26.8334 26.8334 25.5275 26.8334 23.9167V22.75C26.8334 21.1392 25.5275 19.8334 23.9167 19.8334Z"
                        fill="#FF720D"
                      />
                      <path
                        d="M23.9167 1.16669H4.08335C2.47252 1.16669 1.16669 2.47252 1.16669 4.08335V5.25002C1.16669 6.86085 2.47252 8.16669 4.08335 8.16669H23.9167C25.5275 8.16669 26.8334 6.86085 26.8334 5.25002V4.08335C26.8334 2.47252 25.5275 1.16669 23.9167 1.16669Z"
                        fill="#FF720D"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-black fs-32 font-w600 mb-0">
                      {menuChart && menuChart.value}
                    </h2>
                    <p className="mb-0 text-black font-w500">
                      {menuChart && menuChart.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                {menuChart && (
                  <div id="widgetChart3" className="dashboard-chart">
                    <Menu data={menuChart && menuChart.data} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <Tab.Container defaultActiveKey="Monthly">
              <div className="card">
                <div className="card-header pb-0 flex-wrap border-0">
                  <div className="separator mb-3" />
                  <div className="mr-auto mb-3">
                    <h4 className="text-black fs-20">
                      {customerMapChart && customerMapChart.name}
                    </h4>
                    <p className="fs-13 mb-0">
                      {customerMapChart && customerMapChart.subHeading}
                    </p>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="custom-control custom-switch toggle-switch text-right mr-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch11"
                      />
                      <label
                        className="custom-control-label fs-14 text-black pr-2"
                        htmlFor="customSwitch11"
                      >
                        Number
                      </label>
                    </div>
                    <div className="custom-control custom-switch toggle-switch text-right mr-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch12"
                      />
                      <label
                        className="custom-control-label fs-14 text-black pr-2"
                        htmlFor="customSwitch12"
                      >
                        Analytics
                      </label>
                    </div>
                  </div>
                  <div className="card-tabs mb-3">
                    <Nav as="ul" className="nav nav-tabs" role="tablist">
                      <Nav.Item as="li">
                        <Nav.Link as="a" eventKey="Monthly">
                          Monthly
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" eventKey="Weekly">
                          Weekly
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link as="a" eventKey="Today">
                          Today
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                {customerChart && (
                  <Tab.Content className="card-body tab-content pb-0">
                    <Tab.Pane eventKey="Monthly">
                      <div id="customerMap" className="customer-chart">
                        <CustomerMap1
                          data={
                            customerMapChart && customerMapChart.data.monthly
                          }
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Weekly">
                      <div id="customerMap2" className="customer-chart">
                        <CustomerMap2
                          data={
                            customerMapChart && customerMapChart.data.monthly
                          }
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Today">
                      <div id="customerMap3" className="customer-chart">
                        <CustomerMap3
                          data={
                            customerMapChart && customerMapChart.data.monthly
                          }
                        />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </div>
            </Tab.Container>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header border-0 flex-wrap pb-0">
                <div className="d-flex mb-3">
                  <div className="separator" />
                  <div className="mr-auto">
                    <h4 className="text-black fs-20">
                      {orderRequest && orderRequest.name}
                    </h4>
                    <p className="fs-13 mb-0">
                      {orderRequest && orderRequest.subHeading}
                    </p>
                  </div>
                </div>
                <select className="btn dropdown-toggle text-primary btn-outline-primary c-pointer cd">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table order-request">
                    <tbody
                      className="loadmore-content"
                      id="orderRequestContent"
                    >
                      {orderRequest &&
                        orderRequest.data.map((d, i) => (
                          <tr
                            key={i}
                            className={`${i + 1 > numberOfShow && "d-none"}`}
                          >
                            <td>
                              <div className="media align-items-center">
                                <img
                                  className="mr-3 "
                                  width={87}
                                  src={d.img}
                                  alt="DexignZone"
                                />
                                <div className="media-body">
                                  <h5 className="mt-0 mb-2">
                                    <Link href="/apps/ecom/product-detail">
                                      <a className="text-black">{d.title}</a>
                                    </Link>
                                  </h5>
                                  <p className="mb-0 text-primary">
                                    #{d.serialNumber}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h5 className="mb-2 text-black wspace-no">
                                {d.author}
                              </h5>
                              <p className="mb-0">{d.location}</p>
                            </td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">
                                  ${d.price}
                                </h4>
                                <p className="mb-0 fs-20 d-inline-block">
                                  x{d.numberOfOrder}
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link href="">
                                  <a className={`btn text-${d.statusColor}`}>
                                    {d.status}
                                  </a>
                                </Link>
                                <Dropdown className="dropdown ml-auto">
                                  <Dropdown.Toggle
                                    variant=""
                                    as="a"
                                    className="btn-link i-false c-pointer"
                                    data-toggle="dropdown"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
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
                                  <Dropdown.Menu
                                    alignRight={true}
                                    className="dropdown-menu dropdown-menu-right"
                                  >
                                    <Link href="">
                                      <a className="dropdown-item text-black">
                                        Accept order
                                      </a>
                                    </Link>
                                    <Link href="">
                                      <a className="dropdown-item text-black">
                                        Reject order
                                      </a>
                                    </Link>
                                    <Link href="">
                                      <a className="dropdown-item text-black">
                                        View Details
                                      </a>
                                    </Link>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="card-footer border-0 pt-0 text-center">
                    <a
                      className="btn btn-outline-primary dz-load-more"
                      id="orderRequest"
                      href="javascript:void(0);"
                      onClick={() => onClick()}
                    >
                      View More {refresh && <i className="fa fa-refresh" />}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapSateToProps = (state) => ({
  dailyTargetChart: state.dashboard.dailyTargetChart,
  orderChart: state.dashboard.orderChart,
  customerChart: state.dashboard.customerChart,
  menuChart: state.dashboard.menuChart,
  customerMapChart: state.dashboard.customerMapChart,
  trendingMenu: state.dashboard.trendingMenu,
  orderRequest: state.dashboard.orderRequest,
});

export default connect(mapSateToProps, { pageTitle, getDashboardData })(Index);

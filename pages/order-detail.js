import Link from "next/link";
import { Fragment, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import {
  deleteOrderDetailsItem,
  getOrderDetailPage,
} from "../src/redux/action/dashboard";
import { moodChange, pageTitle } from "../src/redux/action/utils";
import DonutChart from "../src/uena/orderDetail/DonutChart";
const OrderDetails = ({
  getOrderDetailPage,
  orderDetails,
  pageTitle,
  orderDetailItems,
  deleteOrderDetailsItem,
}) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    getOrderDetailPage();
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Order Detail");
  }, []);
  return (
    <Fragment>
      <div className="d-flex mb-3 mb-lg-4 align-items-center">
        <div className="mr-auto d-none d-lg-block">
          <div className="d-flex flex-wrap align-items-center">
            <h3 className="text-black font-w600 mb-0 fs-28 mr-5">
              #{orderDetails && orderDetails.profile && orderDetails.id}
            </h3>
            <div className="d-flex">
              <Link href="">
                <a className="mb-0 text-black font-w500 fs-18">Orders/ </a>
              </Link>

              <Link href="">
                <a className="mb-0 font-w400 fs-18 ml-2"> Order Detaills </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Link href="">
            <a className="btn btn-outline-danger text-nowrap rounded-0 mr-3 ">
              Cancel Order
            </a>
          </Link>

          <Dropdown className="dropdown">
            <Dropdown.Toggle
              variant=""
              className="btn btn-success dropdown-toggle d-block text-white rounded-0"
            >
              <svg
                className="mr-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7576 15.8041H16.5252C16.4832 16.2551 16.1031 16.6094 15.6414 16.6094C15.1797 16.6094 14.7995 16.2551 14.7576 15.8041ZM8.32598 16.6094C8.78766 16.6094 9.16781 16.2551 9.20977 15.8041H7.4422C7.48411 16.2551 7.86427 16.6094 8.32598 16.6094ZM6.11719 14.6791H13.0004V8.56444V7.39064H6.11719V14.6791ZM24 12C24 18.6168 18.6168 24 12 24C5.38317 24 0 18.6168 0 12C0 5.38317 5.38317 0 12 0C18.6168 0 24 5.38317 24 12ZM19.0078 11.7096C19.0078 11.5545 18.9782 11.4095 18.9172 11.2662L17.844 8.73923C17.6538 8.29134 17.2027 8.00194 16.695 8.00194H14.1254V6.82814C14.1254 6.5175 13.8735 6.26564 13.5629 6.26564H5.55469C5.24405 6.26564 4.99219 6.5175 4.99219 6.82814V15.2416C4.99219 15.5523 5.24405 15.8041 5.55469 15.8041H6.31509C6.35873 16.8758 7.24378 17.7344 8.32598 17.7344C9.40819 17.7344 10.2932 16.8758 10.3369 15.8041H13.6305C13.6741 16.8758 14.5592 17.7344 15.6414 17.7344C16.7236 17.7344 17.6086 16.8758 17.6523 15.8041H18.4453C18.756 15.8041 19.0078 15.5523 19.0078 15.2416V11.7096ZM16.8086 9.17906C16.7923 9.14067 16.7392 9.12694 16.695 9.12694H14.1254V14.6791H17.8828V11.7096C17.8828 11.709 17.8828 11.7087 17.8829 11.7086C17.8825 11.7077 17.8822 11.7069 17.8818 11.706L16.8086 9.17906Z"
                  fill="white"
                />
              </svg>
              Delivered
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-left">
              <a className="dropdown-item" href="#">
                A To Z List
              </a>
              <a className="dropdown-item" href="#">
                Z To A List
              </a>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-xxl-4">
          <div className="row">
            <div className="col-xl-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="text-center order-media">
                    <img
                      src={
                        orderDetails &&
                        orderDetails.profile &&
                        orderDetails.profile.customar.img
                      }
                      alt=""
                    />
                    <div>
                      <h4 className="text-black mb-3 font-w600">
                        {orderDetails &&
                          orderDetails.profile &&
                          orderDetails.profile.customar.name}
                      </h4>
                      <Link href="">
                        <a className="btn btn-outline-primary btn-sm">
                          Customer
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body border-bottom">
                  <div className="media align-items-center">
                    <svg
                      className="mr-4"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.9993 17.4712V20.7831C23.0006 21.0906 22.9375 21.3949 22.814 21.6766C22.6906 21.9583 22.5096 22.2112 22.2826 22.419C22.0556 22.6269 21.7876 22.7851 21.4958 22.8836C21.2039 22.9821 20.8947 23.0187 20.5879 22.991C17.1841 22.6219 13.9145 21.4611 11.0418 19.6019C8.36914 17.9069 6.10319 15.6455 4.40487 12.9781C2.53545 10.0981 1.37207 6.81909 1.00898 3.40674C0.981336 3.10146 1.01769 2.79378 1.11572 2.50329C1.21376 2.2128 1.37132 1.94586 1.57839 1.71947C1.78546 1.49308 2.03749 1.31221 2.31843 1.18836C2.59938 1.06451 2.90309 1.0004 3.21023 1.00011H6.52869C7.06551 0.994834 7.58594 1.18456 7.99297 1.53391C8.4 1.88326 8.66586 2.36841 8.74099 2.89892C8.88106 3.9588 9.14081 4.99946 9.5153 6.00106C9.66413 6.39619 9.69634 6.82562 9.60812 7.23847C9.51989 7.65131 9.31494 8.03026 9.01753 8.33042L7.61272 9.73245C9.18739 12.4963 11.4803 14.7847 14.2496 16.3562L15.6545 14.9542C15.9552 14.6574 16.3349 14.4528 16.7486 14.3648C17.1622 14.2767 17.5925 14.3089 17.9884 14.4574C18.992 14.8312 20.0348 15.0904 21.0967 15.2302C21.6341 15.3058 22.1248 15.576 22.4756 15.9892C22.8264 16.4024 23.0128 16.9298 22.9993 17.4712Z"
                        stroke="#566069"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4 className="mb-0 text-black">
                      {orderDetails &&
                        orderDetails.profile &&
                        orderDetails.profile.customar.phn}
                    </h4>
                  </div>
                </div>
                <div className="card-body border-bottom">
                  <div className="media align-items-center">
                    <svg
                      className="mr-4"
                      width={24}
                      height={24}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ minWidth: 24 }}
                    >
                      <path
                        d="M28 13.3333C28 22.6667 16 30.6667 16 30.6667C16 30.6667 4 22.6667 4 13.3333C4 10.1507 5.26428 7.09848 7.51472 4.84805C9.76516 2.59761 12.8174 1.33333 16 1.33333C19.1826 1.33333 22.2348 2.59761 24.4853 4.84805C26.7357 7.09848 28 10.1507 28 13.3333Z"
                        stroke="#3E4954"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33333 16 9.33333C13.7909 9.33333 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z"
                        stroke="#3E4954"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4 className="mb-0 text-black">
                      {orderDetails &&
                        orderDetails.profile &&
                        orderDetails.profile.customar.location}
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="text-black font-weight-bold mb-3 wspace-no">
                    Note Order
                  </h4>
                  <p>
                    {orderDetails &&
                      orderDetails.profile &&
                      orderDetails.profile.customar.orderNote}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-md-6">
              <div className="card">
                <div className="card-header border-0">
                  <h4 className="text-black font-w600">Delivery Guy</h4>
                </div>
                <div className="card-body">
                  <div className="text-center order-media">
                    <img src="images/profile/Untitled-1.jpg" alt="" />
                    <div>
                      <h4 className="mb-3 font-w600">
                        {orderDetails &&
                          orderDetails.profile &&
                          orderDetails.profile.delivery.name}
                      </h4>
                      <span className="fs-14 font-w400">
                        Join since{" "}
                        {orderDetails &&
                          orderDetails.profile &&
                          orderDetails.profile.delivery.joinDate}
                      </span>
                    </div>
                  </div>
                  <div className="order-social">
                    <ul className="d-flex justify-content-center">
                      <li>
                        <Link href="">
                          <a>
                            <i className="las la-phone" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <a href="">
                            <i className="las la-map-marker" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-xxl-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body p-0">
                  <div className="table-responsive order-list card-table">
                    <table className="table items-table table-responsive-lg">
                      <tbody>
                        <tr className="bg-primary">
                          <th className="text-black font-w500 fs-20">Items</th>
                          <th
                            style={{ width: "10%" }}
                            className="text-black font-w500 fs-20"
                          >
                            Qty
                          </th>
                          <th
                            style={{ width: "10%" }}
                            className="text-black font-w500 fs-20"
                          >
                            Price
                          </th>
                          <th className="my-0 text-black font-w500 fs-20 wspace-no d-md-none d-lg-table-cell">
                            Total Price
                          </th>
                          <th />
                        </tr>
                        {orderDetailItems &&
                          orderDetailItems.map((d, i) => (
                            <tr key={i}>
                              <td>
                                <div className="media">
                                  <a href="ecom-product-detail">
                                    <img
                                      className="mr-3 img-fluid rounded"
                                      src={d.img}
                                      alt="DexignZone"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <small className="mt-0 mb-1 font-w500">
                                      <Link href="">
                                        <a className="text-primary">
                                          {d.course.toUpperCase()}
                                        </a>
                                      </Link>
                                    </small>
                                    <h5 className="mt-0 mb-2 mb-4">
                                      <Link href="/apps/ecom/product-detail">
                                        <a className="text-black">{d.title}</a>
                                      </Link>
                                    </h5>
                                    <div className="star-review fs-14">
                                      <i
                                        className={`fa fa-star ${
                                          d.rating >= 1
                                            ? "text-orange"
                                            : "text-gray"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.rating >= 2
                                            ? "text-orange"
                                            : "text-gray"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.rating >= 3
                                            ? "text-orange"
                                            : "text-gray"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.rating >= 4
                                            ? "text-orange"
                                            : "text-gray"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.rating >= 5
                                            ? "text-orange"
                                            : "text-gray"
                                        }`}
                                      />{" "}
                                      <span className="ml-3 text-dark">
                                        ({d.review} reviews)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h4 className="my-0  font-w600">{d.qty}x</h4>
                              </td>
                              <td>
                                <h4 className="my-0  font-w600">${d.price}</h4>
                              </td>
                              <td className="d-md-none d-lg-table-cell">
                                <h4 className="my-0  font-w600">
                                  ${Number(d.price) * Number(d.qty)}
                                </h4>
                              </td>
                              <td>
                                <a
                                  onClick={() => deleteOrderDetailsItem(i)}
                                  className="ti-close c-pointer fs-28 text-danger las la-times-circle"
                                />
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="widget-timeline-icon">
                  <ul className="timeline">
                    {orderDetails &&
                      orderDetails.orderProcess &&
                      orderDetails.orderProcess.map((p, i) => (
                        <li key={i} className={i === 2 ? "border-success" : ""}>
                          <div className={`icon bg-${p.icon}`} />
                          <a className="timeline-panel text-muted" href="#">
                            <h4 className="mb-2 mt-0">{p.name}</h4>
                            <p className="fs-14 mb-0 ">{p.time}</p>
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6 col-xxl-12">
                  <div className="card map-card">
                    <div className="card-header">
                      <div>
                        <h4 className="text-black font-w600 mb-0">
                          Track Orders
                        </h4>
                        <span className="fs-12">Lorem ipsum dolor sit</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <img src="images/map.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-12">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h4 className="text-black font-w600">
                        Customer Favourite
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        {orderDetails &&
                          orderDetails.customarFvt &&
                          orderDetails.customarFvt.map((d, i) => (
                            <div className="col-sm-6" key={i}>
                              <div className="text-center p-3">
                                <div className="d-inline-block position-relative donut-chart-sale mb-2">
                                  <DonutChart
                                    backgroundColor={d.color}
                                    value={d.value}
                                  />
                                  <small className="text-black">
                                    {d.value}%
                                  </small>
                                </div>
                                <h4 className="fs-18 font-w600 text-black mb-0">
                                  {d.name}
                                </h4>
                                <span className="fs-14 d-block">
                                  {d.menus} menus
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orderDetails: state.dashboard.orderDetail,
  orderDetailItems: state.dashboard.orderDetailItems,
});
export default connect(mapStateToProps, {
  getOrderDetailPage,
  pageTitle,
  deleteOrderDetailsItem,
})(OrderDetails);

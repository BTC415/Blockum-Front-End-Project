import { Fragment, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../../src/components/PageTitle";
import Table from "../../../src/components/Table";
import { allOrder } from "../../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../../src/redux/action/utils";
const ProductOrder = ({ pageTitle, allOrder, orderList }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Product Order");
    allOrder();
  }, []);

  const classNameAdd = (value) => {
    let className =
      value === "completed"
        ? "success"
        : value === "processing"
        ? "primary"
        : value === "hold"
        ? "secondary"
        : "warning";
    let icon =
      value === "completed" ? "check" : value === "hold" ? "ban" : "d-none";
    return { className, icon };
  };

  return (
    <Fragment>
      <PageTitle_ active="Product Order" mother="Layout" customText={true} />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <Table
              tableId="#orders tr"
              sort={9999999999999999999}
              pagginationContainerId="d-none"
              checkBox={true}
              checkBoxAll=".custom-control-input"
              checkBoxMother="#checkAllOrder"
              pagginationContainerId="#d-none"
              numberCountId="#d-none-2"
            >
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-sm mb-0">
                    <thead>
                      <tr>
                        <th className="align-middle">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkAllOrder"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkAllOrder"
                            />
                          </div>
                        </th>
                        <th className="align-middle">Order</th>
                        <th className="align-middle pr-7">Date</th>
                        <th
                          className="align-middle"
                          style={{ minWidth: "12.5rem" }}
                        >
                          Ship To
                        </th>
                        <th className="align-middle text-right">Status</th>
                        <th className="align-middle text-right">Amount</th>
                        <th className="no-sort" />
                      </tr>
                    </thead>
                    <tbody id="orders">
                      {orderList &&
                        orderList.map((o, i) => (
                          <tr className="btn-reveal-trigger" key={i}>
                            <td className="py-2">
                              <div
                                className={`custom-control custom-checkbox checkbox-${
                                  classNameAdd(o.status).className
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id={`checkbox-${i}`}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={`checkbox-${i}`}
                                />
                              </div>
                            </td>
                            <td className="py-2">
                              <a href="#">
                                <strong>#{o.id}</strong>
                              </a>{" "}
                              by <strong>{o.customer.name}</strong>
                              <br />
                              <a href={`mailto:${o.customer.email}`}>
                                {o.customer.email}
                              </a>
                            </td>
                            <td className="py-2">{o.date}</td>
                            <td className="py-2">
                              {o.shipLocation.split("/n")[0]}
                              <p className="mb-0 text-500">
                                {o.shipLocation.split("/n")[1]}
                              </p>
                            </td>
                            <td className="py-2 text-right">
                              <span
                                className={`badge badge-${
                                  classNameAdd(o.status).className
                                }`}
                              >
                                {o.status}
                                <span
                                  className={`ml-1 fa fa-${
                                    classNameAdd(o.status).icon
                                  }`}
                                />
                              </span>
                            </td>
                            <td className="py-2 text-right">${o.price}</td>
                            <td className="py-2 text-right">
                              <Dropdown className="text-sans-serif">
                                <Dropdown.Toggle
                                  variant=""
                                  className="btn btn-primary i-false tp-btn-light sharp"
                                >
                                  <span>
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
                                  </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                  alignRight={true}
                                  className="border py-0"
                                >
                                  <div className="py-2">
                                    <a className="dropdown-item" href="#!">
                                      Completed
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      Processing
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      On Hold
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                      Pending
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
                                      className="dropdown-item text-danger"
                                      href="#!"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Table>
          </div>
        </div>
        <div id="d-none" className="d-none" />
        <div id="d-none-2" className="d-none" />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  orderList: state.apps.orderList,
});

export default connect(mapStateToProps, { pageTitle, allOrder })(ProductOrder);

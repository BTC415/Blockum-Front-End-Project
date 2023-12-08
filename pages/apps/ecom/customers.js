import Link from "next/link";
import { Fragment, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../../src/components/PageTitle";
import Table from "../../../src/components/Table";
import { getCustomers } from "../../../src/redux/action/apps";
import { moodChange, pageTitle } from "../../../src/redux/action/utils";
const Customers = ({ pageTitle, getCustomers, customerList }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Customers");
    getCustomers();
  }, []);
  return (
    <Fragment>
      <PageTitle_
        active="Customers"
        mother="Shop"
        customText={true}
        customText={true}
      />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <Table
                tableId="#app_customers tBody tr"
                sort={9999999999999999999}
                pagginationContainerId="d-none"
                checkBox={true}
                checkBoxAll="#customers_all input"
                checkBoxMother="#checkAll_customer"
                pagginationContainerId="#d-none"
                numberCountId="#d-none-2"
              >
                <div className="table-responsive">
                  <table
                    className="table table-sm mb-0 table-striped"
                    id="app_customers"
                  >
                    <thead>
                      <tr>
                        <th className=" pr-3">
                          <div className="custom-control custom-checkbox mx-2">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkAll_customer"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkAll_customer"
                            />
                          </div>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th className=" pl-5" style={{ minWidth: 200 }}>
                          Billing Address
                        </th>
                        <th>Joined</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody id="customers">
                      {customerList &&
                        customerList.map((customer, i) => (
                          <tr className="btn-reveal-trigger" key={i}>
                            <td className="py-2">
                              <div
                                className="custom-control custom-checkbox mx-2"
                                id="customers_all"
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
                            <td className="py-3">
                              <Link href="">
                                <a>
                                  <div className="media d-flex align-items-center">
                                    <div className="avatar avatar-xl mr-2">
                                      <div>
                                        <img
                                          className="rounded-circle img-fluid"
                                          src={customer.img}
                                          width={30}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="mb-0 fs--1">
                                        {customer.name}
                                      </h5>
                                    </div>
                                  </div>
                                </a>
                              </Link>
                            </td>
                            <td className="py-2">
                              <a href={`mailto:${customer.email}`}>
                                {customer.email}
                              </a>
                            </td>
                            <td className="py-2">
                              {" "}
                              <a href={`tel:${customer.phn}`}>{customer.phn}</a>
                            </td>
                            <td className="py-2 pl-5">{customer.location}</td>
                            <td className="py-2">{customer.join}</td>
                            <td className="py-2 text-right">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant=""
                                  as="button"
                                  className="btn btn-primary tp-btn-light sharp i-false"
                                >
                                  <span className="fs--1">
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
                                    <Link href="">
                                      <a className="dropdown-item">Edit</a>
                                    </Link>

                                    <Link href="">
                                      <a className="dropdown-item text-danger">
                                        Delete
                                      </a>
                                    </Link>
                                  </div>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div id="d-none" className="d-none" />
                <div id="d-none-2" className="d-none" />
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  customerList: state.apps.customerList,
});

export default connect(mapStateToProps, { pageTitle, getCustomers })(Customers);

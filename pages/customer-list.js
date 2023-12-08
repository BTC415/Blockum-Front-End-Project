import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import Table from "../src/components/Table";
import { getCustomerList } from "../src/redux/action/dashboard";
import { moodChange, pageTitle } from "../src/redux/action/utils";
import CustomerModal from "../src/uena/CustomerModal";
const CustomerList = ({ getCustomerList, pageTitle, customerList }) => {
  const [modal, setModal] = useState(false);
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    getCustomerList();
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Customers");
  }, []);
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [refreshToggle2, setRefreshToggle2] = useState(false);
  return (
    <div className="row">
      <CustomerModal modal={modal} modalChange={() => setModal(false)} />
      <div className="col-xl-12">
        <div className="d-flex flex-wrap mb-3">
          <Link href="">
            <a
              data-toggle="modal"
              data-target="#addContactModal"
              className="btn btn-outline-primary  mr-auto mb-2"
              onClick={() => setModal(true)}
            >
              Add New Customer
            </a>
          </Link>

          <Dropdown>
            <Dropdown.Toggle
              variant=""
              id="dropdown-basic"
              className="form-control border-0 c-pointer style-1 mr-3 p-1 default-select mb-3 border border-primary p-2 text-primary"
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#F9730D",
              }}
            >
              {refreshToggle2 ? refreshToggle2 : "Filter"}
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="dropdown-menu inner show"
              style={{ borderRadius: "10px" }}
            >
              <Dropdown.Item
                className="dropdown-item"
                onClick={() => setRefreshToggle2("Filter")}
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  margin: "0 auto",
                  paddingTop: "15px",
                }}
              >
                Filter
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                onClick={() => setRefreshToggle2("Date")}
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  margin: "0 auto",
                }}
              >
                Date
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant=""
              id="dropdown-basic2"
              className="form-control border-0 c-pointer style-1 mr-3 p-1 default-select mb-3 border border-primary p-2 text-primary"
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#F9730D",
              }}
            >
              {refreshToggle ? refreshToggle : "Newest"}
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="dropdown-menu inner show"
              style={{ borderRadius: "10px" }}
            >
              <Dropdown.Item
                className="dropdown-item"
                href="#/action-2"
                onClick={() => setRefreshToggle("Newest")}
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  margin: "0 auto",
                  paddingTop: "15px",
                }}
              >
                Newest
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item"
                href="#/action-2"
                onClick={() => setRefreshToggle("Oldest")}
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  margin: "0 auto",
                }}
              >
                Oldest
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="table-responsive">
          <Table
            tableId="#customerList tbody tr"
            sort={3}
            numberCountId="#customerList_info"
            pagginationContainerId="#customerList_paginate"
            // create
            pagginationClass="paginate_button c-pointer"
            previousBtnClass="paginate_button previous disabled c-pointer"
            nextBtnClass="paginate_button next disabled c-pointer"
            previousBtnId="customerList_previous"
            nextBtnId="customerList_next"
            pagginationId="customerList_paggination"
            activeClass="current"
            // CheckBox
            checkBox={true}
            checkBoxAll=".customerAllCheckBox input"
            checkBoxMother="#customerListCheckBoxAll"
          >
            <div
              id="dataTable1_wrapper"
              className="dataTables_wrapper no-footer "
            >
              <table
                id="customerList"
                className="display mb-4 dataTablesCard w-100 text-black customer-list-tbl dataTable no-footer"
              >
                <thead>
                  <tr className="bg-primary" role="row">
                    <th className="sorting_1 pl-0 pr-0 text-center no-data-img sorting_asc">
                      <div className="custom-control custom-checkbox ml-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customerListCheckBoxAll"
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customerListCheckBoxAll"
                        />
                      </div>
                    </th>
                    <th className="sorting">
                      <strong className="font-w600 wspace-no">
                        Customer ID
                      </strong>
                    </th>
                    <th className="sorting">
                      <strong className="font-w600 wspace-no">Join Date</strong>
                    </th>
                    <th className="sorting">
                      <strong className="font-w600 wspace-no">
                        Customer Name
                      </strong>
                    </th>
                    <th className="sorting">
                      <strong className="font-w600 wspace-no">Location</strong>
                    </th>
                    <th className="sorting">
                      <strong className="font-w600 wspace-no">
                        Total Spent
                      </strong>
                    </th>
                    <th className="sorting">
                      <strong className="font-w600 wspace-no">
                        Last Order
                      </strong>
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {customerList &&
                    customerList.map((d, i) => (
                      <tr role="row" className="odd" key={i}>
                        <td className="p-0 text-center sorting_1">
                          <div className="custom-control custom-checkbox ml-2 customerAllCheckBox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={`customCheckBox${i}`}
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`customCheckBox${i}`}
                            />
                          </div>
                        </td>
                        <td>#{d.orderId}</td>
                        <td>{d.date}</td>
                        <td>{d.CustomerName}</td>
                        <td>{d.location}</td>
                        <td>${d.totalSpent}</td>
                        <td>
                          <span className="font-w600">${d.lastOrder}</span>
                        </td>
                        <td>
                          <Dropdown className="ml-auto">
                            <Dropdown.Toggle
                              variant=""
                              className="btn-link i-false p-0"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                                  stroke="#3E4954"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                                  stroke="#3E4954"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                                  stroke="#3E4954"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight={true}>
                              <a className="dropdown-item text-black" href="#">
                                Accept order
                              </a>
                              <a className="dropdown-item text-black" href="#">
                                Reject order
                              </a>
                              <a className="dropdown-item text-black" href="#">
                                View Details
                              </a>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="d-sm-flex text-center justify-content-between align-items-center">
                <div
                  className="dataTables_info"
                  id="customerList_info"
                  role="status"
                  aria-live="polite"
                >
                  {/* Number add */}
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="customerList_paginate"
                >
                  {/* Paggination */}
                </div>
              </div>
            </div>
          </Table>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  customerList: state.dashboard.customerList,
});
export default connect(mapStateToProps, { getCustomerList, pageTitle })(
  CustomerList
);

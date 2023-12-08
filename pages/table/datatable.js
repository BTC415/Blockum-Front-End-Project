import { Fragment, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import Table from "../../src/components/Table";
import ProfileTableModal from "../../src/components/table/ProfileTableModal";
import {
  deleteProfileTable,
  getTableData,
} from "../../src/redux/action/tableAction";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const datatable = ({
  pageTitle,
  getTableData,
  basicTable,
  feeTable,
  patientTable,
  profileTable,
  deleteProfileTable,
}) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    getTableData();
    pageTitle("Datatable");
  }, []);
  const [profileModal, setProfileModal] = useState(false);
  const [profileDataForEdit, setProfileDataForEdit] = useState(null);
  return (
    <Fragment>
      <ProfileTableModal
        modal={profileModal}
        modalChange={() => {
          setProfileModal(false);
          setProfileDataForEdit(null);
        }}
        editData={profileDataForEdit}
        tableData={profileTable && profileTable}
      />
      <PageTitle_ active="Datatable" mother="Table" />
      <div className="row" id="dataTable">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Basic Datatable</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  tableId="#basicDataTable tbody tr"
                  sort={5}
                  numberCountId="#basic_paggination_info"
                  pagginationContainerId="#basic_paggination_containar"
                  // create
                  pagginationClass="paginate_button c-pointer"
                  previousBtnClass="paginate_button previous disabled c-pointer"
                  nextBtnClass="paginate_button next disabled c-pointer"
                  previousBtnId="basic_previous"
                  nextBtnId="basic_next"
                  pagginationId="basic_paggination"
                  activeClass="current"
                >
                  <div
                    id="example_wrapper"
                    className="dataTables_wrapper w-100 dataTable"
                  >
                    <table
                      id="basicDataTable"
                      className="display dataTable w-100"
                    >
                      <thead>
                        <tr role="row">
                          <th className="sorting">Name</th>
                          <th className="sorting">Position</th>
                          <th className="sorting">Office</th>
                          <th className="sorting">Age</th>
                          <th className="sorting">Start date</th>
                          <th className="sorting">Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        {basicTable &&
                          basicTable.map((table, i) => (
                            <tr key={i}>
                              <td>{table.name}</td>
                              <td>{table.position}</td>
                              <td>{table.office}</td>
                              <td>{table.age}</td>
                              <td>{table.date}</td>
                              <td>${table.salary}</td>
                            </tr>
                          ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                      <div
                        className="dataTables_info"
                        id="basic_paggination_info"
                      ></div>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="basic_paggination_containar"
                      ></div>
                    </div>
                  </div>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Datatable</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div id="example2_wrapper" className="dataTables_wrapper">
                  <div className="dataTables_scroll">
                    <div className="dataTables_scrollBody">
                      <table id="example2" className="display dataTable w-100">
                        <thead>
                          <tr role="row">
                            <th className="sorting_asc">
                              <div className="dataTables_sizing">Name</div>
                            </th>
                            <th className="sorting">
                              <div className="dataTables_sizing">Position</div>
                            </th>
                            <th className="sorting">
                              <div className="dataTables_sizing">Office</div>
                            </th>
                            <th className="sorting">
                              <div className="dataTables_sizing">Age</div>
                            </th>
                            <th className="sorting">
                              <div className="dataTables_sizing">
                                Start date
                              </div>
                            </th>
                            <th className="sorting">
                              <div className="dataTables_sizing">Salary</div>
                            </th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>
                              <div className="dataTables_sizing">Name</div>
                            </th>
                            <th>
                              <div className="dataTables_sizing">Position</div>
                            </th>
                            <th>
                              <div className="dataTables_sizing">Office</div>
                            </th>
                            <th>
                              <div className="dataTables_sizing">Age</div>
                            </th>
                            <th>
                              <div className="dataTables_sizing">
                                Start date
                              </div>
                            </th>
                            <th>
                              <div className="dataTables_sizing">Salary</div>
                            </th>
                          </tr>
                        </tfoot>
                        <tbody>
                          {basicTable &&
                            basicTable.map((table, i) => (
                              <tr key={i}>
                                <td>{table.name}</td>
                                <td>{table.position}</td>
                                <td>{table.office}</td>
                                <td>{table.age}</td>
                                <td>{table.date}</td>
                                <td>${table.salary}</td>
                              </tr>
                            ))}
                          {basicTable &&
                            basicTable.map((table, i) => (
                              <tr key={i}>
                                <td>{table.name}</td>
                                <td>{table.position}</td>
                                <td>{table.office}</td>
                                <td>{table.age}</td>
                                <td>{table.date}</td>
                                <td>${table.salary}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Profile Datatable</h4>
            </div>
            <div className="card-body">
              <Table
                tableId="#profileDataTable tbody tr"
                sort={5}
                numberCountId="#profile_paggination_info"
                pagginationContainerId="#profile_paggination_containar"
                // create
                pagginationClass="paginate_button c-pointer"
                previousBtnClass="paginate_button previous disabled c-pointer"
                nextBtnClass="paginate_button next disabled c-pointer"
                previousBtnId="profile_previous"
                nextBtnId="profile_next"
                pagginationId="profile_paggination"
                activeClass="current"
              >
                <div className="table-responsive">
                  <div
                    id="profileDataTable"
                    className="dataTables_wrapper no-footer"
                  >
                    <table
                      id="example3"
                      className="display dataTable no-footer w-100"
                    >
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc" />
                          <th className="sorting">Name</th>
                          <th className="sorting">Department</th>
                          <th className="sorting">Gender</th>
                          <th className="sorting">Education</th>
                          <th className="sorting">Mobile</th>
                          <th className="sorting">Email</th>
                          <th className="sorting">Joining Date</th>
                          <th className="sorting">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {profileTable &&
                          profileTable.map((table, i) => (
                            <tr role="row" className="odd" key={i}>
                              <td className="sorting_1">
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  height={35}
                                  src={table.img}
                                  alt=""
                                />
                              </td>
                              <td>{table.name}</td>
                              <td>{table.department}</td>
                              <td>{table.gender}</td>
                              <td>{table.education}</td>
                              <td>
                                <a href="javascript:void(0);">
                                  <strong>{table.mobile}</strong>
                                </a>
                              </td>
                              <td>
                                <a href="javascript:void(0);">
                                  <strong>{table.email}</strong>
                                </a>
                              </td>
                              <td>{table.date}</td>
                              <td>
                                <div className="d-flex">
                                  <a
                                    href="javascript:void(0);"
                                    className="btn btn-primary shadow btn-xs sharp mr-1"
                                    onClick={() => {
                                      setProfileDataForEdit({
                                        id: i,
                                        table,
                                      });
                                      setProfileModal(true);
                                    }}
                                  >
                                    <i className="fa fa-pencil" />
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="btn btn-danger shadow btn-xs sharp"
                                    onClick={() => deleteProfileTable(i)}
                                  >
                                    <i className="fa fa-trash" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                      <div
                        className="dataTables_info"
                        id="profile_paggination_info"
                      ></div>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="profile_paggination_containar"
                      ></div>
                    </div>
                  </div>
                </div>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Fees Collection</h4>
            </div>
            <div className="card-body">
              <Table
                tableId="#feeTasble tbody tr"
                sort={5}
                numberCountId="#fee_paggination_info"
                pagginationContainerId="#fee_paggination_containar"
                // create
                pagginationClass="paginate_button c-pointer"
                previousBtnClass="paginate_button previous disabled c-pointer"
                nextBtnClass="paginate_button next disabled c-pointer"
                previousBtnId="fee_previous"
                nextBtnId="fee_next"
                pagginationId="fee_paggination"
                activeClass="current"
              >
                <div className="table-responsive">
                  <div
                    id="example4_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table
                      id="feeTasble"
                      className="display dataTable no-footer w-100"
                    >
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc">Roll No</th>
                          <th className="sorting">Student Name</th>
                          <th className="sorting">Invoice number</th>
                          <th className="sorting">Fees Type </th>
                          <th className="sorting">Payment Type </th>
                          <th className="sorting">Status </th>
                          <th className="sorting">Date</th>
                          <th className="sorting">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeTable &&
                          feeTable.map((table, i) => (
                            <tr role="row" className="odd" key={i}>
                              <td className="sorting_1">{table.roll}</td>
                              <td>{table.name}</td>
                              <td>#{table.invoiceNumber}</td>
                              <td>{table.feeType}</td>
                              <td>{table.paymentType}</td>
                              <td>
                                <span
                                  className={`badge light badge-${table.status.color}`}
                                >
                                  {table.status.text}
                                </span>
                              </td>
                              <td>{table.date}</td>
                              <td>
                                <strong>{table.price}$</strong>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                      <div
                        className="dataTables_info"
                        id="fee_paggination_info"
                      ></div>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="fee_paggination_containar"
                      ></div>
                    </div>
                  </div>
                </div>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Patient</h4>
            </div>
            <div className="card-body">
              <Table
                tableId="#patientDataTable tbody tr"
                sort={5}
                numberCountId="#patient_paggination_info"
                pagginationContainerId="#patient_paggination_containar"
                // create
                pagginationClass="paginate_button c-pointer"
                previousBtnClass="paginate_button previous disabled c-pointer"
                nextBtnClass="paginate_button next disabled c-pointer"
                previousBtnId="patient_previous"
                nextBtnId="patient_next"
                pagginationId="patient_paggination"
                activeClass="current"
                checkBox={true}
                checkBoxMother="#patient_checkAll"
                checkBoxAll="#patient_checkbox input"
              >
                <div className="table-responsive">
                  <div
                    id="example5_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table
                      id="patientDataTable"
                      className="display dataTable no-footer w-100"
                    >
                      <thead>
                        <tr role="row">
                          <th className="sorting_asc">
                            <div className="custom-control custom-checkbox ml-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="patient_checkAll"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="patient_checkAll"
                              />
                            </div>
                          </th>
                          <th className="sorting">Patient ID</th>
                          <th className="sorting">Date Check in</th>
                          <th className="sorting">Patient Name</th>
                          <th className="sorting">Doctor Assgined</th>
                          <th className="sorting">Disease</th>
                          <th className="sorting">Status</th>
                          <th className="sorting">Room no</th>
                          <th className="sorting">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patientTable &&
                          patientTable.map((table, i) => (
                            <tr role="row" className="even" key={i}>
                              <td className="sorting_1">
                                <div
                                  className="custom-control custom-checkbox ml-2"
                                  id="patient_checkbox"
                                >
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
                              <td>#{table.id}</td>
                              <td>{table.date}</td>
                              <td>{table.name}</td>
                              <td>{table.assgined}</td>
                              <td>{table.disease}</td>
                              <td>
                                <span
                                  className={`badge light badge-${table.status.color}`}
                                >
                                  <i
                                    className={`fa fa-circle text-${table.status.color} mr-1`}
                                  />
                                  {table.status.text}
                                </span>
                              </td>
                              <td>{table.roomNo}</td>
                              <td>
                                <Dropdown className="ml-auto text-right">
                                  <Dropdown.Toggle
                                    as="a"
                                    variant=""
                                    className="btn-link i-false c-pointer"
                                  >
                                    <svg
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
                                    <Dropdown.Item>
                                      Accept Patient
                                    </Dropdown.Item>
                                    <Dropdown.Item>Reject Order</Dropdown.Item>
                                    <Dropdown.Item>View Details</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                      <div
                        className="dataTables_info"
                        id="patient_paggination_info"
                      ></div>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="patient_paggination_containar"
                      ></div>
                    </div>
                  </div>
                </div>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  basicTable: state.table.basic,
  feeTable: state.table.fees,
  patientTable: state.table.patient,
  profileTable: state.table.profile,
});

export default connect(mapStateToProps, {
  pageTitle,
  getTableData,
  deleteProfileTable,
})(datatable);

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import Table from "../../src/components/Table";
import BorderedTableModal from "../../src/components/table/BorderedTableModal";
import ExamToppersModal from "../../src/components/table/ExamToppersModal";
import RecentPaymentsQueueModal from "../../src/components/table/RecentPaymentsQueueModal";
import TableStrippedModal from "../../src/components/table/TableStrippedModal";
import {
  deleteBorderTable,
  deleteExamToppers,
  deleteRecentPayment,
  deleteStrippedTable,
  getBsTableData,
} from "../../src/redux/action/tableAction";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const Bootstrap = ({
  pageTitle,
  getBsTableData,
  bsTables,
  recentPayment,
  examTopper,
  borderTable,
  tableStripped,
  // Delete
  deleteRecentPayment,
  deleteExamToppers,
  deleteBorderTable,
  deleteStrippedTable,
}) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Table");
    getBsTableData();
  }, []);
  const [recentPaymentData, setRecentPaymentData] = useState(false);
  const [examToppermodal, setExamToppermodal] = useState(false);
  const [borderTableModal, setBorderTableModal] = useState(false);
  const [tableStrippedModal, setTableStrippedModal] = useState(false);
  const [editAble, setEditAble] = useState(null);
  return (
    <Fragment>
      <PageTitle_ active="Bootstrap" mother="Table" customText={true} />
      <RecentPaymentsQueueModal
        modalChange={() => setRecentPaymentData(false)}
        modal={recentPaymentData}
        editData={editAble}
      />
      <ExamToppersModal
        modalChange={() => setExamToppermodal(false)}
        modal={examToppermodal}
        editData={editAble}
      />
      <BorderedTableModal
        modalChange={() => setBorderTableModal(false)}
        modal={borderTableModal}
        editData={editAble}
      />
      <TableStrippedModal
        modalChange={() => setTableStrippedModal(false)}
        modal={tableStrippedModal}
        editData={editAble}
      />

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Recent Payments Queue</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-responsive-md">
                  <thead>
                    <tr>
                      <th style={{ width: 80 }}>
                        <strong>#</strong>
                      </th>
                      <th>
                        <strong>PATIENT</strong>
                      </th>
                      <th>
                        <strong>DR NAME</strong>
                      </th>
                      <th>
                        <strong>DATE</strong>
                      </th>
                      <th>
                        <strong>STATUS</strong>
                      </th>
                      <th>
                        <strong>PRICE</strong>
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {recentPayment &&
                      recentPayment.map((table, i) => (
                        <tr key={i}>
                          <td>
                            <strong>{table.id}</strong>
                          </td>
                          <td>{table.name}</td>
                          <td>{table.drName}</td>
                          <td>{table.date}</td>
                          <td>
                            <span
                              className={`badge light badge-${table.color}`}
                            >
                              {table.status}
                            </span>
                          </td>
                          <td>${table.price}</td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                as="button"
                                className={`btn btn-${table.color} i-false light sharp`}
                              >
                                <svg
                                  width="20px"
                                  height="20px"
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
                              <Dropdown.Menu>
                                <Dropdown.Item
                                  onClick={() => {
                                    setEditAble({ table, id: i });
                                    setRecentPaymentData(true);
                                  }}
                                >
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => deleteRecentPayment(i)}
                                >
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Exam Toppers</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Table
                  tableId="#bs-table tbody tr"
                  sort={9999999999999999999}
                  pagginationContainerId="d-none"
                  checkBox={true}
                  checkBoxAll="#bs_customers_all input"
                  checkBoxMother="#bs-checkAll"
                  pagginationContainerId="#d-none"
                  numberCountId="#d-none-2"
                >
                  <table className="table table-responsive-md" id="bs-table">
                    <thead>
                      <tr>
                        <th style={{ width: 50 }}>
                          <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="bs-checkAll"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="bs-checkAll"
                            />
                          </div>
                        </th>
                        <th>
                          <strong>ROLL NO.</strong>
                        </th>
                        <th>
                          <strong>NAME</strong>
                        </th>
                        <th>
                          <strong>Email</strong>
                        </th>
                        <th>
                          <strong>Date</strong>
                        </th>
                        <th>
                          <strong>Status</strong>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="bs_customers_all">
                      {examTopper &&
                        examTopper.map((table, i) => (
                          <tr key={i}>
                            <td>
                              <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
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
                            <td>
                              <strong>{table.roll}</strong>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={table.img}
                                  className="rounded-lg mr-2"
                                  width={24}
                                  alt=""
                                />{" "}
                                <span className="w-space-no">{table.name}</span>
                              </div>
                            </td>
                            <td>{table.email}</td>
                            <td>{table.date}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <i
                                  className={`fa fa-circle text-${table.color} mr-1`}
                                />{" "}
                                {table.status}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex">
                                <Link href="javascript:void(0)">
                                  <a
                                    className="btn btn-primary shadow btn-xs sharp mr-1"
                                    onClick={() => {
                                      setEditAble({ table, id: i });
                                      setExamToppermodal(true);
                                    }}
                                  >
                                    <i className="fa fa-pencil" />
                                  </a>
                                </Link>
                                <Link href="javascript:void(0)">
                                  <a
                                    className="btn btn-danger shadow btn-xs sharp"
                                    onClick={() => deleteExamToppers(i)}
                                  >
                                    <i className="fa fa-trash" />
                                  </a>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div id="d-none" className="d-none" />
                  <div id="d-none-2" className="d-none" />
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Basic</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-responsive-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.basic.map((table, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{table.name}</td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.status}
                            </span>
                          </td>
                          <td>{table.date}</td>
                          <td className="color-primary">${table.price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Table Striped</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-responsive-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.basic.map((table, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{table.name}</td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.status}
                            </span>
                          </td>
                          <td>{table.date}</td>
                          <td className="color-primary">${table.price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Table Bordered</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-responsive-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.basic.map((table, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{table.name}</td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.status}
                            </span>
                          </td>
                          <td>{table.date}</td>
                          <td className="color-primary">${table.price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Table Hover</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-responsive-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.basic.map((table, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{table.name}</td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.status}
                            </span>
                          </td>
                          <td>{table.date}</td>
                          <td className="color-primary">${table.price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /# card */}
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Hover Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table header-border table-hover verticle-middle">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.hoverTable.map((table, i) => (
                        <tr>
                          <th>{i + 1}</th>
                          <td>{table.name}</td>
                          <td>
                            <div
                              className="progress"
                              style={{ background: table.progressbar }}
                            >
                              <div
                                className={`progress-bar bg-${
                                  table.color.split(" ")[0]
                                }`}
                                style={{ width: `${table.value}%` }}
                                role="progressbar"
                              >
                                <span className="sr-only">
                                  {table.value}% Complete
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.value}%
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Bordered Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered verticle-middle table-responsive-sm">
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Progress</th>
                      <th scope="col">Deadline</th>
                      <th scope="col">Label</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {borderTable &&
                      borderTable.map((table, i) => (
                        <tr key={i}>
                          <td>{table.task}</td>
                          <td>
                            <div
                              className="progress"
                              style={{ background: table.progressbar }}
                            >
                              <div
                                className={`progress-bar bg-${
                                  table.color.split(" ")[0]
                                }`}
                                style={{ width: `${table.value}%` }}
                                role="progressbar"
                              >
                                <span className="sr-only">
                                  {table.value}% Complete
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>{table.dadeLine}</td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.value}%
                            </span>
                          </td>
                          <td>
                            <span>
                              <Link href="javascript:void(0)">
                                <a
                                  className="mr-4"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                  onClick={() => {
                                    setEditAble({ table, id: i });
                                    setBorderTableModal(true);
                                  }}
                                >
                                  <i className="fa fa-pencil color-muted" />{" "}
                                </a>
                              </Link>

                              <Link href="javascript:void(0)">
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Close"
                                  onClick={() => deleteBorderTable(i)}
                                >
                                  <i className="fa fa-close color-danger" />
                                </a>
                              </Link>
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Table Stripped</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-striped verticle-middle table-responsive-sm">
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Progress</th>
                      <th scope="col">Deadline</th>
                      <th scope="col">Label</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableStripped &&
                      tableStripped.map((table, i) => (
                        <tr key={i}>
                          <td>{table.task}</td>
                          <td>
                            <div
                              className="progress"
                              style={{ background: table.progressbar }}
                            >
                              <div
                                className={`progress-bar bg-${
                                  table.color.split(" ")[0]
                                }`}
                                style={{ width: `${table.value}%` }}
                                role="progressbar"
                              >
                                <span className="sr-only">
                                  {table.value}% Complete
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>{table.dadeLine}</td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.value}%
                            </span>
                          </td>
                          <td>
                            <span>
                              <Link href="javascript:void(0)">
                                <a
                                  className="mr-4"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                  onClick={() => {
                                    setEditAble({ table, id: i });
                                    setTableStrippedModal(true);
                                  }}
                                >
                                  <i className="fa fa-pencil color-muted" />{" "}
                                </a>
                              </Link>

                              <Link href="javascript:void(0)">
                                <a
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Close"
                                  onClick={() => deleteStrippedTable(i)}
                                >
                                  <i className="fa fa-close color-danger" />
                                </a>
                              </Link>
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Responsive Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table header-border table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Invoice</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.responsiveTable.map((table, i) => (
                        <tr key={i}>
                          <td>
                            <a href="javascript:void(0)">
                              Order #{table.invoice}
                            </a>
                          </td>
                          <td>{table.user}</td>
                          <td>
                            <span className="text-muted">{table.date}</span>
                          </td>
                          <td>${table.amount}</td>
                          <td>
                            <span className={`badge badge-${table.color}`}>
                              {table.status}
                            </span>
                          </td>
                          <td>{table.country}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Heading With Background</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-info">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.headingWithBackground.map((table, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{table.first}</td>
                          <td>{table.last}</td>
                          <td>{table.handel}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Primary Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table primary-table-bordered">
                  <thead className="thead-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.headingWithBackground.map((table, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{table.first}</td>
                          <td>{table.last}</td>
                          <td>{table.handel}</td>
                        </tr>
                      ))}
                  </tbody>{" "}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Primary Table Hover</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table primary-table-bg-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.primaryTableHover.map((table, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{table.first}</td>
                          <td>{table.last}</td>
                          <td>{table.handel}</td>
                        </tr>
                      ))}
                  </tbody>{" "}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Contextual Table</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table header-border"
                  style={{ minWidth: 500 }}
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Column heading</th>
                      <th>Column heading</th>
                      <th>Column heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bsTables &&
                      bsTables.contextualTable.map((table, i) => (
                        <tr className={`table-${table.color}`} key={i}>
                          <td>{i + 1}</td>
                          <td>{table.heading1}</td>
                          <td>{table.heading2}</td>
                          <td>{table.heading3}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bsTables: state.table.bsTables,
  recentPayment: state.table.recentPayment,
  examTopper: state.table.examTopper,
  borderTable: state.table.borderTable,
  tableStripped: state.table.tableStripped,
});

export default connect(mapStateToProps, {
  pageTitle,
  getBsTableData,
  deleteRecentPayment,
  deleteExamToppers,
  deleteBorderTable,
  deleteStrippedTable,
})(Bootstrap);

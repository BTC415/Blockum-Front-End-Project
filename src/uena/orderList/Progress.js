import { Dropdown } from "react-bootstrap";
import Table from "../../components/Table";
import Link from "next/link";
const Progress = ({ data }) => {
  return (
    <Table
      tableId="#orderList_progress tbody tr"
      sort={3}
      numberCountId="#orderList_progress_info"
      pagginationContainerId="#orderList_progress_paginate"
      // create
      pagginationClass="paginate_button c-pointer"
      previousBtnClass="paginate_button previous disabled c-pointer"
      nextBtnClass="paginate_button next disabled c-pointer"
      previousBtnId="orderList_progress_previous"
      nextBtnId="orderList_progress_next"
      pagginationId="orderList_progress_paggination"
      activeClass="current"
    >
      <div className="table-responsive rounded table-hover">
        <div id="orderList_progress" className="dataTables_wrapper no-footer">
          <table
            className="table text-black card-table mb-4 table-responsive-lg dataTablesCard dataTable no-footer"
            id="orderList_progress"
            role="grid"
            aria-describedby="orderList_progress_info"
          >
            <thead className="bg-primary">
              <tr role="row">
                <th className="sorting_asc">Order ID</th>
                <th className="sorting">Date</th>
                <th className="sorting">Customer Name</th>
                <th className="sorting">Location</th>
                <th className="sorting">Amount</th>
                <th className="sorting">Status Order</th>
                <th className="sorting" />
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(
                  (d, i) =>
                    d.status === "PENDING" && (
                      <tr
                        key={i}
                        className="alert alert-dismissible border-0 odd"
                        role="row"
                      >
                        <td className="sorting_1">#5552375</td>
                        <td>26 March 2020, 02:12 AM</td>
                        <td>Emilia Johanson</td>
                        <td>67 St. John’s Road London</td>
                        <td>$251.16</td>
                        <td>
                          <a
                            className={`btn text-${
                              d.statusColor === "light"
                                ? "white"
                                : d.statusColor
                            } bgl-${d.statusColor}`}
                          >
                            {d.status}
                          </a>
                        </td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              varient=""
                              as="a"
                              className="btn-link i-false c-pointer p-0"
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
                                  <rect x={0} y={0} width={24} height={24} />
                                  <circle fill="#000000" cx={12} cy={5} r={2} />
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
								<Link href="">
								  <a
									className="dropdown-item text-info"
									href="javascript:void(0);"
								  >
									Accept Order
								  </a>
								</Link>
								<Link href="">	
								  <a
									href="javascript:void(0);"
									data-dismiss="alert"
									aria-label="Close"
									className="dropdown-item"
								  >
									Reject Order
								  </a>
								</Link>  
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
          <div className="d-sm-flex text-center justify-content-between align-items-center">
            <div
              className="dataTables_info"
              id="orderList_progress_info"
              role="status"
              aria-live="polite"
            ></div>
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="orderList_progress_paginate"
            ></div>
          </div>
        </div>
      </div>
    </Table>
  );
};

export default Progress;

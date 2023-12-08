import { useEffect, useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { getorderListPage } from "../src/redux/action/dashboard";
import { moodChange, pageTitle } from "../src/redux/action/utils";
import All from "../src/uena/orderList/All";
import Delivered from "../src/uena/orderList/Delivered";
import New from "../src/uena/orderList/New";
import Progress from "../src/uena/orderList/Progress";
const OrdersList = ({ getorderListPage, ordersList, pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    getorderListPage();
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Order List");
  }, []);
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [refreshToggle2, setRefreshToggle2] = useState(false);
  return (
    <div className="row">
      <div className="col-xl-12">
        <Tab.Container defaultActiveKey="AllStatus">
          <div className="card bg-transparent shadow-none">
            <div className="card-header flex-wrap border-0 p-0 justify-content-start">
              <div className="table-tabs mr-2 mb-3 mr-auto">
                <Nav as="ul" className="nav nav-tabs" role="tablist">
                  <Nav.Item>
                    <Nav.Link eventKey="AllStatus">All Status</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="NewOrder">New Order</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="OnProgress">On Progress</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Delivered">Delivered</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="form-control border-0 c-pointer style-1 mr-3  default-select mb-3 border border-primary  text-primary p6 "
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
                    eventKey="AllStatus"
                    className="dropdown-item"
                    variant=""
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
                    eventKey="AllStatus"
                    className="dropdown-item"
                    href="javascript:void(0)"
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
                  className="form-control p6 border-0 c-pointer style-1 mr-3 p-1 default-select mb-3 border border-primary p-2 text-primary"
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
                    eventKey="AllStatus"
                    className="dropdown-item"
                    href="javascript:void(0)"
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
                    eventKey="AllStatus"
                    className="dropdown-item"
                    href="javascript:void(0)"
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

            <div className="card-body p-0">
              <Tab.Content className="tab-content" id="Tab">
                <Tab.Pane eventKey="AllStatus" className="tab-pane fade">
                  <All data={ordersList && ordersList.data} />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="NewOrder"
                  className="tab-pane fade"
                  id="NewOrder"
                >
                  <New data={ordersList && ordersList.data} />
                </Tab.Pane>
                <Tab.Pane eventKey="OnProgress" className="tab-pane fade">
                  <Progress data={ordersList && ordersList.data} />
                </Tab.Pane>
                <Tab.Pane eventKey="Delivered" className="tab-pane fade">
                  <Delivered data={ordersList && ordersList.data} />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ordersList: state.dashboard.ordersList,
});

export default connect(mapStateToProps, { getorderListPage, pageTitle })(
  OrdersList
);

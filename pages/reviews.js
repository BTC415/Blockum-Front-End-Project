import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { getReviews } from "../src/redux/action/dashboard";
import { moodChange, pageTitle } from "../src/redux/action/utils";
const Reviews = ({ getReviews, reviews, pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    getReviews();
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Reviews");
  }, []);

  const [refreshToggle, setRefreshToggle] = useState(false);
  const [refreshToggle2, setRefreshToggle2] = useState(false);
  return (
    <div className="row">
      <div className="col-xl-12">
        <Tab.Container defaultActiveKey="AllStatus">
          <div className="card bg-transparent shadow-none">
            <div className="card-header flex-wrap border-0 pl-0">
              <div className="table-tabs mb-3">
                <Nav as="ul" className="nav nav-tabs" role="tablist">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="AllStatus">All Status</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Published">Published</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Deleted">Deleted</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="d-flex flex-wrap align-items-center">
                <Link href="">
                  <a className="btn btn-outline-danger mr-3 mb-3">DELETE</a>
                </Link>

                <Link href="">
                  <a className="btn btn-success mr-5 mb-3">PUBLISH</a>
                </Link>

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
            </div>
            <div className="card-body p-0">
              <Tab.Content>
                <Tab.Pane eventKey="AllStatus">
                  <div className="row">
                    <div className="col-xl-12">
                      {reviews &&
                        reviews.data.map((d, i) => (
                          <div
                            className="card review-table p-0 border-0"
                            key={i}
                          >
                            <div className="row align-items-center p-4  border-bottom">
                              <div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
                                <div className="media align-items-center">
                                  <div className="custom-control custom-checkbox mr-lg-4 mr-0">
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
                                  <img
                                    className="mr-3 img-fluid "
                                    width={100}
                                    src={d.img}
                                    alt="DexignZone"
                                  />
                                  <div className="card-body p-0">
                                    <p className="text-primary fs-14 mb-0">
                                      #C01234
                                    </p>
                                    <h3 className="fs-20 text-black font-w600 mb-2">
                                      {d.name}
                                    </h3>
                                    <span className="text-dark">{d.time}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
                                <p className="mb-0 text-dark">{d.text}</p>
                              </div>
                              <div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 mt-xl-0 mt-3">
                                <div className="row align-items-center">
                                  <div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
                                    <h2 className="text-black font-w600">
                                      {d.review}
                                    </h2>
                                    <div className="star-review2">
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 1 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 2 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 3 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 4 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 5 ? "" : "op5"
                                        }`}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className="col-xl-5 col-sm-3 col-lg-4 col-6 text-right uena-review">
                                    <a
                                      href="#"
                                      className="text-danger mr-2 fs-14 font-w600"
                                    >
                                      DELETE
                                    </a>
                                    <a
                                      href="#"
                                      className="text-success fs-14 font-w600"
                                    >
                                      PUBLISH
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Published">
                  <div className="row">
                    <div className="col-xl-12">
                      {reviews &&
                        reviews.data.map((d, i) => (
                          <div
                            className={`card review-table p-0 border-0 ${
                              d.status !== "published" && "d-none"
                            }`}
                            key={i}
                          >
                            <div className="row align-items-center p-4  border-bottom">
                              <div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
                                <div className="media align-items-center">
                                  <div className="custom-control custom-checkbox mr-lg-4 mr-0">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id={`customCheckBox_${i}`}
                                      required
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor={`customCheckBox_${i}`}
                                    />
                                  </div>
                                  <img
                                    className="mr-3 img-fluid "
                                    width={100}
                                    src={d.img}
                                    alt="DexignZone"
                                  />
                                  <div className="card-body p-0">
                                    <p className="text-primary fs-14 mb-0">
                                      #C01234
                                    </p>
                                    <h3 className="fs-20 text-black font-w600 mb-2">
                                      {d.name}
                                    </h3>
                                    <span className="text-dark">{d.time}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
                                <p className="mb-0 text-dark">{d.text}</p>
                              </div>
                              <div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 mt-xl-0 mt-3">
                                <div className="row align-items-center">
                                  <div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
                                    <h2 className="text-black font-w600">
                                      {d.review}
                                    </h2>
                                    <div className="star-review2">
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 1 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 2 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 3 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 4 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 5 ? "" : "op5"
                                        }`}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className="col-xl-5 col-sm-3 col-lg-4 col-6 text-right">
                                    <Link href="">
                                      <a className="text-danger mr-2 fs-14 font-w600">
                                        DELETE
                                      </a>
                                    </Link>

                                    <Link href="">
                                      <a className="text-success fs-14 font-w600">
                                        PUBLISH
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Deleted">
                  <div className="row">
                    <div className="col-xl-12">
                      {reviews &&
                        reviews.data.map((d, i) => (
                          <div
                            className={`card review-table p-0 border-0 ${
                              d.status !== "deleted" && "d-none"
                            }`}
                            key={i}
                          >
                            <div className="row align-items-center p-4  border-bottom">
                              <div className="col-xl-4 col-xxl-4 col-lg-5 col-md-12">
                                <div className="media align-items-center">
                                  <div className="custom-control custom-checkbox mr-lg-4 mr-0">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id={`_customCheckBox${i}`}
                                      required
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor={`_customCheckBox${i}`}
                                    />
                                  </div>
                                  <img
                                    className="mr-3 img-fluid "
                                    width={100}
                                    src={d.img}
                                    alt="DexignZone"
                                  />
                                  <div className="card-body p-0">
                                    <p className="text-primary fs-14 mb-0">
                                      #C01234
                                    </p>
                                    <h3 className="fs-20 text-black font-w600 mb-2">
                                      {d.name}
                                    </h3>
                                    <span className="text-dark">{d.time}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-5 col-xxl-4 col-lg-7 col-md-12 mt-3 mt-lg-0">
                                <p className="mb-0 text-dark">{d.text}</p>
                              </div>
                              <div className="col-xl-3 col-xxl-4 col-lg-7 col-md-12 offset-lg-5 offset-xl-0 mt-xl-0 mt-3">
                                <div className="row align-items-center">
                                  <div className="text-xl-center col-xl-7 col-sm-9 col-lg-8 col-6">
                                    <h2 className="text-black font-w600">
                                      {d.review}
                                    </h2>
                                    <div className="star-review2">
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 1 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 2 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 3 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 4 ? "" : "op5"
                                        }`}
                                      />{" "}
                                      <i
                                        className={`fa fa-star ${
                                          d.reating >= 5 ? "" : "op5"
                                        }`}
                                      />{" "}
                                    </div>
                                  </div>
                                  <div className="col-xl-5 col-sm-3 col-lg-4 col-6 text-right">
                                    <Link href="">
                                      <a className="text-danger mr-2 fs-14 font-w600">
                                        DELETE
                                      </a>
                                    </Link>

                                    <Link href="">
                                      <a className="text-success fs-14 font-w600">
                                        PUBLISH
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
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
  reviews: state.dashboard.reviews,
});

export default connect(mapStateToProps, { getReviews, pageTitle })(Reviews);

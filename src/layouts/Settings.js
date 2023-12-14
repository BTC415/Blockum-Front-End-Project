import Link from "next/link";
import { useState } from "react";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { connect } from "react-redux";
import {
  containerAction,
  directionAction,
  headerBgAction,
  headerLayoutAction,
  headerPositionAction,
  navigationHeaderAction,
  primaryAction,
  sideBarBgAction,
  sidebarPositionAction,
  sidebarStyleAction,
  themeVersionAction,
  typographyAction,
} from "../redux/action/themeAction";

function Setting({
  primaryAction,
  navigationHeaderAction,
  headerBgAction,
  sideBarBgAction,
  themeVersionAction,
  headerLayoutAction,
  headerPositionAction,
  sidebarStyleAction,
  sidebarPositionAction,
  containerAction,
  directionAction,
  typographyAction,
  theme,
}) {
  const [show, setShow] = useState(false);

  const overlayChack = (value) => {
    if (theme.layout === "horizontal" && value === "overlay") {
      alert("Sorry! Overlay is not possible in Horizontal layout.");
    } else if (
      theme.sidebarPosition === "fixed" &&
      value === "modern" &&
      theme.layout !== "horizontal"
    ) {
      alert(
        "Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static."
      );
    } else {
      sidebarStyleAction(value);
    }
  };
  const layoutChack = (value) => {
    if (theme.sidebarStyle === "overlay" && value === "horizontal") {
      headerLayoutAction(value);
      sidebarStyleAction("full");
    } else {
      headerLayoutAction(value);
    }
  };

  return (
    <div className={`sidebar-right ${show ? "show" : ""}`}>
      <div className="bg-overlay" onClick={() => setShow(false)} />
      {/* <Link href="">
        <a
          className="sidebar-right-trigger wave-effect wave-effect-x"
          onClick={() => setShow(true)}
        >
          <span>
            <i className="fa fa-cog fa-spin" />
          </span>
        </a>
      </Link> */}

      <Link href="">
        <a className="sidebar-close-trigger" onClick={() => setShow(false)}>
          <span>
            <i className="la-times las" />
          </span>
        </a>
      </Link>
      <div className="sidebar-right-inner">
        <h4>Pick your style</h4>
        <TabContainer defaultActiveKey="tab1">
          <div className="card-tabs">
            <Nav as="ul" className="nav nav-tabs" role="tablist">
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link c-pointer"
                  eventKey="tab1"
                  data-toggle="tab"
                >
                  Theme
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link c-pointer"
                  eventKey="tab2"
                  data-toggle="tab"
                >
                  Header
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" className="nav-item">
                <Nav.Link
                  as="a"
                  className="nav-link c-pointer"
                  eventKey="tab3"
                  data-toggle="tab"
                >
                  Content
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <TabContent className="tab-content tab-content-default tabcontent-border">
            <TabPane className="fade tab-pane" eventKey="tab1">
              <div className="admin-settings">
                <div className="row">
                  <div className="col-sm-12">
                    <p>Background</p>
                    <div className="p-0 bootstrap-select default-select">
                      <select
                        className="default-select form-control"
                        id="theme_version"
                        name="theme_version"
                        tabIndex={-98}
                        onChange={(e) => themeVersionAction(e.target.value)}
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </select>

                      <div className="dropdown-menu " role="combobox">
                        <div
                          className="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                        >
                          <ul className="dropdown-menu inner show" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Primary Color</p>
                    <div>
                      <span
                        data-placement="top"
                        data-toggle="tooltip"
                        title="Color 1"
                      >
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_1"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_1"
                          onClick={() => primaryAction("color_1")}
                        />
                        <label
                          htmlFor="primary_color_1"
                          className="bg-label-pattern"
                        />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_2"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_2"
                          onClick={() => primaryAction("color_2")}
                        />
                        <label htmlFor="primary_color_2" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_3"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_3"
                          onClick={() => primaryAction("color_3")}
                        />
                        <label htmlFor="primary_color_3" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_4"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_4"
                          onClick={() => primaryAction("color_4")}
                        />
                        <label htmlFor="primary_color_4" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_5"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_5"
                          onClick={() => primaryAction("color_5")}
                        />
                        <label htmlFor="primary_color_5" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_6"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_6"
                          onClick={() => primaryAction("color_6")}
                        />
                        <label htmlFor="primary_color_6" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_7"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_7"
                          onClick={() => primaryAction("color_7")}
                        />
                        <label htmlFor="primary_color_7" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_8"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_8"
                          onClick={() => primaryAction("color_8")}
                        />
                        <label htmlFor="primary_color_8" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_9"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_9"
                          onClick={() => primaryAction("color_9")}
                        />
                        <label htmlFor="primary_color_9" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_10"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_10"
                          onClick={() => primaryAction("color_10")}
                        />
                        <label htmlFor="primary_color_10" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_11"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_11"
                          onClick={() => primaryAction("color_11")}
                        />
                        <label htmlFor="primary_color_11" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_12"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_12"
                          onClick={() => primaryAction("color_12")}
                        />
                        <label htmlFor="primary_color_12" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_13"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_13"
                          onClick={() => primaryAction("color_13")}
                        />
                        <label htmlFor="primary_color_13" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_14"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_14"
                          onClick={() => primaryAction("color_14")}
                        />
                        <label htmlFor="primary_color_14" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="primary_color_15"
                          name="primary_bg"
                          type="radio"
                          defaultValue="color_15"
                          onClick={() => primaryAction("color_15")}
                        />
                        <label htmlFor="primary_color_15" />
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Navigation Header</p>
                    <div>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_1"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_1"
                          onClick={() => navigationHeaderAction("color_1")}
                        />
                        <label
                          htmlFor="nav_header_color_1"
                          className="bg-label-pattern"
                        />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_2"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_2"
                          onClick={() => navigationHeaderAction("color_2")}
                        />
                        <label htmlFor="nav_header_color_2" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_3"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_3"
                          onClick={() => navigationHeaderAction("color_3")}
                        />
                        <label htmlFor="nav_header_color_3" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_4"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_4"
                          onClick={() => navigationHeaderAction("color_4")}
                        />
                        <label htmlFor="nav_header_color_4" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_5"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_5"
                          onClick={() => navigationHeaderAction("color_5")}
                        />
                        <label htmlFor="nav_header_color_5" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_6"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_6"
                          onClick={() => navigationHeaderAction("color_6")}
                        />
                        <label htmlFor="nav_header_color_6" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_7"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_7"
                          onClick={() => navigationHeaderAction("color_7")}
                        />
                        <label htmlFor="nav_header_color_7" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_8"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_8"
                          onClick={() => navigationHeaderAction("color_8")}
                        />
                        <label htmlFor="nav_header_color_8" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_9"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_9"
                          onClick={() => navigationHeaderAction("color_9")}
                        />
                        <label htmlFor="nav_header_color_9" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_10"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_10"
                          onClick={() => navigationHeaderAction("color_10")}
                        />
                        <label htmlFor="nav_header_color_10" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_11"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_11"
                          onClick={() => navigationHeaderAction("color_11")}
                        />
                        <label htmlFor="nav_header_color_11" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_12"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_12"
                          onClick={() => navigationHeaderAction("color_12")}
                        />
                        <label htmlFor="nav_header_color_12" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_13"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_13"
                          onClick={() => navigationHeaderAction("color_13")}
                        />
                        <label htmlFor="nav_header_color_13" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_14"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_14"
                          onClick={() => navigationHeaderAction("color_14")}
                        />
                        <label htmlFor="nav_header_color_14" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="nav_header_color_15"
                          name="navigation_header"
                          type="radio"
                          defaultValue="color_15"
                          onClick={() => navigationHeaderAction("color_15")}
                        />
                        <label htmlFor="nav_header_color_15" />
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Header</p>
                    <div>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_1"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_1"
                          onClick={() => headerBgAction("color_1")}
                        />
                        <label
                          htmlFor="header_color_1"
                          className="bg-label-pattern"
                        />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_2"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_2"
                          onClick={() => headerBgAction("color_2")}
                        />
                        <label htmlFor="header_color_2" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_3"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_3"
                          onClick={() => headerBgAction("color_3")}
                        />
                        <label htmlFor="header_color_3" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_4"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_4"
                          onClick={() => headerBgAction("color_4")}
                        />
                        <label htmlFor="header_color_4" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_5"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_5"
                          onClick={() => headerBgAction("color_5")}
                        />
                        <label htmlFor="header_color_5" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_6"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_6"
                          onClick={() => headerBgAction("color_6")}
                        />
                        <label htmlFor="header_color_6" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_7"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_7"
                          onClick={() => headerBgAction("color_7")}
                        />
                        <label htmlFor="header_color_7" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_8"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_8"
                          onClick={() => headerBgAction("color_8")}
                        />
                        <label htmlFor="header_color_8" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_9"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_9"
                          onClick={() => headerBgAction("color_9")}
                        />
                        <label htmlFor="header_color_9" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_10"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_10"
                          onClick={() => headerBgAction("color_10")}
                        />
                        <label htmlFor="header_color_10" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_11"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_11"
                          onClick={() => headerBgAction("color_11")}
                        />
                        <label htmlFor="header_color_11" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_12"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_12"
                          onClick={() => headerBgAction("color_12")}
                        />
                        <label htmlFor="header_color_12" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_13"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_13"
                          onClick={() => headerBgAction("color_13")}
                        />
                        <label htmlFor="header_color_13" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_14"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_14"
                          onClick={() => headerBgAction("color_14")}
                        />
                        <label htmlFor="header_color_14" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="header_color_15"
                          name="header_bg"
                          type="radio"
                          defaultValue="color_15"
                          onClick={() => headerBgAction("color_15")}
                        />
                        <label htmlFor="header_color_15" />
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Sidebar</p>
                    <div>
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_1"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_1"
                          onClick={() => sideBarBgAction("color_1")}
                        />
                        <label
                          htmlFor="sidebar_color_1"
                          className="bg-label-pattern"
                        />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_2"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_2"
                          onClick={() => sideBarBgAction("color_2")}
                        />
                        <label htmlFor="sidebar_color_2" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_3"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_3"
                          onClick={() => sideBarBgAction("color_3")}
                        />
                        <label htmlFor="sidebar_color_3" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_4"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_4"
                          onClick={() => sideBarBgAction("color_4")}
                        />
                        <label htmlFor="sidebar_color_4" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_5"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_5"
                          onClick={() => sideBarBgAction("color_5")}
                        />
                        <label htmlFor="sidebar_color_5" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_6"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_6"
                          onClick={() => sideBarBgAction("color_6")}
                        />
                        <label htmlFor="sidebar_color_6" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_7"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_7"
                          onClick={() => sideBarBgAction("color_7")}
                        />
                        <label htmlFor="sidebar_color_7" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_8"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_8"
                          onClick={() => sideBarBgAction("color_8")}
                        />
                        <label htmlFor="sidebar_color_8" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_9"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_9"
                          onClick={() => sideBarBgAction("color_9")}
                        />
                        <label htmlFor="sidebar_color_9" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_10"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_10"
                          onClick={() => sideBarBgAction("color_10")}
                        />
                        <label htmlFor="sidebar_color_10" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_11"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_11"
                          onClick={() => sideBarBgAction("color_11")}
                        />
                        <label htmlFor="sidebar_color_11" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_12"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_12"
                          onClick={() => sideBarBgAction("color_12")}
                        />
                        <label htmlFor="sidebar_color_12" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_13"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_13"
                          onClick={() => sideBarBgAction("color_13")}
                        />
                        <label htmlFor="sidebar_color_13" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_14"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_14"
                          onClick={() => sideBarBgAction("color_14")}
                        />
                        <label htmlFor="sidebar_color_14" />
                      </span>{" "}
                      <span>
                        <input
                          className="chk-col-primary filled-in"
                          id="sidebar_color_15"
                          name="sidebar_bg"
                          type="radio"
                          defaultValue="color_15"
                          onClick={() => sideBarBgAction("color_15")}
                        />
                        <label htmlFor="sidebar_color_15" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane className="fade tab-pane" eventKey="tab2">
              <div className="admin-settings">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Layout</p>
                    <div className="bootstrap-select default-select">
                      <select
                        className="default-select form-control"
                        id="theme_layout"
                        name="theme_layout"
                        tabIndex={-98}
                        onChange={(e) => layoutChack(e.target.value)}
                      >
                        <option value="vertical">Vertical</option>
                        <option value="horizontal">Horizontal</option>
                      </select>
                      <div className="dropdown-menu " role="combobox">
                        <div
                          className="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                        >
                          <ul className="dropdown-menu inner show" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Header position</p>
                    <div className="bootstrap-select default-select ">
                      <select
                        className="default-select form-control"
                        id="header_position"
                        name="header_position"
                        tabIndex={-98}
                        onChange={(e) => headerPositionAction(e.target.value)}
                      >
                        <option value="static">Static</option>
                        <option value="fixed">Fixed</option>
                      </select>

                      <div className="dropdown-menu " role="combobox">
                        <div
                          className="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                        >
                          <ul className="dropdown-menu inner show" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Sidebar</p>
                    <div className="bootstrap-select default-select ">
                      <select
                        className="default-select form-control"
                        id="sidebar_style"
                        name="sidebar_style"
                        tabIndex={-98}
                        onChange={(e) => overlayChack(e.target.value)}
                      >
                        <option value="full">Full</option>
                        <option value="mini">Mini</option>
                        <option value="compact">Compact</option>
                        <option value="modern">Modern</option>
                        <option value="overlay">Overlay</option>
                        <option value="icon-hover">Icon-hover</option>
                      </select>
                      <div className="dropdown-menu " role="combobox">
                        <div
                          className="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                        >
                          <ul className="dropdown-menu inner show" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Sidebar position</p>
                    <div className="bootstrap-select default-select">
                      <select
                        className="default-select form-control"
                        id="sidebar_position"
                        name="sidebar_position"
                        tabIndex={-98}
                        onChange={(e) => sidebarPositionAction(e.target.value)}
                      >
                        <option value="static">Static</option>
                        <option value="fixed">Fixed</option>
                      </select>
                      <div className="dropdown-menu " role="combobox">
                        <div
                          className="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                        >
                          <ul className="dropdown-menu inner show" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane className="fade tab-pane" eventKey="tab3">
              <div className="admin-settings">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Container</p>
                    <div className="bootstrap-select default-select">
                      <select
                        className="default-select form-control"
                        id="container_layout"
                        name="container_layout"
                        tabIndex={-98}
                        onChange={(e) => containerAction(e.target.value)}
                      >
                        <option value="wide">Wide</option>
                        <option value="boxed">Boxed</option>
                        <option value="wide-boxed">Wide Boxed</option>
                      </select>
                      <div className="dropdown-menu " role="combobox">
                        <div
                          className="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                        >
                          <ul className="dropdown-menu inner show" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Direction</p>
                    <div className=" bootstrap-select default-select ">
                      <select
                        className="default-select form-control"
                        id="theme_direction"
                        name="theme_direction"
                        tabIndex={-98}
                        onChange={(e) => directionAction(e.target.value)}
                      >
                        <option value="ltr">LTR</option>
                        <option value="rtl">RTL</option>
                      </select>
                      <div className="dropdown-menu " role="combobox">
                        <div
                          className="inner show"
                          role="listbox"
                          aria-expanded="false"
                          tabIndex={-1}
                        >
                          <ul className="dropdown-menu inner show" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <p>Body Font</p>
                    <div className="bootstrap-select default-select">
                      <select
                        className="default-select form-control"
                        id="typography"
                        name="typography"
                        tabIndex={-98}
                        onChange={(e) => typographyAction(e.target.value)}
                      >
                        <option value="roboto">Roboto</option>
                        <option value="poppins">Poppins</option>
                        <option value="opensans">Open Sans</option>
                        <option value="HelveticaNeue">HelveticaNeue</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              aneTabPane{" "}
            </TabPane>
          </TabContent>
        </TabContainer>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, {
  primaryAction,
  navigationHeaderAction,
  headerBgAction,
  sideBarBgAction,
  themeVersionAction,
  headerLayoutAction,
  headerPositionAction,
  sidebarStyleAction,
  sidebarPositionAction,
  containerAction,
  directionAction,
  typographyAction,
})(Setting);

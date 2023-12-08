import React, { Fragment, useEffect } from "react";
import { Card, Col, Nav, Pagination, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const UiPagination = ({ pageTitle }) => {
  const active = 1;
  let items = [];

  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const pag = (size, gutter, variant, bg, circle) => (
    <Pagination
      size={size}
      className={`mt-4  ${gutter ? "pagination-gutter" : ""} ${
        variant && `pagination-${variant}`
      } ${!bg && "no-bg"} ${circle && "pagination-circle"}`}
    >
      <li className="page-item page-indicator">
        <a className="page-link" href="#">
          <i className="la la-angle-left" />
        </a>
      </li>
      {items}
      <li className="page-item page-indicator">
        <a className="page-link" href="#">
          <i className="la la-angle-right" />
        </a>
      </li>
    </Pagination>
  );
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Pagination");
  }, []);

  return (
    <Fragment>
      <PageTitle_ mother="Bootstrap" active="Pagination" />
      <Row>
        <Col xl={6} className=" col-xxl-6">
          <Card>
            <Card.Header className="d-block">
              <Card.Title>Pagination</Card.Title>
              <Card.Text className="mb-0 subtitle">
                Default pagination style
              </Card.Text>
            </Card.Header>
            <Card.Body className="pt-0">
              <Nav>{pag("", false, "", true, false)}</Nav>

              <Nav>{pag("sm", false, "", true, false)}</Nav>

              <Nav>{pag("xs", false, "", true, false)}</Nav>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} className=" col-xxl-6">
          <Card>
            <Card.Header className="d-block">
              <Card.Title>Pagination Gutter</Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.pagination-gutter</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body className="pt-0">
              <Nav>{pag("", true, "", true, false)}</Nav>
              <Nav>{pag("sm", true, "", true, false)}</Nav>
              <Nav>{pag("xs", true, "", true, false)}</Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} className=" col-xxl-6">
          <Card>
            <Card.Header className="d-block">
              <Card.Title>Pagination Color</Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.pagination-gutter</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body className="pt-0">
              <Nav>{pag("", true, "primary", false, false)}</Nav>
              <Nav>{pag("", true, "danger", true, false)}</Nav>
              <Nav>{pag("sm", true, "info", false, false)}</Nav>
              <Nav>{pag("xs", true, "warning", false, false)}</Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} className=" col-xxl-6">
          <Card>
            <Card.Header className="d-block">
              <Card.Title>Pagination Circle</Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.pagination-circle</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body className="pt-0">
              <Nav>{pag("", true, "", true, true)}</Nav>
              <Nav>{pag("sm", true, "", true, true)}</Nav>
              <Nav>{pag("xs", true, "", true, true)}</Nav>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(UiPagination);

import React, { Fragment, useEffect } from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
const UiProgressBar = () => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Progressbar");
  }, []);
  const progressBarData = [
    { variant: "danger", value: "60" },
    { variant: "info", value: "40" },
    { variant: "success", value: "20" },
    { variant: "primary", value: "30" },
    { variant: "warning", value: "80" },
    { variant: "inverse", value: "40" },
  ];
  return (
    <Fragment>
      <PageTitle_ mother="Bootstrap" active="Progressbar" />
      <Row className="ui">
        {/* <!-- column --> */}
        <Col xl={6} lg={6} md={6}>
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Default Progress bars</Card.Title>
              <Card.Text className="mb-0 subtitle">
                Default progress bar style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <ProgressBar now={60} variant="danger" />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- column --> */}
        <Col xl={6} lg={6} md={6}>
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Striped Progress bar</Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.progress-bar-striped</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <ProgressBar now={85} variant="info" striped />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- column --> */}
      </Row>

      <Row>
        <div className="col-xl-4">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Colored Progress bar</Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>bg-primary, .bg-danger, .bg-info</code> to change the
                style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              {progressBarData.map((data, i) => (
                <ProgressBar
                  now={data.value}
                  variant={data.variant}
                  key={i}
                  className="mt-3"
                />
              ))}
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
        <div className="col-xl-4">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Different bar sizes </Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>bg-primary, .bg-danger, .bg-info</code> to change the
                style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              {progressBarData.map(
                (data, i) =>
                  i !== progressBarData.length - 1 && (
                    <ProgressBar
                      now={data.value}
                      variant={data.variant}
                      key={i}
                      className="mt-3"
                    />
                  )
              )}
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
        <div className="col-xl-4">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Animated Striped bar </Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>bg-primary, .bg-danger, .bg-info</code> to change the
                style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              {progressBarData.map(
                (data, i) =>
                  i !== progressBarData.length - 1 && (
                    <ProgressBar
                      now={data.value}
                      variant={data.variant}
                      key={i}
                      className="mt-3"
                      striped
                    />
                  )
              )}
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
        {/* <!-- Column --> */}
        <div className="col-xl-4">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Vertical Progress bars </Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.progress-vertical</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              {progressBarData.map(
                (data, i) =>
                  i !== progressBarData.length - 1 && (
                    <ProgressBar
                      className=" progress-vertical"
                      now={data.variant}
                      key={i}
                    >
                      <ProgressBar
                        key={i}
                        style={{
                          width: "4px",
                          height: `${data.value}%`,
                        }}
                        variant={data.variant}
                      />
                    </ProgressBar>
                  )
              )}
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
        {/* <!-- Column --> */}
        <div className="col-xl-4">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Vertical Progress From bottom </Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.progress-vertical</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              {progressBarData.map(
                (data, i) =>
                  i !== progressBarData.length - 1 && (
                    <ProgressBar
                      className=" progress-vertical-bottom"
                      now={data.variant}
                      key={i}
                    >
                      <ProgressBar
                        key={i}
                        style={{
                          width: "4px",
                          height: `${data.value}%`,
                        }}
                        variant={data.variant}
                      />
                    </ProgressBar>
                  )
              )}
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
        {/* <!-- Column --> */}
        <div className="col-xl-4">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Different size Progress bars </Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.progress-vertical</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              {progressBarData.map(
                (data, i) =>
                  i !== progressBarData.length - 1 && (
                    <ProgressBar
                      className=" progress-vertical"
                      now={data.variant}
                      key={i}
                    >
                      <ProgressBar
                        key={i}
                        style={{
                          width: `${`${4 + i * 2}px`}`,
                          height: `${data.value}%`,
                        }}
                        variant={data.variant}
                      />
                    </ProgressBar>
                  )
              )}
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
        <div className="col-xl-4">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>Animated bars </Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.progress-vertical</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              {progressBarData.map(
                (data, i) =>
                  i !== progressBarData.length - 1 && (
                    <ProgressBar
                      now={data.value}
                      variant={data.variant}
                      key={i}
                      className="mt-3"
                    />
                  )
              )}{" "}
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
        <div className="col-xl-8">
          <Card>
            <Card.Header className=" d-block">
              <Card.Title>SKILL BARS </Card.Title>
              <Card.Text className="mb-0 subtitle">
                add <code>.progress-animated</code> to change the style
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <h6>
                Photoshop
                <span className="pull-right">85%</span>
              </h6>
              <ProgressBar now={85} variant="danger" />

              <h6 className="mt-4">
                Code editor
                <span className="pull-right">90%</span>
              </h6>
              <ProgressBar now="90" variant="info" />
              <h6 className="mt-4">
                Illustrator
                <span className="pull-right">65%</span>
              </h6>
              <ProgressBar now={65} variant="success" />
            </Card.Body>
          </Card>
        </div>
        {/* <!-- Column --> */}
      </Row>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(UiProgressBar);

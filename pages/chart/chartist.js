import dynamic from "next/dynamic";
import { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const LineChart = dynamic(
  () => import("../../src/components/chart/chartist/line"),
  {
    ssr: false,
  }
);
const AreaChart = dynamic(
  () => import("../../src/components/chart/chartist/area"),
  {
    ssr: false,
  }
);
const PolarChart = dynamic(
  () => import("../../src/components/chart/chartist/polar"),
  {
    ssr: false,
  }
);
const DonutChart = dynamic(
  () => import("../../src/components/chart/chartist/donut"),
  {
    ssr: false,
  }
);

// Normal page
const ChartistJs = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Chartist");
  }, []);
  return (
    <Fragment>
      <PageTitle_ mother="Charts" active="Chartist" />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line</Card.Title>
            </Card.Header>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Area</Card.Title>
            </Card.Header>
            <Card.Body>
              <AreaChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bi Polar</Card.Title>
            </Card.Header>
            <Card.Body>
              {" "}
              <PolarChart />{" "}
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Donut</Card.Title>
            </Card.Header>
            <Card.Body>
              <DonutChart />{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(ChartistJs);

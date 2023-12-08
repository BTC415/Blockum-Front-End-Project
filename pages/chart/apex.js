import dynamic from "next/dynamic";
import { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";
// import BarChart from "../../src/components/chart/apex/BarChart";

const BarChart = dynamic(
  () => import("../../src/components/chart/apex/BarChart"),
  {
    ssr: false,
  }
);
const ColumnChart = dynamic(
  () => import("../../src/components/chart/apex/ColumnChart"),
  {
    ssr: false,
  }
);
const RangeBarChart = dynamic(
  () => import("../../src/components/chart/apex/RangeBarChart"),
  {
    ssr: false,
  }
);
const LineChart = dynamic(
  () => import("../../src/components/chart/apex/LineChart"),
  {
    ssr: false,
  }
);
const AreaChart = dynamic(
  () => import("../../src/components/chart/apex/AreaChart"),
  {
    ssr: false,
  }
);
const PolarChart = dynamic(
  () => import("../../src/components/chart/apex/PolarChart"),
  {
    ssr: false,
  }
);
const RedialBar = dynamic(
  () => import("../../src/components/chart/apex/RedialBar"),
  {
    ssr: false,
  }
);
const DonutChart = dynamic(
  () => import("../../src/components/chart/apex/DonutChart"),
  {
    ssr: false,
  }
);

function ApexChart({ pageTitle }) {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("ApexChart");
  }, []);
  return (
    <Fragment>
      <PageTitle_ mother="Charts" active="ApexChart" />
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <BarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Column Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <ColumnChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>RangeBar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <RangeBarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <AreaChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Polar Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <PolarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>RedialBar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <RedialBar />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Donut Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <DonutChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default connect(null, { pageTitle })(ApexChart);

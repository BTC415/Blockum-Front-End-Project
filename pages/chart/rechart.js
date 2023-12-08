import { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import BarChartNoPadding from "../../src/components/chart/rechart/BarChartNoPadding";
import PieChartWithCustomizedLabel from "../../src/components/chart/rechart/PieChartWithCustomizedLabel";
import PositiveNagetiveChart from "../../src/components/chart/rechart/PositiveNagetiveChart";
import SimpleRadialBarChart from "../../src/components/chart/rechart/SimpleRadialBarChart";
import SimpleTreemap from "../../src/components/chart/rechart/SimpleTreemap";
import SpecifiedDomainRadarChart from "../../src/components/chart/rechart/SpecifiedDomainRadarChart";
import StackedBarChart from "../../src/components/chart/rechart/StackedBarChart";
import TinyAreaChart from "../../src/components/chart/rechart/TinyAreaChart";
import TinyBarChart from "../../src/components/chart/rechart/TinyBarChart";
import TinyLineChart from "../../src/components/chart/rechart/TinyLineChart";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

// Normal page
const ReChart = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("ReChart");
  }, []);
  return (
    <Fragment>
      <PageTitle_ mother="Charts" active="ReChart" />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <TinyBarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Stacked Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <StackedBarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Positive And Negative Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <PositiveNagetiveChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart No Padding</Card.Title>
            </Card.Header>
            <Card.Body>
              <BarChartNoPadding />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Tiny Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <TinyLineChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Tiny Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <TinyAreaChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pie Chart With Customized Label</Card.Title>
            </Card.Header>
            <Card.Body>
              <PieChartWithCustomizedLabel />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Simple Radial Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <SimpleRadialBarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Specified Domain Radar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <SpecifiedDomainRadarChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Simple Treemap</Card.Title>
            </Card.Header>
            <Card.Body>
              <SimpleTreemap />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(ReChart);

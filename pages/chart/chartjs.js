import { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import BasicAreaChart from "../../src/components/chart/chartjs/BasicAreaChart";
import BasicBarChart from "../../src/components/chart/chartjs/BasicBarChart";
import BasicLineChart from "../../src/components/chart/chartjs/BasicLineChart";
import DoughnutChart from "../../src/components/chart/chartjs/DoughnutChart";
import DualAreaChart from "../../src/components/chart/chartjs/DualAreaChart";
import DualLineChart from "../../src/components/chart/chartjs/DualLineChart";
import GradientBarChart from "../../src/components/chart/chartjs/GradientBarChart";
import GradientAreaChart from "../../src/components/chart/chartjs/GradinetAreaChart";
import PieChart from "../../src/components/chart/chartjs/PieChart";
import PolarChart from "../../src/components/chart/chartjs/PolarChart";
import RadarChart from "../../src/components/chart/chartjs/RadarChart";
import StalkedBarChart from "../../src/components/chart/chartjs/StalkedBarChart";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

// Normal page
const ChartistJs = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("ChartJS");
  }, []);
  return (
    <Fragment>
      <PageTitle_ mother="Charts" active="ChartJS" />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <BasicBarChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Gradient Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <GradientBarChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Stalked Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              {" "}
              <StalkedBarChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <BasicLineChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Dual Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <DualLineChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Basic Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <BasicAreaChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Gradinet Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <GradientAreaChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Dual Area Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <DualAreaChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Radar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <RadarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pie Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <PieChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Doughnut Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <DoughnutChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Polar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <PolarChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(ChartistJs);

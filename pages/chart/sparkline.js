import React, { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import {
  Sparklines,
  SparklinesBars,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesSpots,
} from "react-sparklines";
import PageTitle_ from "../../src/components/PageTitle";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const sampleData = [
  64, 24, 40, 76, 19, 0, 2, 46, 65, 12, 10, 6, 15, 57, 35, 81, 86, 12, 12, 21,
  53, 44, 2, 1, 58, 9, 61, 64, 42, 92, 58, 9, 34, 47, 89, 52, 3, 69, 33, 2, 60,
  71, 71, 22, 65, 70, 31, 81, 36, 89,
];

// Normal page
const Sparkline = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Sparkline");
  }, []);

  return (
    <Fragment>
      <PageTitle_ mother="Charts" active="Sparkline" />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Simple</Card.Title>
            </Card.Header>
            <Card.Body>
              <Sparklines data={sampleData}>
                <SparklinesLine color="#FF720D" />
              </Sparklines>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Title>
              <Card.Header>
                <Card.Title>Simple Curve</Card.Title>
              </Card.Header>
              <Card.Body>
                <Sparklines data={sampleData}>
                  <SparklinesLine color="#FF720D" />
                  <SparklinesReferenceLine type="mean" />
                </Sparklines>
              </Card.Body>
            </Card.Title>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Spots</Card.Title>
            </Card.Header>
            <Card.Body>
              <Sparklines data={sampleData}>
                <SparklinesLine color="#FF720D" style={{ fill: "none" }} />
                <SparklinesSpots />
              </Sparklines>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Spots</Card.Title>
            </Card.Header>
            <Card.Body>
              <Sparklines data={sampleData}>
                <SparklinesLine color="#FF720D" />
                <SparklinesSpots style={{ fill: "#FF720D" }} />
              </Sparklines>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Spots</Card.Title>
            </Card.Header>
            <Card.Body>
              <Sparklines data={sampleData} margin={6}>
                <SparklinesLine
                  style={{
                    strokeWidth: 3,
                    stroke: "#FF720D",
                    fill: "none",
                  }}
                />
                <SparklinesSpots
                  size={4}
                  style={{
                    stroke: "#FF720D",
                    strokeWidth: 3,
                    fill: "white",
                  }}
                />
              </Sparklines>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bars</Card.Title>
            </Card.Header>
            <Card.Body>
              <Sparklines
                data={[
                  20, 30, 30, 42, 43, 20, 21, 32, 30, 43, 23, 30, 65, 43, 30,
                  24, 54,
                ]}
              >
                <SparklinesBars style={{ fill: "#FF720D" }} />
              </Sparklines>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null, { pageTitle })(Sparkline);

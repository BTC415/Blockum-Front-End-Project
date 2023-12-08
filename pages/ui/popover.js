import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import PageTitle_ from "../../src/components/PageTitle";
import useWindowSize from "../../src/components/useWindowSize";
import { moodChange, pageTitle } from "../../src/redux/action/utils";

const UiPopOver = ({ pageTitle }) => {
  const version = useSelector((state) => state.theme.version);
  useEffect(() => {
    if (version !== "dark") {
      moodChange();
    }
    pageTitle("Popover");
  }, []);
  const { width } = useWindowSize();
  return (
    <div className="h-80">
      <PageTitle_ mother="Bootstrap" active="Popover" />
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Bootstrap popover</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laborum dolorum culpa a maiores officia ab. Cumque
                necessitatibus voluptates soluta, ullam numquam nulla. Et a
                architecto veritatis sint, autem cupiditate iure illo pariatur
                eum, praesentium numquam ea quaerat ipsam? Corrupti nobis illo
                itaque quae, qui numquam vero ipsa, reiciendis sit repudiandae
                molestiae natus vel voluptatibus exercitationem ducimus neque
                harum ad, commodi excepturi repellat eos fugiat minus eius.
                Doloremque itaque repudiandae saepe quia temporibus? Vitae,
                reprehenderit aliquam facilis qui at quis provident in maiores
                illo laborum, voluptatem recusandae cupiditate nemo. Nulla iusto
                ad consequatur reprehenderit quod accusamus, vitae, blanditiis
                quae ut tenetur nobis animi dolorum consectetur dignissimos amet
                illo provident nam obcaecati eligendi molestias tempora? Ad nam
                nobis eaque consequatur tempore tenetur eius ipsum reprehenderit
                dignissimos inventore. Id recusandae nemo dicta rerum.
                Distinctio itaque, veniam dolore inventore aliquid assumenda
                neque. Deserunt!
              </Card.Text>
              <div className="bootstrap-popover-wrapper">
                <div className="bootstrap-popover d-inline-block">
                  {["Left", "Top", "Bottom", "Right"].map((placement, i) => (
                    <OverlayTrigger
                      trigger="click"
                      key={i}
                      placement={
                        width < 1300 && width > 700
                          ? placement === "Left"
                            ? "right"
                            : placement.toLowerCase()
                          : width < 700
                          ? placement === "Right"
                            ? "top"
                            : width < 385
                            ? placement === "Left"
                              ? "bottom"
                              : placement.toLowerCase()
                            : placement.toLowerCase()
                          : placement.toLowerCase()
                      }
                      responsive={true}
                      overlay={
                        <Popover
                          id={`popover-positioned-${placement.toLowerCase()}`}
                        >
                          <Popover.Title as="h3">{`Popover on ${placement}`}</Popover.Title>
                          <Popover.Content>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor.
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <Button variant="primary" size="sm" className="mr-2 mt-2">
                        {placement}
                      </Button>
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default connect(null, { pageTitle })(UiPopOver);

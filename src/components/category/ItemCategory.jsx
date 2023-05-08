import { Container, Col, Row, Nav, Tab, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image1 from "./../../assets/img/category/event (1).jpg";
import Image2 from "./../../assets/img/category/event (5).jpg";
import Image3 from "./../../assets/img/category/event (7).jpg";

const CustomNav = ({ eventKey, title }) => {
  return (
    <Nav.Item>
      <Nav.Link
        eventKey={eventKey}
        className="mt-3 border border-light border-3 rounded py-3 fw-semi-bold"
      >
        <FontAwesomeIcon icon={faBars} size="1x" className="me-2" />
        {title}
      </Nav.Link>
    </Nav.Item>
  );
};

const CustomTab = ({ eventKey, title, body, imageTab }) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      <Row>
        <Col
          lg={6}
          className="wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ marginTop: "12px" }}
        >
          <Image fluid rounded src={imageTab} />
        </Col>
        <Col md={6} style={{ marginTop: "12px", textAlign: "justify" }}>
          <h5 className="mb-4 fw-normal">
            <p>{body}</p>
            <a href={`#${eventKey}`} className="btn btn-primary py-2 px-5 mt-2">
              {title}
            </a>
          </h5>
        </Col>
      </Row>
    </Tab.Pane>
  );
};

const ItemCategory = () => {
  return (
    <div className="container-xxl service py-5">
      <Container>
        <div className="row g-5 mb-3">
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Category
            </p>
          </Col>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <CustomNav eventKey="first" title="Politics" />
                  <CustomNav eventKey="second" title="Business" />
                  <CustomNav eventKey="third" title="Environment" />
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <CustomTab
                    eventKey="first"
                    title="Politics"
                    imageTab={Image1}
                    body="This category covers news related to politics and government, including elections, policies, and politicians."
                  />
                  <CustomTab
                    eventKey="second"
                    title="Business"
                    imageTab={Image2}
                    body="This category includes news related to the economy, businesses, and financial markets. It covers topics such as stock markets, company earnings reports, and economic policies."
                  />
                  <CustomTab
                    eventKey="third"
                    title="Environment"
                    imageTab={Image3}
                    body="This category covers news related to the environment, including climate change, natural disasters, and environmental policies."
                  />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
};

export default ItemCategory;

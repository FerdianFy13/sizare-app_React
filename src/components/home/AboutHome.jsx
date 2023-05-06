import { Container, Row, Col, Image, Tab, Nav } from "react-bootstrap";
import Image1 from "./../../assets/img/home/event (8).jpg";
import { useState } from "react";

function TabContent({ title, content }) {
  return (
    <Tab.Pane eventKey={title.toLowerCase()}>
      <p className="mb-0" style={{ textAlign: "justify" }}>
        {content}
      </p>
    </Tab.Pane>
  );
}

const AboutHome = () => {
  const [activeTab, setActiveTab] = useState("Author");
  const tabs = [
    {
      title: "Author",
      content: "Sizare Flower",
    },
    {
      title: "Category",
      content: "System Analyst",
    },
    {
      title: "Published",
      content: "23 October 2023",
    },
  ];

  return (
    <Container className="py-5">
      <Container>
        <Row className="g-4 align-items-end mb-4">
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <Image fluid rounded src={Image1} />
          </Col>
          <Col lg={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              About Us
            </p>
            <h1 className="display-5 mb-4">
            The Future of Global Trends and Challenges
            </h1>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              his article examines the state of global trade in 2023, including
              the impact of geopolitical tensions, trade wars, and technological
              innovation. It also explores strategies for promoting…
            </p>
            <div className="border rounded p-4">
              <Tab.Container
                activeKey={activeTab}
                onSelect={(tab) => setActiveTab(tab)}
              >
                <Nav variant="tabs" className="mb-3">
                  {tabs.map((tab) => (
                    <Nav.Item key={tab.title}>
                      <Nav.Link eventKey={tab.title.toLowerCase()}>
                        {tab.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  {tabs.map((tab) => (
                    <TabContent
                      key={tab.title}
                      title={tab.title}
                      content={tab.content}
                    />
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutHome;

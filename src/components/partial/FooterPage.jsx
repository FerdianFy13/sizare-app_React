import { Container, Row, Col } from "react-bootstrap";

const FooterPage = () => {
  return (
    <div>
      <Container fluid className="py-4 text-primary fw-semi-bold bg-light">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a
                className="text-decoration-none text-primary fw-bolder"
                href="http://sizare.test/"
              >
                Sizare Website
              </a>
              , All Right Reserved. 2023.
            </Col>
            <Col md={6} className="text-center text-primary fw-semi-bold text-md-end">
              Development By{" "}
              <a
                className="text-primary fw-semi-bold"
                href="https://github.com/FerdianFy13"
              >
                Ferdian Firmansyah
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default FooterPage;

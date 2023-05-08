/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const FooterPage = () => {
  return (
    <div>
      <Container fluid className="py-4 text-dark fw-semi-bold bg-light mt-3">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a
                className="text-decoration-none text-dark fw-bolder"
                href="http://sizare.test/"
              >
                Sizare Website
              </a>
              , All Right Reserved. 2023.
            </Col>
            <Col
              md={6}
              className="text-center text-dark fw-semi-bold text-md-end"
            >
              Development By{" "}
              <a
                className="text-dark fw-semi-bold"
                href="https://github.com/FerdianFy13"
              >
                Ferdian Firmansyah
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        style={{}}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
};

export default FooterPage;

import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFolder, faUsers } from "@fortawesome/free-solid-svg-icons";

const FactHome = () => {
  const [articles, setarticles] = useState(0);
  const [categories, setcategories] = useState(0);
  const [users, setusers] = useState(0);

  useEffect(() => {
    setarticles(7);
    setcategories(5);
    setusers(3);
  }, []);
  return (
    <div className="facts my-5 py-4">
      <Container className="py-4">
        <Row className="g-5">
          <Col
            sm={6}
            lg={4}
            className="text-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <FontAwesomeIcon
              icon={faImage}
              size="3x"
              className="text-white mb-3"
            />
            <h1 className="display-4 text-white">{articles}</h1>
            <span className="fs-5 text-white">Articles</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </Col>
          <Col
            sm={6}
            lg={4}
            className="text-center wow fadeIn"
            data-wow-delay="0.3s"
          >
            <FontAwesomeIcon
              icon={faFolder}
              size="3x"
              className="text-white mb-3"
            />
            <h1 className="display-4 text-white">{categories}</h1>
            <span className="fs-5 text-white">Categories</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </Col>
          <Col
            sm={6}
            lg={4}
            className="text-center wow fadeIn"
            data-wow-delay="0.5s"
          >
            <FontAwesomeIcon
              icon={faUsers}
              size="3x"
              className="text-white mb-3"
            />
            <h1 className="display-4 text-white">{users}</h1>
            <span className="fs-5 text-white">Users</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FactHome;

import { Col, Container, Row } from "react-bootstrap";
import Image1 from "./../../assets/img/home/infographics (5).jpg";
import Image2 from "./../../assets/img/home/news (4).jpg";
import Image3 from "./../../assets/img/home/event (8).jpg";

const ArticleItem = (value) => {
  return (
    <Col md={4} className="mb-4">
      <div className="project-item pe-5 pb-5">
        <div className="project-img mb-3">
          <img
            className="img-fluid rounded"
            src={value.image}
            alt=""
            style={{ height: "300px" }}
          />
          <a href={`${window.location.href}?image=${value.image}`}>
            <i className="fa fa-link fa-3x text-primary"></i>
          </a>
        </div>
        <div className="project-title">
          <h6 className="mb-0">The Future of Global Trade:&#8230;</h6>
        </div>
      </div>
    </Col>
  );
};

const ArticleHome = () => {
  const articleList = [
    <ArticleItem image={Image1} />,
    <ArticleItem image={Image2} />,
    <ArticleItem image={Image3} />,
  ];
  return (
    <div className="container-xxl py-5">
      <Container>
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Articles
          </p>
          <h1 className="display-5 mb-5">Latest Articles</h1>
        </div>
        <div className="wow fadeInUp" data-wow-delay="0.3s">
          <Row data-wow-delay="0.3s">{articleList}</Row>
        </div>
      </Container>
    </div>
  );
};

export default ArticleHome;

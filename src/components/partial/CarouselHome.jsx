import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import Image1 from "./../../assets/img/partial/carousel-1.jpg";
import Image2 from "./../../assets/img/partial/carousel-2.jpg";

const CarouselHome = () => {
  const title = "Sizare";

  return (
    <Container fluid className="p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <Carousel>
        <Carousel.Item>
          <img className="w-100" src={Image1} alt={Image1} />
          <Carousel.Caption>
            <Container>
              <Row className="justify-content-start">
                <Col lg={8}>
                  <p className="d-inline-block border border-primary fw-semibold rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                    Welcome to {title}
                  </p>
                  <h1 className="display-1 mb-4 animated slideInDown">
                    Majestic Historical Treasures
                  </h1>
                  <Button className="btn-primary py-3 px-5 animated slideInDown">
                    Explore More
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={Image2} alt="Image2" />
          <Carousel.Caption>
            <Container>
              <Row className="justify-content-start">
                <Col lg={7}>
                  <p className="d-inline-block border border-primary fw-semibold rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                    Welcome to {title}
                  </p>
                  <h1 className="display-1 mb-4 animated slideInDown">
                    Rich Cultural Heritage
                  </h1>
                  <Button className="btn-primary py-3 px-5 animated slideInDown">
                    Explore More
                  </Button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselHome;

import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FormContact = () => {
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-5">
          <Col lg={6} className="wow fadeIn" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Contact
            </p>
            <h1 className="display-5 mb-4">
              If You Have Any Query, Please Contact Us
            </h1>
            <p className="mb-4">
              Contact us if you need assistance. Fill out the contact form or
              send an email to the address provided. Our customer service is
              friendly and professional.
            </p>
            {/* <Form> */}
            <Row className="g-3">
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    autoFocus
                  />
                  <label htmlFor="name">Your Name</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Form.Floating>
                  <Form.Control
                    type="text"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Form.Floating>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: "100px" }}
                  />
                  <label htmlFor="message">Message</label>
                </Form.Floating>
              </Col>
              <Col xs={12}>
                <Button className="btn btn-primary py-3 px-5" type="submit">
                  Send Message
                </Button>
              </Col>
            </Row>
            {/* </Form> */}
          </Col>
          <Col
            lg={6}
            className="wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: "450px" }}
          >
            <div className="position-relative rounded overflow-hidden h-100">
              <iframe
                title="map"
                className="position-relative w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0694875251124!2d112.66158195045827!3d-7.887799180619612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62a52713474b1%3A0xfd729898cb0cdc0d!2sSingosari%20Temple!5e0!3m2!1sen!2sid!4v1680583477788!5m2!1sen!2sid"
                style={{ minHeight: "450px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContact;

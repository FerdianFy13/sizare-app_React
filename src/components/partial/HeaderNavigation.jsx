import { Breadcrumb, Container } from "react-bootstrap";

const HeaderNavigation = (value) => {
  return (
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <Container>
        <h1 className="display-3 mb-4 animated slideInDown">{value.title}</h1>
        <Breadcrumb className="animated slideInDown">
          <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{value.title}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default HeaderNavigation;

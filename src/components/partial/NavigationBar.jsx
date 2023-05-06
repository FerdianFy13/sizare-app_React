import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  const title = "Sizare";

  return (
    <div
      className="container-fluid fixed-top px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <Navbar
          expand="lg"
          className="navbar-light py-lg-0 px-lg-5 wow fadeIn"
          bg="light"
          variant="light"
          data-wow-delay="0.1s"
        >
          <Navbar.Brand href="#" className="ms-4 ms-lg-0">
            <h1 className="display-5 text-primary m-0">{title}</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="navbar-nav ms-auto p-4 p-lg-0">
              <Nav.Link href="#" className="nav-item nav-link active">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-item nav-link">
                Article
              </Nav.Link>
              <Nav.Link href="#" className="nav-item nav-link">
                Category
              </Nav.Link>
              <Nav.Link href="#" className="nav-item nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;

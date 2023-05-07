import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const title = "Sizare";

  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (e) => {
    setActiveLink(e.target.name);
  };

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
              <Nav.Link
                as={Link}
                exact
                to="/"
                name="home"
                className={activeLink === "home" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/article"
                className={activeLink === "article" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Article
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/category"
                className={activeLink === "category" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Category
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                name="contact"
                className={activeLink === "contact" ? "active" : ""}
                onClick={handleLinkClick}
              >
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

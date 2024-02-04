import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="">
          <Navbar.Brand><Link style={{textDecoration:"none",color:'black',fontSize:'2rem'}} to={'/'}>BooksGram</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/"}
                >
                  {" "}
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/exchange"}
                >
                  {" "}
                  Exchanges
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/sell"}
                >
                  {" "}
                  Sell
                </Link>
              </Nav.Link>
            </Nav>
              <NavDropdown
                className="btn btn-primary rounded-2"
                title="GET STARTED"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/register"}
                  >
                    Register
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

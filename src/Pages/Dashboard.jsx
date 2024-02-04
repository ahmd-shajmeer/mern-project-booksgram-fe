import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button, Row, Col, Offcanvas } from "react-bootstrap";

function Dashboard({ inToSale, inToExchange }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
  return (
    <>
      <div className="container">
        <div className="row w-75 mt-5">
          <div className="col-lg-4">
            <div className="card">
              <button className="btn border-bottom">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/profile"}
                >
                  Profile
                </Link>
              </button>
              <button className="btn border-bottom">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/toexchange"}
                >
                  To Exchange
                </Link>
              </button>
              <button className="btn border-bottom">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/tosale"}
                >
                  To Sale
                </Link>
              </button>
              <button onClick={handleShow} className="btn">
                Your Activity
              </button>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>WISHLIST</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="w-100 border-top">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex flex-column align-items-center">
                                    <h3>Life of Pi</h3>
                                    <h5>For Sale</h5>
                                </div>
                                <div>
                                    <button className="btn"><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Price</h6>
                                <h6>$ 250</h6>
                            </div>
                        </div>
                    </Offcanvas.Body>
                 </Offcanvas>
            </div>
          </div>
          <div className="col-lg-8">
            {
                !inToExchange?!inToSale ? (
                    // Profile form
                <div className="container">
              <h3>Profile</h3>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text className="rounded" id="inputGroupPrepend">
                      @
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      className="rounded"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="rounded"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="rounded"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    className="rounded"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>
                <Button className="rounded" variant="primary">
                  Update Changes
                </Button>
              </Form>
            </div>):(
                // Sale form
                <div className="container">
                    <h3>To Sale</h3>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Book name</Form.Label>
                      <Form.Control placeholder="Book name" />
                    </Col>
                    <Col>
                      <Form.Label>Author name</Form.Label>
                      <Form.Control placeholder="Author name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup className="mb-3 d-flex flex-column">
                        <Form.Label>Price </Form.Label>
                        <div className="d-flex">
                          <InputGroup.Text>$</InputGroup.Text>
                          <Form.Control aria-label="Amount (to the nearest dollar)" />
                          <InputGroup.Text>.00</InputGroup.Text>
                        </div>
                      </InputGroup>
                    </Col>
                    <Col>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Book Cover</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <InputGroup>
                    <InputGroup.Text>About Book</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                  </InputGroup>
                  <Button className="rounded mt-3" variant="primary">
                  Add book to sale
                </Button>
                </Form>
            </div>):(
                // Exchange form
              <div className="container">
                <h3>To Exchange</h3>
                <Form>
                  <Row>
                    <Col>
                      <Form.Label>Book name</Form.Label>
                      <Form.Control placeholder="Book name" />
                    </Col>
                    <Col>
                      <Form.Label>Author name</Form.Label>
                      <Form.Control placeholder="Author name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <Form.Label>Exchange with:</Form.Label>
                          <Form.Control placeholder="Book name" />
                        </Col>
                        <Col>
                          <Form.Label>Author name</Form.Label>
                          <Form.Control placeholder="Author name" />
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Book Cover</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <InputGroup>
                    <InputGroup.Text>About Book</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                  </InputGroup>
                  <Button className="rounded mt-3" variant="primary">
                  Add book to exchange
                </Button>
                </Form>
              </div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

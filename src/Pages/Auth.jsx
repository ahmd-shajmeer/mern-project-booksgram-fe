import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import auth from '../assets/Images/auth.png'
import { Link } from "react-router-dom";

function Auth({insideRegister}) {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="w-75 mx-auto mt-5">
          <div className="row card p-5 flex-row">
          <div className="col-lg-6">
            {
                insideRegister?(
              <div>
                  <h3>Register</h3>
                  <Form>
                    <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text className="rounded" id="inputGroupPrepend">@</InputGroup.Text>
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
                      <Form.Control className="rounded" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control className="rounded" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="rounded" variant="primary">
                      Register
                    </Button>
                  </Form>
                  <p>Already a member? <Link to={'/login'}>Login</Link></p>
              </div>):(
                <div>
                    <h3>Login</h3>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control className="rounded" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control className="rounded" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="rounded" variant="primary">
                          Login
                        </Button>
                      </Form>
                      <p>Not a member? <Link to={'/register'}>Register</Link></p>
                </div>)}
            </div>
            <div className="col-lg-6">
                <img className="img-fluid ms-5" src={auth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;

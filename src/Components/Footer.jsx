import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-content w-100 mt-5 pt-5 pb-5">
        <div className="container d-flex justify-content-between text-secondaryflex-column flex-sm-row">
          <div className="title w-25">
            <h4>BooksGram</h4>
            <p>
              Discover literary treasures at BooksGram. Buy, sell, and exchange
              books effortlessly in our vibrant community. Join us in
              celebrating the joy of reading and finding new homes for stories.
            </p>
          </div>
          <div className="links d-flex flex-column">
            <h4>Links</h4>
            <Link to={"/"} className="nav-link">
              <a>Home</a>
            </Link>
            <Link to={"register"} className="nav-link">
              <a>Register</a>
            </Link>
            <Link to={"login"} className="nav-link">
              <a>Login</a>
            </Link>
          </div>
          <div className="guides">
            <h4>Guides</h4>
            <Link to={"/"} className="nav-link">
              <a>Home</a>
            </Link>
            <Link to={"exchange"} className="nav-link">
              <a>Exchange</a>
            </Link>
            <Link to={"sell"} className="nav-link">
              <a>Sell</a>
            </Link>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <div className="d-flex gap-2">
              <p>Email : booksgram.in@read.com</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-4">
          Copyright &copy;2024 BooksGram. Build With MERN.
        </p>
      </div>
    </>
  );
}

export default Footer;

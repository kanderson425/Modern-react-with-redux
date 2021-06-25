import React from "react";
import { Link } from "react-router-dom";
import GooglelAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GooglelAuth />
      </div>
    </div>
  );
};

export default Header;

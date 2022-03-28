import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark p-3">
        <Link to="/" className="text-center text-white mx-5 ">
          Home
        </Link>
        <Link to="/about" className="text-center text-white mx-5 table-hover ">
          About
        </Link>
        <Link to="/products" className="text-center text-white mx-5 ">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

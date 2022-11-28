import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const cookie = Cookies.get("access");

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access");
    navigate("/");
  };

  return (
    <nav className="nav">
      <ul>
        {cookie ? (
          <>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/withdraw">Withdraw</Link>
            </li>
            <li>
              <Link to="/deposit">Deposit</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                <b>Logout</b>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

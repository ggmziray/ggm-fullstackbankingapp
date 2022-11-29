import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="layer">
        <div className="layer_cont">
          <h1>Welcome!</h1>
          <h2>This is the best bank in the world!</h2>
          <h3>Sign up or log in to start using our services</h3>

          <div className="buttons">
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

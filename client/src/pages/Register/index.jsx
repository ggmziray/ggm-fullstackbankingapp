import React, { useState } from "react";
import Navbar from "../../Components/Nav";
import Input from "../../Components/Input";
import axios from "axios";
const Register = ({ id, setId }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await axios
      .post("/api/v1/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res);
        setMessage(res.data?.message[0]?.message);
        setId(res.data.user.id);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="main_cont">
        <h1>Register</h1>
        <p>{message}</p>
        <div className="inputs_cont">
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Input
            type="button"
            value="Register"
            onClick={handleSubmit}
            style={{ backgroundColor: "#18A558", width: "8rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default Register;

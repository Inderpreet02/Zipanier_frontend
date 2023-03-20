import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
  };

  return (
    <div className="login__container">
      <div className="login__wrapper">
        <div className="login__title">CREATE ACCOUNT</div>
        <form className="login__form">
          <input
            type="text"
            placeholder="name"
            className="login__input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            className="login__input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login__agreement">
            By Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
            amet. <b>PRIVACY POLICY</b>
          </div>

          {error && <span className="login__error">Somethine went wrong</span>}
          <button className="login__btn" onClick={handleClick}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

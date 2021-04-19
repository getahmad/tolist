import axios from "axios";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthContext } from "../context/auth";

const Auth = () => {
  const { isAuthenticated, loginSuccess, loginFailed } = useContext(
    AuthContext
  );
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const isLogin = () => setLogin(!login);
  const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1";

  const userLogin = async () => {
    setIsLoading(true);
    const user = {
      email,
      password,
    };
    try {
      const res = await axios.post(`${baseUrl}/user/signin`, user);
      localStorage.setItem("token", res.data.token);
      setEmail("");
      setPassword("");
      setIsLoading(false);
      loginSuccess();
    } catch (error) {
      setIsError(true);
      setError(error.response.data.errors);
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setIsError(false);
        setError("");
        loginFailed();
      }, 2000);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/task" />;
  }

  const userRegister = async () => {
    setIsLoading(true);
    const user = {
      name,
      email,
      password,
    };
    try {
      const res = await axios.post(`${baseUrl}/user/signup`, user);
      localStorage.setItem("token", res.data.token);
      setName("");
      setEmail("");
      setPassword("");
      loginSuccess();
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error.response.data.errors);
      setIsLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setIsError(false);
        setError("");
        loginFailed();
      }, 2000);
    }
  };

  return (
    <div style={box}>
      <h3 style={head}>{login ? "login" : "register"}</h3>
      <div>
        {!login && (
          <Input
            type="text"
            value={name}
            placeholder="name"
            change={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          value={email}
          placeholder="email"
          change={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="password"
          change={(e) => setPassword(e.target.value)}
        />
      </div>

      <div style={btn}>
        {isError && (
          <div>
            {error &&
              error.map((item, index) => (
                <p style={{ margin: "0.34rem 0", color: "red" }} key={index}>
                  {item.msg}
                </p>
              ))}
          </div>
        )}
        <Button
          action={login ? userLogin : userRegister}
          variant="primary"
          load={isLoading}
          text={login ? "Login" : "Register"}
        />
      </div>

      {login ? (
        <div style={paragraph}>
          <p>
            Belum punya akun? silahkan{" "}
            <span style={textBtn} onClick={isLogin}>
              register
            </span>
          </p>
        </div>
      ) : (
        <div style={paragraph}>
          <p>
            sudah punya akun? silahkan{" "}
            <span style={textBtn} onClick={isLogin}>
              login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;

const box = {
  background: "#fff",
  width: "25%",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%)",
  padding: "0.7rem",
};

const head = {
  textAlign: "center",
  marginBottom: "0.4rem",
};

const btn = {
  textAlign: "center",
  marginTop: "0.5rem",
};

const paragraph = {
  textAlign: "center",
  marginTop: "0.5rem",
};

const textBtn = {
  color: "#57ea4f",
  fontSize: "17px",
  cursor: "pointer",
};

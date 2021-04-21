import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { loginAuth, registerAuth } from "../store/actions/auth";
// import { checkLogin } from "../utils/Helper";

const Auth = () => {
  const { isAuthenticated, isLoading, errors } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regis = () => setIsLogin(!isLogin);

  const userLogin = async () => {
    const user = { email, password };
    dispatch(loginAuth(user));
    setEmail("");
    setPassword("");
  };

  const userRegister = async () => {
    const user = { email, password, name };
    dispatch(registerAuth(user));
    setEmail("");
    setPassword("");
    setName("");
  };

  if (isAuthenticated ) {
    return <Redirect to="/task" />;
  } 

  return (
    <div style={box}>
      <h3 style={head}>{isLogin ? "Login" : "register"}</h3>
      <div>
        {!isLogin && (
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
        <div>
          {errors &&
            errors.map((item, index) => (
              <p style={{ margin: "0.34rem 0", color: "red" }} key={index}>
                {item.msg}
              </p>
            ))}
        </div>

        <Button
          action={isLogin ? userLogin : userRegister}
          variant="primary"
          load={isLoading}
          text={isLogin ? "Login" : "Register"}
        />
      </div>

      {isLogin ? (
        <div style={paragraph}>
          <p>
            Belum punya akun? silahkan{" "}
            <span style={textBtn} onClick={regis}>
              register
            </span>
          </p>
        </div>
      ) : (
        <div style={paragraph}>
          <p>
            sudah punya akun? silahkan{" "}
            <span style={textBtn} onClick={regis}>
              Login
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

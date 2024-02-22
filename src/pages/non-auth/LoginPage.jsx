import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventdefault();
    try {
      const response = await authApi.post("/login", {id, password});
      alert("로그인에 성공하였습니다. 메인 페이지로 이동할게요.")

      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('nickname', response.data.nickname);

      navigate("/");
    }
    catch (error) {
      alert(error.response.data.message)
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="id">id</label>
          <input />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input />
        </div>

        <button type="submit">Login</button>
        <button type="button" onClick={() => {navigate("/signup");}}>회원가입하러가기</button>
        <button type="button" onClick={() => {navigate("/");}}>홈으로</button>
      </form>
    </div>
  );
};

export default LoginPage;

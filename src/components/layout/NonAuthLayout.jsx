import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const NonAuthLayout = () => {

  const isLogin = localStorage.getItem('accessToken');

  useEffect(() => {
    if (isLogin) {
      alert("이미 로그인 상태입니다. 홈으로 이동할게요.")
      return <Navigate to="/" />
    }
  }, [isLogin]);

  return (
    <div>
      <h1>Non Auth Layout</h1>
      <p>로그인이 반드시 안되어있어야 하는 페이지</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NonAuthLayout;

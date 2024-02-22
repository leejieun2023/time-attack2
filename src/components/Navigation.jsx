import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {

  const inLogin = localStorage.getItem('accessToken');

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('nickname');
    navigate("/");
  };

  const onLogin = () => {
    navigate("/login")
  };

  return (
    <nav>
      {/* 로그인 또는 로그아웃 버튼 */}
      {inLogin ? (
      <button onClick={onLogout}>로그아웃</button>
      ) : (
      <button onClick={onLogin}>로그인하러가기</button>
      )}

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <hr />

        {/* 로그인 여부가 상관없는 메뉴 */}
        <p>❗️ 로그인 여부가 상관없는 메뉴</p>
        <li>
          <Link to="/">홈 메뉴로</Link>
        </li>
        <li>
          <Link to="/SearchPage">검색페이지로</Link>
        </li>
        <li>
          <Link to="/TestPage">권한테스트 페이지로</Link>
        </li>

        <hr />

        {/* 로그인이 반드시 필요한 메뉴 */}
        <p>❗️ 로그인이 반드시 필요한 메뉴</p>
        <li>
          <Link to="/user/1">1번 유저의 정보</Link>
        </li>
        <li>
          <Link to="/user/2">2번 유저의 정보</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

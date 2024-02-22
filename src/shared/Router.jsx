import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import TestPage from "../pages/TestPage";
import LoginPage from "../pages/non-auth/LoginPage";
import SignupPage from "../pages/non-auth/SignupPage";
import NotFount from "../pages/default-set/NotFount";
import UserProfilePage from "../pages/auth/UserProfilePage";

import Layout from "../components/layout/Layout";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import AuthLayout from "../components/layout/AuthLayout";



export default function RouterPage() {

  const isLogin = true;

  return (
    <Router>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 (Home, SearchPage, TestPage) */}
        <Route>
          <Route path="/" element={<Layout><Home /></Layout>}/>
          <Route path="/search" element={<Layout><SearchPage /></Layout>}/>
          <Route path="/testPage" element={<Layout><TestPage /></Layout>}/>
        </Route>

        {/* 로그인 상태가 반드시 아니어야 하는 라우터 (LoginPage, SignUpPage)*/}
        {isLogin ? null : (
        <Route>
          <Route path="/login" element={<NonAuthLayout><LoginPage /></NonAuthLayout>}/>
          <Route path="/signup" element={<NonAuthLayout><SignupPage /></NonAuthLayout>}/>
        </Route>
        )}

        {/* 로그인이 필요한 라우터 (UserProfilePage)*/}
        {isLogin ? (
        <Route>
          <Route path="/user/:userId" element={<AuthLayout><UserProfilePage /></AuthLayout>}/>
        </Route>
        ) : null}

        {/* 404 Not Found (NotFount)*/}
        <Route path="*" element={<NotFount />}/>
      </Routes>
    </Router>
  );
}

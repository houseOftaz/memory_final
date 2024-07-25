import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import HomeMenu from "./pages/users/HomeMenu";
import TestModePage from "./pages/users/TestModePage";
import RegisterPage from "./pages/users/RegisterPage";
import LoginPage from "./pages/users/LoginPage";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/Test-mode-game" element={<TestModePage />} />
          <Route path="/Signup" element={<RegisterPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/back-to-home" element={<HomeMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

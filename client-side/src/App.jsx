import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import HomePage from "./pages/users/HomePage";
import TestModePage from "./pages/users/TestModePage";
import RegisterPage from "./pages/users/RegisterPage";
import LoginPage from "./pages/users/LoginPage";
import ProfilPage from "./pages/users/ProfilPage";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Test-mode-game" element={<TestModePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/profile" element={<ProfilPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

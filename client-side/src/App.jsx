import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import HomePage from "./pages/users/HomePage";
import TestModePage from "./pages/games/TestModePage";
import RegisterPage from "./pages/users/RegisterPage";
import LoginPage from "./pages/users/LoginPage";
import ProfilPage from "./pages/users/ProfilPage";
import ThemesPage from "./pages/games/ThemesPage";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test-mode" element={<TestModePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/themes" element={<TestModePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

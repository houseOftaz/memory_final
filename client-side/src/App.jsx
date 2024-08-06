import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminPage from "./pages/admin/AdminPage";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/users/HomePage";
import DisplayChoices from "./pages/games/DisplayChoices";
import ThemesDiplay from "./pages/games/ThemesDiplay";
import RegisterPage from "./pages/users/RegisterPage";
import LoginPage from "./pages/users/LoginPage";
import ProfilPage from "./pages/users/ProfilPage";
import RankPage from "./pages/users/RankPage";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test-mode" element={<DisplayChoices />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/themes" element={<ThemesDiplay />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/classement" element={<RankPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminPage from "./pages/admin/AdminPage";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/users/HomePage";
import ChooseNbrDisplay from "./pages/games/test-mode/ChooseNbrDisplay";
import ThemesDiplay from "./pages/games/themes-mode/ThemesDiplay";
import RegisterPage from "./pages/users/RegisterPage";
import LoginPage from "./pages/users/LoginPage";
import ProfilePage from "./pages/users/ProfilePage";
import RankPage from "./pages/users/RankPage";
import ChallengeModeGame from "./pages/games/challenge-mode/ChallengeModeGame";
import ChronoDisplay from "./pages/games/chrono-mode/ChronoDisplay";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test-mode" element={<ChooseNbrDisplay />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/themes" element={<ThemesDiplay />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/classement" element={<RankPage />} />
          <Route path="/challenge" element={<ChallengeModeGame />} />
          <Route path="/chrono" element={<ChronoDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

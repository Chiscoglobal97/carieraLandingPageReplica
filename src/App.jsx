import {
  Routes,
  Route,
} from "react-router";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WelcomePage from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/signup"
        element={<SignupPage />}
      />

      <Route
        path="/welcome"
        element={<WelcomePage />}
      />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
    </Routes>
  );
}

export default App;
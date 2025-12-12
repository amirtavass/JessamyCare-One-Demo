import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import MicrosoftLogin from "./pages/MicrosoftLogin";
import AppLayout from "./layout/AppLayout";
import PasswordGate from "./components/PasswordGate";
import "./App.css";

function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/microsoft-login" element={<MicrosoftLogin />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </PasswordGate>
  );
}

export default App;

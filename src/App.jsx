import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AppLayout from "./layout/AppLayout";
import PasswordGate from "./components/PasswordGate";

function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </PasswordGate>
  );
}

export default App;

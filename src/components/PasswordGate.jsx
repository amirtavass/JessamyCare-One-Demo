import { useState, useEffect } from "react";

function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already authenticated in session
  useEffect(() => {
    const auth = sessionStorage.getItem("demo_auth");
    if (auth === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Change this password to whatever you want
    const DEMO_PASSWORD = "jessamy2025"; // ⚠️ Change this!

    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem("demo_auth", "authenticated");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-jessamy-purple mb-2">
            Demo Access
          </h1>
          <p className="text-jessamy-dark">
            This is a private demo. Please enter the password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-base font-medium text-jessamy-dark mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter demo password"
              className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
              required
              autoFocus
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-jessamy-purple hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-base transition-colors shadow-sm"
          >
            Access Demo
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Contact administrator for access credentials</p>
        </div>
      </div>
    </div>
  );
}

export default PasswordGate;

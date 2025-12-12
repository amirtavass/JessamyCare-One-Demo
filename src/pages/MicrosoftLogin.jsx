import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MicrosoftLogin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, this would redirect to Microsoft's auth page
    // For demo, just go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="py-8 md:py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          {/* Microsoft Logo */}
          <div className="text-center mb-6">
            <svg
              className="w-12 h-12 mx-auto mb-4"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path d="M0 0h23v23H0z" fill="#f3f3f3" />
              <path d="M1 1h10v10H1z" fill="#f35325" />
              <path d="M12 1h10v10H12z" fill="#81bc06" />
              <path d="M1 12h10v10H1z" fill="#05a6f0" />
              <path d="M12 12h10v10H12z" fill="#ffba08" />
            </svg>
            <h1 className="text-2xl font-bold text-jessamy-dark mb-2">
              Sign in with Microsoft
            </h1>
            <p className="text-gray-600 text-sm">
              Use your work or school account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Email or Username
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="someone@example.com"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-base transition-colors shadow-sm"
            >
              Next
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to other sign-in options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MicrosoftLogin;

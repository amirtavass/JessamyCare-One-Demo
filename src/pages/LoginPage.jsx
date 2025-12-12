import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const userTypes = {
  //   staff: {
  //     label: "Care Worker",
  //     buttonText: "Secure Staff Login",
  //   },
  //   admin: {
  //     label: "Admin/Manager",
  //     buttonText: "Secure Admin Login",
  //   },
  //   patient: {
  //     label: "Family/Patient",
  //     buttonText: "Secure Family Login",
  //   },
  // };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Login attempt:", formData);
  // };

  return (
    <div className="py-8 md:py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-jessamy-dark mb-2">
              Employee Login
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex border-b-2 border-gray-200 mb-8">
            <button
              type="button"
              className="tab-button flex-1 py-3 px-2 text-sm md:text-base font-medium transition-all -mb-0.5 text-jessamy-purple"
            >
              Care Worker
            </button>
            {/* <button
              type="button"
              onClick={() => setUserType("admin")}
              className={`flex-1 py-3 px-2 text-sm md:text-base font-medium transition-all ${
                userType === "admin"
                  ? "text-jessamy-purple border-b-4 border-jessamy-purple -mb-0.5"
                  : "text-gray-500 hover:text-jessamy-dark"
              }`}
            >
              Admin/Manager
            </button>
            <button
              type="button"
              onClick={() => setUserType("patient")}
              className={`flex-1 py-3 px-2 text-sm md:text-base font-medium transition-all ${
                userType === "patient"
                  ? "text-jessamy-purple border-b-4 border-jessamy-purple -mb-0.5"
                  : "text-gray-500 hover:text-jessamy-dark"
              }`}
            >
              Family/Patient
            </button> */}
          </div>

          <form /*onSubmit={handleSubmit}*/ className="space-y-6">
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-jessamy-purple hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-base transition-colors shadow-sm"
            >
              Secure Employee Login
            </button>
          </form>

          {/* SSO Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* SSO Login Options */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => navigate("/microsoft-login")}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-jessamy-purple hover:bg-gray-50 text-jessamy-dark py-3.5 rounded-lg font-medium text-base transition-all shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 23 23" fill="none">
                <path d="M0 0h23v23H0z" fill="#f3f3f3" />
                <path d="M1 1h10v10H1z" fill="#f35325" />
                <path d="M12 1h10v10H12z" fill="#81bc06" />
                <path d="M1 12h10v10H1z" fill="#05a6f0" />
                <path d="M12 12h10v10H12z" fill="#ffba08" />
              </svg>
              Login with Microsoft
            </button>
          </div>

          <Link
            to="/forgot-password"
            className="block text-jessamy-purple hover:text-primary-dark text-base text-center mt-6 font-medium"
          >
            Forgot Password or Need Help?
          </Link>

          {/* Staff Registration Link */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-jessamy-dark mb-3 text-sm">
              New to Jessamy Care?
            </p>
            <Link
              to="/register"
              className="inline-block text-jessamy-purple hover:text-primary-dark font-semibold text-base underline"
            >
              Apply as Care Worker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

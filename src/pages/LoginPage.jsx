import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [userType, setUserType] = useState("patient"); // patient, staff, admin
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const userTypes = {
    staff: {
      label: "Care Worker",
      buttonText: "Secure Staff Login",
    },
    admin: {
      label: "Admin/Manager",
      buttonText: "Secure Admin Login",
    },
    patient: {
      label: "Family/Patient",
      buttonText: "Secure Family Login",
    },
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Login attempt:", { ...formData, userType });
  // };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow py-8 md:py-12 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-jessamy-dark mb-2">
                Login As:
              </h1>
            </div>

            {/* Tabs */}
            <div className="flex border-b-2 border-gray-200 mb-8">
              <button
                type="button"
                onClick={() => setUserType("staff")}
                className={`flex-1 py-3 px-2 text-sm md:text-base font-medium transition-all ${
                  userType === "staff"
                    ? "text-jessamy-purple border-b-4 border-jessamy-purple -mb-0.5"
                    : "text-gray-500 hover:text-jessamy-dark"
                }`}
              >
                Care Worker
              </button>
              <button
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
              </button>
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
                {userTypes[userType].buttonText}
              </button>
            </form>

            <Link
              to="/forgot-password"
              className="block text-jessamy-purple hover:text-primary-dark text-base text-center mt-4 font-medium"
            >
              Forgot Password or Need Help?
            </Link>

            {/* Conditional links - only show for patients */}
            {userType === "patient" && (
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

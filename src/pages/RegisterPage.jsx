import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    workEligibility: "",
    careSpecialty: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Staff Application:", formData);
  // };

  return (
    <div className="py-8 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-jessamy-purple mb-2">
              Staff Application
            </h1>
            <p className="text-jessamy-dark text-base">
              Apply to join our care team
            </p>
          </div>

          <form /*</div>onSubmit={handleSubmit}*/ className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                placeholder="07XXX XXXXXX"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Work Eligibility */}
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Work Eligibility Status
              </label>
              <select
                name="workEligibility"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.workEligibility}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your work eligibility</option>
                <option value="uk-right-to-work">UK Right to Work</option>
                <option value="requires-sponsorship">
                  Requires Sponsorship
                </option>
                <option value="skilled-worker-visa">Skilled Worker Visa</option>
              </select>
            </div>

            {/* Care Specialty */}
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Primary Care Specialty
              </label>
              <select
                name="careSpecialty"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.careSpecialty}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your specialty</option>
                <option value="adult-homecare">Adult Homecare</option>
                <option value="learning-disabilities">
                  Learning Disabilities
                </option>
                <option value="mental-health">Mental Health</option>
                <option value="childrens-services">Children's Services</option>
                <option value="autism-support">Autism Support</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-base font-medium text-jessamy-dark mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jessamy-purple focus:border-transparent transition-all"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-jessamy-purple hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-base transition-colors shadow-sm"
            >
              Submit Pre-Registration
            </button>
          </form>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-jessamy-dark mb-4 text-base">Already a User?</p>
            <Link
              to="/"
              className="inline-block bg-jessamy-purple hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Access Your Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

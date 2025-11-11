import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../components/ui/Logo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg">
      {/* Top bar with tagline */}
      <div className="bg-jessamy-purple py-2.5">
        <div className="container mx-auto px-4">
          <p className="text-xs md:text-sm text-center text-white font-medium">
            Trusted Healthcare & Social Care Staffing Across the UK
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-10 flex-grow justify-center">
            <a
              href="#home"
              className={`text-base transition-colors pb-1 border-b-2 ${
                isActive("/")
                  ? "font-bold text-jessamy-purple border-jessamy-purple"
                  : "font-medium text-jessamy-dark border-transparent hover:text-jessamy-purple"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base font-medium text-jessamy-dark border-b-2 border-transparent hover:text-jessamy-purple transition-colors pb-1"
            >
              About
            </a>
            <a
              href="#services"
              className="text-base font-medium text-jessamy-dark border-b-2 border-transparent hover:text-jessamy-purple transition-colors pb-1"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-jessamy-dark border-b-2 border-transparent hover:text-jessamy-purple transition-colors pb-1"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons - Right */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <a
              href="/"
              className={`px-5 py-2.5 rounded-lg font-semibold text-base transition-all ${
                isActive("/")
                  ? "bg-jessamy-purple text-white shadow-md font-bold"
                  : "border-2 border-gray-300 text-jessamy-dark hover:border-jessamy-purple hover:text-jessamy-purple hover:bg-purple-50"
              }`}
            >
              Login
            </a>
            <a
              href="/register"
              className={`px-5 py-2.5 rounded-lg font-semibold text-base transition-all ${
                isActive("/register")
                  ? "bg-jessamy-purple text-white shadow-md font-bold"
                  : "border-2 border-gray-300 text-jessamy-dark hover:border-jessamy-purple hover:text-jessamy-purple hover:bg-purple-50"
              }`}
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-jessamy-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className={`text-base transition-colors ${
                  isActive("/")
                    ? "font-bold text-jessamy-purple"
                    : "font-medium text-jessamy-dark"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base font-medium text-jessamy-dark hover:text-jessamy-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-base font-medium text-jessamy-dark hover:text-jessamy-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-jessamy-dark hover:text-jessamy-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="/"
                  className={`block text-center px-5 py-2.5 rounded-lg font-semibold text-base transition-all ${
                    isActive("/")
                      ? "bg-jessamy-purple text-white shadow-md font-bold"
                      : "border-2 border-gray-300 text-jessamy-dark hover:border-jessamy-purple hover:text-jessamy-purple"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className={`block text-center px-5 py-2.5 rounded-lg font-semibold text-base transition-all ${
                    isActive("/register")
                      ? "bg-jessamy-purple text-white shadow-md font-bold"
                      : "border-2 border-gray-300 text-jessamy-dark hover:border-jessamy-purple hover:text-jessamy-purple"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

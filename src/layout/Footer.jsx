function Footer() {
  return (
    <footer
      className="bg-jessamy-purple text-white py-10 mt-auto"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-base md:text-lg font-semibold tracking-wide uppercase">
            KIND, LOVING AND CARING SOLUTIONS FOR PEOPLE IN NEED
          </h2>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Contact</h3>
            <p className="text-base text-white mb-2">
              <a
                href="tel:01204777170"
                className="hover:underline"
                aria-label="Call 01204 777170"
              >
                01204 777170
              </a>
            </p>
            <p className="text-base text-white">
              <a
                href="tel:07824769078"
                className="hover:underline"
                aria-label="Call 07824 769078"
              >
                07824 769078
              </a>
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Visit Us</h3>
            <address className="text-base text-white not-italic leading-relaxed">
              Hamill House, 112-116 Chorley
              <br />
              New Rd Bolton BL1 4DH
            </address>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Working Hours</h3>
            <p className="text-base text-white mb-1">Monday - Friday</p>
            <p className="text-base text-white">8AM - 6PM</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-purple-400 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Jessamy Staffing Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

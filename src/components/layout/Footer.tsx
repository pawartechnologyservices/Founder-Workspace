import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-white/10 pt-16 px-4 sm:px-10 pb-10 text-gray-400">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center md:text-left items-center md:items-start">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-4">
              <div className="text-white font-bold text-2xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  Founder
                </span>{" "}
                Workspace
              </div>
            </Link>
            <p className="text-sm mb-4 max-w-md">
              Founder Workspace provides powerful software solutions for growing
              businesses. Our comprehensive suite helps founders streamline
              operations, manage leads, and automate billing processes.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              {/* Social Icons */}
              {[
                {
                  href: "#",
                  label: "Facebook",
                  svg: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.3c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7H17l-.5 3h-2v7A10 10 0 0022 12z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "Twitter",
                  svg: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "Instagram",
                  svg: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4a4.9 4.9 0 011.8 1.2 4.9 4.9 0 011.2 1.8c.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4a4.9 4.9 0 01-1.2 1.8 4.9 4.9 0 01-1.8 1.2c-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4a4.9 4.9 0 01-1.8-1.2 4.9 4.9 0 01-1.2-1.8c-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4a4.9 4.9 0 011.2-1.8 4.9 4.9 0 011.8-1.2c.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 2c-3.1 0-3.5 0-4.8.1-1 .1-1.5.2-1.9.3a2.9 2.9 0 00-1.1.7 2.9 2.9 0 00-.7 1.1c-.1.4-.2.9-.3 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.5.3 1.9.2.4.4.8.7 1.1.3.3.7.6 1.1.7.4.1.9.2 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.5-.2 1.9-.3a2.9 2.9 0 001.1-.7 2.9 2.9 0 00.7-1.1c.1-.4.2-.9.3-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.5-.3-1.9a2.9 2.9 0 00-.7-1.1 2.9 2.9 0 00-1.1-.7c-.4-.1-.9-.2-1.9-.3-1.3-.1-1.7-.1-4.8-.1zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-3.1a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "GitHub",
                  svg: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.6.8 1.8 1.2.6 1 1.6.7 2 .5v-1.5c-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 1.9 1.2 3.2 0 4.7-2.7 5.7-5.3 6v1.7c0 .3.2.6.7.5A10.3 10.3 0 0022 12.2C22 6.6 17.5 2 12 2z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }, i) => (
                <a
                  key={i}
                  href={href}
                  className="hover:text-white transition-colors"
                  aria-label={label}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="https://pts-crm-software.netlify.app/"
                  className="hover:text-white"
                >
                  Customer Relationship Management
                </Link>
              </li>
              <li>
                <Link
                  to="https://pts-erp-systeme.netlify.app/"
                  className="hover:text-white"
                >
                  ERP System
                </Link>
              </li>
              <li>
                <Link
                  to="https://pts-billing-system.netlify.app/"
                  className="hover:text-white"
                >
                  Billing System
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4"> Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="" className="hover:text-white">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white">
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white">
                  Product Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Founder Workspace. All rights
            reserved.
          </p>
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-12 w-auto mx-auto lg:h-20 lg:w-auto"
          />
          <div className="flex gap-4 justify-center">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

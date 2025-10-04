import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Code, HelpCircle, Menu, X } from 'lucide-react';

const FounderWorkspaceNavbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop View
  const DesktopNav = () => (
    <div className="hidden sm:flex items-center mr-52 space-x-1">
      {/* Home Link */}
      <Link
        to="/"
        className="relative px-4 py-2 text-sm font-medium"
        onMouseEnter={() => setHoveredItem('home')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span className={`relative z-10 transition-all duration-300 ${hoveredItem === 'home' ? 'font-bold text-white' : 'text-white/90 hover:text-white'}`}>
          Home
        </span>
        {hoveredItem === 'home' && (
          <motion.span
            layoutId="navHover"
            className="absolute inset-0 bg-white/20 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Link>

      {/* Products Dropdown */}
      <div className="relative">
        <div
          className="relative group"
          onMouseEnter={() => {
            setIsProductsOpen(true);
            setHoveredItem('products');
          }}
          onMouseLeave={() => {
            setIsProductsOpen(false);
            setHoveredItem(null);
          }}
        >
          <button
            type="button"
            className="relative px-4 py-2 text-sm font-medium flex items-center"
          >
            <span className={`relative z-10 transition-all duration-300 ${hoveredItem === 'products' ? 'font-bold text-white' : 'text-white/90 hover:text-white'}`}>
              Products
            </span>
            {hoveredItem === 'products' && (
              <motion.span
                layoutId="navHover"
                className="absolute inset-0 bg-white/20 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <svg
              className={`ml-2 h-5 w-5 text-white/80 inline transition-transform duration-200 ${
                isProductsOpen ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <AnimatePresence>
            {isProductsOpen && (
              <motion.div
                key="products-dropdown"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute z-10 left-0 mt-0 w-56 rounded-md shadow-lg bg-gray-800/95 backdrop-blur-sm ring-1 ring-white/10"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <div className="py-1">
                  <Link
                    to="https://pts-crm-software.netlify.app/"
                    className="flex items-start px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200"
                  >
                    <div>
                      <div className="font-bold text-white">Customer Relationship Management</div>
                      <p className="text-xs text-white/60 mt-1">Convert more prospects</p>
                    </div>
                  </Link>
                  <Link
                    to="https://pts-erp-systeme.netlify.app/"
                    className="flex items-start px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200"
                  >
                    <div>
                      <div className="font-bold text-white">ERP System</div>
                      <p className="text-xs text-white/60 mt-1">Streamline operations</p>
                    </div>
                  </Link>
                  <Link
                    to="https://pts-billing-system.netlify.app/"
                    className="flex items-start px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200"
                  >
                    <div>
                      <div className="font-bold text-white">Billing System</div>
                      <p className="text-xs text-white/60 mt-1">Automate payments</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Resources Dropdown */}
      <div className="relative">
        <div
          className="relative group"
          onMouseEnter={() => {
            setIsResourcesOpen(true);
            setHoveredItem('resources');
          }}
          onMouseLeave={() => {
            setIsResourcesOpen(false);
            setHoveredItem(null);
          }}
        >
          <button
            type="button"
            className="relative px-4 py-2 text-sm font-medium flex items-center"
          >
            <span className={`relative z-10 transition-all duration-300 ${hoveredItem === 'resources' ? 'font-bold text-white' : 'text-white/90 hover:text-white'}`}>
              Resources
            </span>
            {hoveredItem === 'resources' && (
              <motion.span
                layoutId="navHover"
                className="absolute inset-0 bg-white/20 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <svg
              className={`ml-2 h-5 w-5 text-white/80 inline transition-transform duration-200 ${
                isResourcesOpen ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <AnimatePresence>
            {isResourcesOpen && (
              <motion.div
                key="resources-dropdown"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute z-10 left-0 mt-0 w-56 rounded-md shadow-lg bg-gray-800/95 backdrop-blur-sm ring-1 ring-white/10"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <div className="py-1">
                  <Link
                    to="/resources/blog"
                    className="flex items-center px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200"
                  >
                    <BookOpen className="w-5 h-5 mr-3 text-white/60" />
                    <div>
                      <div className="font-bold text-white">Blog</div>
                      <p className="text-xs text-white/60 mt-1">Latest insights</p>
                    </div>
                  </Link>
                  <Link
                    to="/resources/documentation"
                    className="flex items-center px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200"
                  >
                    <Code className="w-5 h-5 mr-3 text-white/60" />
                    <div>
                      <div className="font-bold text-white">Documentation</div>
                      <p className="text-xs text-white/60 mt-1">Guides & API</p>
                    </div>
                  </Link>
                  <Link
                    to="/resources/support"
                    className="flex items-center px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200"
                  >
                    <HelpCircle className="w-5 h-5 mr-3 text-white/60" />
                    <div>
                      <div className="font-bold text-white">Support</div>
                      <p className="text-xs text-white/60 mt-1">Get help</p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FAQs Link */}
      <Link
        to="/faqs"
        className="relative px-4 py-2 text-sm font-medium"
        onMouseEnter={() => setHoveredItem('faqs')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span className={`relative z-10 transition-all duration-300 ${hoveredItem === 'faqs' ? 'font-bold text-white' : 'text-white/90 hover:text-white'}`}>
          FAQs
        </span>
        {hoveredItem === 'faqs' && (
          <motion.span
            layoutId="navHover"
            className="absolute inset-0 bg-white/20 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Link>

      {/* Contact Link */}
      <Link
        to="/contact"
        className="relative px-4 py-2 text-sm font-medium"
        onMouseEnter={() => setHoveredItem('contact')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span className={`relative z-10 transition-all duration-300 ${hoveredItem === 'contact' ? 'font-bold text-white' : 'text-white/90 hover:text-white'}`}>
          Contact
        </span>
        {hoveredItem === 'contact' && (
          <motion.span
            layoutId="navHover"
            className="absolute inset-0 bg-white/20 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Link>
    </div>
  );

  // Mobile View remains the same as in previous example
  const MobileNav = () => (
    <>
      <button
        type="button"
        className="sm:hidden p-2 rounded-md text-white"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm sm:hidden"
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                className="p-2 rounded-md text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-4 pt-2 pb-8 space-y-4">
              <Link
                to="/"
                className="block px-4 py-3 text-lg font-medium text-white rounded-md hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="border-t border-white/10 pt-2">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-white rounded-md hover:bg-white/10"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Products</span>
                  <svg
                    className={`h-5 w-5 text-white/80 transition-transform duration-200 ${
                      isProductsOpen ? 'transform rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 space-y-2 overflow-hidden"
                  >
                    <Link
                      to="https://pts-crm-system.netlify.app/"
                      className="block px-4 py-2 text-base font-medium text-white/90 rounded-md hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Customer Relationship Management
                    </Link>
                    <Link
                      to="/product/erp-system"
                      className="block px-4 py-2 text-base font-medium text-white/90 rounded-md hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      ERP System
                    </Link>
                    <Link
                      to="chttps://pts-billing-system.netlify.app/"
                      className="block px-4 py-2 text-base font-medium text-white/90 rounded-md hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Billing System
                    </Link>
                  </motion.div>
                )}
              </div>
              <div className="border-t border-white/10 pt-2">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-white rounded-md hover:bg-white/10"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  <span>Resources</span>
                  <svg
                    className={`h-5 w-5 text-white/80 transition-transform duration-200 ${
                      isResourcesOpen ? 'transform rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 space-y-2 overflow-hidden"
                  >
                    <Link
                      to="/resources/blog"
                      className="flex items-center px-4 py-2 text-base font-medium text-white/90 rounded-md hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <BookOpen className="w-5 h-5 mr-3 text-white/60" />
                      Blog
                    </Link>
                    <Link
                      to="/resources/documentation"
                      className="flex items-center px-4 py-2 text-base font-medium text-white/90 rounded-md hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Code className="w-5 h-5 mr-3 text-white/60" />
                      Documentation
                    </Link>
                    <Link
                      to="/resources/support"
                      className="flex items-center px-4 py-2 text-base font-medium text-white/90 rounded-md hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <HelpCircle className="w-5 h-5 mr-3 text-white/60" />
                      Support
                    </Link>
                  </motion.div>
                )}
              </div>

              <div className="border-t border-white/10 pt-2">
                <Link
                  to="/faqs"
                  className="block px-4 py-3 text-lg font-medium text-white rounded-md hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
              </div>

              <div className="border-t border-white/10 pt-2">
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-lg font-medium text-white rounded-md hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <nav className="bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default FounderWorkspaceNavbar;
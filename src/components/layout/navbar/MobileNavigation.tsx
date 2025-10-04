import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  BookOpen,
  Code,
  HelpCircle,
  LogIn,
  UserPlus,
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";
import RgbBorderButton from "../../ui/rgb-border-button";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  productDropdownOpen: boolean;
  setProductDropdownOpen: (open: boolean) => void;
  pricingDropdownOpen: boolean;
  setPricingDropdownOpen: (open: boolean) => void;
  resourcesDropdownOpen: boolean;
  setResourcesDropdownOpen: (open: boolean) => void;
  onAuthClick: () => void;
  onDemoClick: () => void;
  onMenuToggle: () => void;
}

interface UserData {
  id: string;
  name: string;
}

const MobileNavigation = ({
  isMenuOpen,
  productDropdownOpen,
  setProductDropdownOpen,
  pricingDropdownOpen,
  setPricingDropdownOpen,
  resourcesDropdownOpen,
  setResourcesDropdownOpen,
  onAuthClick,
  onDemoClick,
  onMenuToggle,
}: MobileNavigationProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowLogoutDropdown(false);
  };

  const handleLoginClick = () => {
    const realUser = {
      id: "001",
      name: "Videsh Fees",
    };
    localStorage.setItem("user", JSON.stringify(realUser));
    setUser(realUser);
    onAuthClick();
  };

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 w-full h-screen bg-black z-50 py-4 animate-in slide-in-from-top duration-300 overflow-y-auto">
      <div className="container mx-auto px-4">
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="text-white font-bold text-xl">
            Founders  Workspace
          </Link>
          <button 
            onClick={onMenuToggle}
            className="text-white p-2 rounded-md hover:bg-white/10 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 text-white">
          <Link 
            to="/" 
            className="hover:text-gray-300 py-2 px-2 rounded-md hover:bg-white/5"
            onClick={onMenuToggle}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full text-left py-2 px-2 rounded-md hover:bg-white/5"
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
            >
              <span>Products</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${productDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {productDropdownOpen && (
              <div className="pl-4 border-l border-white/10 space-y-2 animate-in slide-in-from-top duration-200">
                <Link 
                  to="https://pts-crm-software.netlify.app/" 
                  className="block py-2 px-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5"
                  onClick={onMenuToggle}
                >
                 Customer Relationship Management
                </Link>
                <Link 
                  to="https://pts-erp-systeme.netlify.app/" 
                  className="block py-2 px-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5"
                  onClick={onMenuToggle}
                >
                  ERP System
                </Link>
                <Link 
                  to="https://pts-billing-system.netlify.app/" 
                  className="block py-2 px-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5"
                  onClick={onMenuToggle}
                >
                  Billing System
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="space-y-2">
            <button
              className="flex items-center justify-between w-full text-left py-2 px-2 rounded-md hover:bg-white/5"
              onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
            >
              <span>Resources</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${resourcesDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {resourcesDropdownOpen && (
              <div className="pl-4 border-l border-white/10 space-y-2 animate-in slide-in-from-top duration-200">
                <Link 
                  to="/resources/blog" 
                  className="block py-2 px-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5"
                  onClick={onMenuToggle}
                >
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" /> Blog
                  </div>
                </Link>
                <Link 
                  to="/resources/documentation" 
                  className="block py-2 px-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5"
                  onClick={onMenuToggle}
                >
                  <div className="flex items-center">
                    <Code className="w-4 h-4 mr-2" /> Documentation
                  </div>
                </Link>
                <Link 
                  to="/resources/support" 
                  className="block py-2 px-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5"
                  onClick={onMenuToggle}
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2" /> Support
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/faqs" 
            className="hover:text-gray-300 py-2 px-2 rounded-md hover:bg-white/5"
            onClick={onMenuToggle}
          >
            FAQs
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-gray-300 py-2 px-2 rounded-md hover:bg-white/5"
            onClick={onMenuToggle}
          >
            Contact
          </Link>

          {/* Authenticated User */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setShowLogoutDropdown(!showLogoutDropdown)}
                className="w-full flex items-center justify-between px-4 py-2 border border-white/30 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
              >
                <span className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {user.name}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showLogoutDropdown ? "rotate-180" : ""}`} />
              </button>
              {showLogoutDropdown && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-full z-10">
                  <button
                    onClick={() => {
                      handleLogout();
                      onMenuToggle();
                    }}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                  >
                    <LogOut className="mr-2 w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {!user && (
            <div className="pt-4">
              <RgbBorderButton onClick={handleLoginClick} className="w-full text-white">
                <UserPlus className="mr-1 h-4 w-4" /> Login
              </RgbBorderButton>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
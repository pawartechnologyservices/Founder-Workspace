import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// Import the newly created components
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopNavigation from "./navbar/DesktopNavigation";
import MobileNavigation from "./navbar/MobileNavigation";
import DesktopButtons from "./navbar/DesktopButtons";
import MobileMenuButton from "./navbar/MobileMenuButton";
import { User, LogOut } from "lucide-react";

interface NavbarProps {
  onAuthClick: () => void;
  onDemoClick: () => void;
}

interface UserData {
  id: string;
  name: string;
}

const Navbar = ({ onAuthClick, onDemoClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [showLogout, setShowLogout] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Fixed typo: scrollY instead of scrollY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setProductDropdownOpen(false);
    setPricingDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [location]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close all dropdowns when menu is toggled
    if (!isMenuOpen) {
      setProductDropdownOpen(false);
      setPricingDropdownOpen(false);
      setResourcesDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowLogout(false);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-2 border-b border-white/10"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Improved responsive padding */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Navigation and Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <DesktopNavigation
              productDropdownOpen={productDropdownOpen}
              setProductDropdownOpen={setProductDropdownOpen}
              pricingDropdownOpen={pricingDropdownOpen}
              setPricingDropdownOpen={setPricingDropdownOpen}
              resourcesDropdownOpen={resourcesDropdownOpen}
              setResourcesDropdownOpen={setResourcesDropdownOpen}
            />

            {/* Desktop User Info or Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowLogout(!showLogout)}
                  className="flex items-center text-white px-4 py-2 border border-white/30 rounded-md hover:bg-white/10 transition"
                >
                  <User className="h-4 w-4 mr-2" /> {user.name}
                </button>
                {showLogout && (
                  <button
                    onClick={handleLogout}
                    className="absolute right-0 mt-2 w-full bg-white text-black px-4 py-2 rounded-md shadow-lg z-10 flex items-center hover:bg-gray-100 transition"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </button>
                )}
              </div>
            ) : (
              <DesktopButtons onAuthClick={onAuthClick} onDemoClick={onDemoClick} />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileNavigation
        isMenuOpen={isMenuOpen}
        productDropdownOpen={productDropdownOpen}
        setProductDropdownOpen={setProductDropdownOpen}
        pricingDropdownOpen={pricingDropdownOpen}
        setPricingDropdownOpen={setPricingDropdownOpen}
        resourcesDropdownOpen={resourcesDropdownOpen}
        setResourcesDropdownOpen={setResourcesDropdownOpen}
        onAuthClick={onAuthClick}
        onDemoClick={onDemoClick}
        onMenuToggle={toggleMenu} // Added missing prop
      />
    </header>
  );
};

export default Navbar;
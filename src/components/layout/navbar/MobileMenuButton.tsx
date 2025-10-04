
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({ isMenuOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
    <button
      className="lg:hidden p-2 focus:outline-none"
      onClick={toggleMenu}
    >
      {isMenuOpen ? (
        <X className="h-6 w-6 text-white" />
      ) : (
        <Menu className="h-6 w-6 text-white" />
      )}
    </button>
  );
};

export default MobileMenuButton;

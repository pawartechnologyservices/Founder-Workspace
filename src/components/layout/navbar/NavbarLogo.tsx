
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center"
    >
      <div className="text-white font-bold text-2xl relative mr-20">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  ml-3">
          Founders
        </span>
        <span className="ml-2">Workspace</span>
      </div>
    </Link>
  );
};

export default NavbarLogo;

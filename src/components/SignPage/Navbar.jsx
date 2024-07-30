import { Link } from "react-router-dom";
import logo from "../../assets/Graphic_Elements.svg";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <div className="flex border-b  border-white/10 py-2 px-20 justify-between items-center w-full h-14 ">
      <Link
        to={"/"}
        className="w-14 h-11 gap-3 pl-6 flex items-center justify-center"
      >
        <img src={logo} alt="" />
        <span className="font-montserrat text-xl font-bold ">uniguide</span>
      </Link>
      <div className="flex py-2 {} justify-center items-center gap-x-5 ">
        <p className="cursor-pointer border-r border-white/10 pr-5 text-slate-400 sm:inline-flex hidden hover:text-secondary transition-colors">
          features
        </p>
        {children}
      </div>
    </div>
  );
};
export default Navbar;

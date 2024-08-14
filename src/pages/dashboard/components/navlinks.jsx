import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navlinks = ({ children, route }) => {
  return (
    <Link
      to={`${route}`}
      className="hover:border-b-3 flex justify-center items-center w-28 border-white transition-colors duration-300 text-white/50 hover:text-white/90 active:text-white/20  h-14 cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default Navlinks;

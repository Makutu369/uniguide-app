import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navlinks = ({ children, route }) => {
  return (
    <Link
      to={`${route}`}
      className=" transition-colors text-white/50 hover:text-white/90 active:text-[#DFFF57]/20  rounded-lg  cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default Navlinks;

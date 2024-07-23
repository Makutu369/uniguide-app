import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navlinks = ({ children }) => {
  return (
    <Link className=" transition-colors text-[#DFFF57]/50 hover:text-[#DFFF57]/30 active:text-[#DFFF57]/20  rounded-lg  cursor-pointer">
      {children}
    </Link>
  );
};

export default Navlinks;

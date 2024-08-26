import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navlinks = ({ children, route }) => {
  return (
    <Link
      to={`${route}`}
      className="hover:border-b-3 border-black text-black flex justify-center items-center w-28 dark:border-white transition-colors duration-300 dark:text-white/50 dark:hover:text-white/90 hover:text-black/90 active:text-white/20  h-14 cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default Navlinks;

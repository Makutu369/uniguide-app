import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ input, route }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${route}`, { replace: false })}
      className="w-52 h-16 btn mt-4 font-semibold font-montserrat  text-3xl text-primary bg-slate-300  dark:bg-graySecondary border-2 dark:border-white/70 dark:hover:border-white/50  rounded-full  "
    >
      {input}
    </div>
  );
};

export default PrimaryButton;

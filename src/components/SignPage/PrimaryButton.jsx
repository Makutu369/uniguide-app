import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ input, route }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${route}`, { replace: false })}
      className="w-52 h-16 btn mt-4 font-medium text-lg  text-white border-2 border-white/70 hover:border-white/50  rounded-full "
    >
      {input}
    </div>
  );
};

export default PrimaryButton;

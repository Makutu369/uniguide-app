import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ input, route }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${route}`, { replace: false })}
      className="w-52 h-16 btn mt-4  bg-white text-black active:bg-white/45 hover:bg-white rounded-full "
    >
      {input}
    </div>
  );
};

export default PrimaryButton;

import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ input, route }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${route}`, { replace: false })}
      className=" bg-primary/80 active:bg-primary/70 transition-colors cursor-pointer h-20 inline-flex text-lg px-6 rounded-full text-black justify-between items-center w-52 "
    >
      {input}
    </div>
  );
};

export default PrimaryButton;

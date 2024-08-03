import Lottie from "lottie-react";
import animateData from "../../../assets/success.json";

const Animate = () => {
  return (
    <div>
      <Lottie loop={false} animationData={animateData} />
    </div>
  );
};

export default Animate;

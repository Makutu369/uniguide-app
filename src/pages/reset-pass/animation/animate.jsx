import Lottie from "lottie-react";
import animation from "../../../assets/animate-key.json";
const Animate = () => {
  return (
    <div className="w-[90%] h-[90%]">
      <Lottie
        animationData={animation}
        speed={1}
        loop={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Animate;

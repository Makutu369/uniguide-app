import Lottie from "lottie-react";
import animation from "../../../assets/location.json";
const Animate = () => {
  return (
    <Lottie
      animationData={animation}
      speed={1}
      loop={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Animate;

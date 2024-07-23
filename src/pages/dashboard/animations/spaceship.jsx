import spaceshipData from "../../../assets/spaceship.json";
import Lottie from "lottie-react";
const Spaceship = () => {
  return (
    <div className="w-40 h-40">
      <Lottie animationData={spaceshipData} speed={0.5} />
    </div>
  );
};

export default Spaceship;

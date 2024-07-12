import Lottie from "lottie-react";
import animateData from "../../../assets/animate_person.json";

const Animation = () => {
  return (
    <div>
      <Lottie animationData={animateData} />
    </div>
  );
};

export default Animation;

import Lottie from "lottie-react";
import aiData from "../../../assets/ais_animation.json";
import { useRef } from "react";

const Ai = () => {
  const aiRef = useRef(null);
  return (
    <Lottie
      onMouseOver={() => {
        aiRef.current.play();
      }}
      onMouseOut={() => {
        aiRef.current.pause();
      }}
      lottieRef={aiRef}
      animationData={aiData}
    />
  );
};

export default Ai;

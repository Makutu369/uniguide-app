import { motion } from "framer-motion";
const SignButton = (input) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="bg-primaryColor  bg-opacity-90  hover:cursor-pointer w-48 h-14 rounded-full"
      type="submit"
    >
      {input}
    </motion.button>
  );
};

export default SignButton;

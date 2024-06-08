import { motion } from "framer-motion";
import { schema } from "../../utils/validate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const Form = () => {
  const [isloading, setIsloading] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => {
    setIsloading(true);
    const submitdata = async () => {
      try {
        const result = await fetch(
          "https://uniguide-back.onrender.com/user/register",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
            }),
          }
        );
        setIsloading(false);
        const object = result.json();
        console.log(object);
      } catch (err) {
        console.log(err);
        setIsloading(false);
      }
    };

    submitdata();
  };
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.0 }}
      transition={{ ease: "easeOut" }}
      className="mt-16 backdrop-blur-md relative z-50 flex flex-col py-7 bg-formbackground bg-opacity-40 mx-auto w-[566px] h-[540px] rounded-lg "
    >
      {" "}
      <div className="mx-auto flex text-[34px]">
        <p className="font-semibold">Sign up to Uniguide</p>
      </div>
      <form
        className="overflow-y-none  px-9 py-4 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mb-6">
          {" "}
          <p className="mb-2 text-[24px] text-slate-400 xs:text-base">email</p>
          <input
            type="text"
            className="w-full px-4 bg-opacity-25 rounded-full h-10 outline-none bg-formbackground"
            {...register("email")}
          />
          {errors.email && (
            <p className="px-2 font-normal text-sm text-red-400/75">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="w-full mb-6">
          <p className="mb-2   text-slate-400 text-[24px]">password</p>
          <input
            type="password"
            className="w-full px-4  bg-formbackground bg-opacity-25 rounded-full h-10 outline-none "
            {...register("password")}
          />{" "}
          {errors.password && (
            <p className="px-2 font-normal text-sm text-red-400/75">
              {errors.password.message?.toString()}
            </p>
          )}
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border-primary border-2 px-4 text-nowrap flex justify-center items-center  self-center hover:cursor-pointer w-32 h-14 rounded-full"
          type="submit"
        >
          <span>Sign up</span>{" "}
          {isloading && (
            <span className="ml-3 loading loading-spinner loading-lg"></span>
          )}
        </motion.button>
        <div className="flex mt-4 justify-center">
          <p>create a new account</p>
          <p className="text-secondary  hover:cursor-pointer ml-3 hover:underline">
            sign up
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;

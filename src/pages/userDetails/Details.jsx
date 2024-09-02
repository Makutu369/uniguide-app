import { courseStore } from "./store/courseStore";
import { useState } from "react";
import { coursesData } from "./lib/trackData";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/SignPage/Navbar";
import { Input, Spinner } from "@nextui-org/react";
const Details = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const course = courseStore((state) => state.course);
  const setCourse = courseStore((state) => state.setCourse);
  const courses = courseStore((state) => state.courses);
  const [isloading, setIsloading] = useState(false);

  const handleSelect = (e) => {
    setCourse(e.target.value);
  };
  const onSubmit = (value) => {
    const data = { ...value, select: course };
    const token = localStorage.getItem("token");
    const postData = async () => {
      setIsloading(true);
      try {
        const response = await fetch(
          "https://uniguide-back.onrender.com/user/submit-details",
          {
            method: "POST",
            body: JSON.stringify({
              firstName: data.firstName,
              lastName: data.lastName,
              highSchool: data.highSchool,
              grade: data.grade,
              highCourse: data.courses,
              Programme: data.select,
            }),
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          }
        );
        if (response.ok) {
          setIsloading(false);
          navigate(`/user/grade?q=${data.courses.join("++")}`);
        }
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }
    };
    postData();
  };

  return (
    <div className="w-full   font-boldm antialiased h-screen text-white/80 overflow-hidden">
      <Navbar route={"/dashboard"} />
      <div className="py-12 overflow-y-auto  gap-11 flex flex-col items-center  w-full px-16 h-full ">
        <div className="flex flex-col gap-y-2">
          <span className="text-3xl text-nowrap md:text-5xl font-semibold font-montserrat">
            welcome to Uniguide!
          </span>
          <span className="self-center text-white/50">
            lets get your details
          </span>
        </div>

        <form
          action=""
          className="flex md:w-[60%] text-base   md:px-5 py-2 scroll-m-1    flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <span className="text-base">details</span>
            <label className="input input-bordered rounded-full flex items-center gap-2">
              FirstName
              <input
                type="text"
                className="grow"
                name="firstName"
                required
                placeholder="Enter your name"
                {...register("firstName")}
              />
            </label>{" "}
            <label className="input input-bordered rounded-full flex items-center gap-2">
              LastName
              <input
                type="text"
                className="grow"
                name="lastName"
                required
                placeholder="Enter your name"
                {...register("lastName")}
              />
            </label>{" "}
          </div>
          <div className="text-base flex flex-col gap-4">
            <span className="block text-white">Your School</span>
            <label
              htmlFor=""
              className="input input-bordered rounded-full flex items-center "
            >
              <input
                type="text"
                name="school"
                className="  grow"
                placeholder="enter the name of your High School"
                required
                {...register("highSchool")}
              />
            </label>
            <select
              onChange={handleSelect}
              name="Programme"
              required
              className="select select-bordered rounded-full w-full "
            >
              <option disabled selected defaultValue={0}>
                what course did you offer
              </option>
              {coursesData.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <div className="flex flex-col gap-y-2 form-control">
              {courses.map((data, key) => (
                <div key={key} className="flex gap-x-2 ">
                  {" "}
                  <input
                    type="checkbox"
                    value={data}
                    className="checkbox rounded-full"
                    id={key}
                    {...register("courses")}
                  />
                  <label htmlFor={key} className="">
                    {data}
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="btn w-32 flex gap-x-2 rounded-full text-base text-black self-center bg-white/60 hover:bg-white/45 transition-colors"
            >
              <span>submit</span> {isloading && <Spinner color="default" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;

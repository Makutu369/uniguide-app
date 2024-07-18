import { courseStore } from "./store/courseStore";
import { coursesData } from "./lib/trackData";
import { useForm } from "react-hook-form";
import { useData } from "./store/userData";
const Details = () => {
  const { handleSubmit, register } = useForm();

  const course = courseStore((state) => state.course);
  const setCourse = courseStore((state) => state.setCourse);
  const courses = courseStore((state) => state.courses);

  const { getDetails } = useData();
  const handleSelect = (e) => {
    setCourse(e.target.value);
  };
  const onSubmit = (value) => {
    const data = { ...value, select: course };
    getDetails(data);
    console.log(data);
    // const postData = async () => {
    //   try {
    //     const response = await fetch("url", { method: "POST", body: data });
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  };

  return (
    <div className="w-full  text-3xl font-boldm antialiased h-screen text-white/80 overflow-hidden">
      <div className="w-full  flex justify-between  items-center backdrop-blur-md  px-20 h-14">
        <span>Logo</span>
        <span className="btn   text-white active:bg-white/45 outline-white outline-1 hover:bg-white text-base rounded-full focus:border-2  outline-none ">
          skip
        </span>
      </div>
      <div className="py-12  gap-10 flex flex-col items-center  w-full px-20 h-full ">
        <span className="text-5xl font-semibold">welcome!</span>
        <span className="">lets get your details</span>
        <form
          action=""
          className="flex w-[60%] text-base px-5 py-2 scroll-m-1  overflow-y-auto  flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <span className="text-base">details</span>
            <label className="input input-bordered rounded-full flex items-center gap-2">
              FirstName
              <input
                type="text"
                className="grow"
                name="firstname"
                placeholder="Enter your name"
                {...register("firstname")}
              />
            </label>{" "}
            <label className="input input-bordered rounded-full flex items-center gap-2">
              LastName
              <input
                type="text"
                className="grow"
                name="lastname"
                placeholder="Enter your name"
                {...register("lastname")}
              />
            </label>{" "}
          </div>
          <div className="text-base flex flex-col gap-3">
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
                {...register("High School")}
              />
            </label>
            <select
              onChange={handleSelect}
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
            <label
              htmlFor=""
              className="input input-bordered rounded-full flex items-center gap-2 "
            >
              Enter you grade
              <input
                type="text"
                name="school"
                className="grow"
                placeholder="enter your grade"
                {...register("grade")}
              />
            </label>
            <button type="btn submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;

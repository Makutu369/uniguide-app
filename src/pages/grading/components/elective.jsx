import { Input } from "@nextui-org/react";
const Elective = ({ data, result }) => {
  return (
    <div className="w-[40%] mx-auto flex flex-col ">
      <span className="text-3xl">Selected Subjects</span>
      {data.map((value, index) => (
        <Input
          key={index}
          name={value.split(" ").join("")}
          label={value}
          labelPlacement="outside"
          radius="none"
        />
      ))}
      <button className="border mt-5 border-white/20 w-32 h-11 hover:shadow-[3px_3px_0px_0px_indigo] transition-white">
        submit
      </button>{" "}
      <span className="absolute top-3 right-3 rounded-full h-11 w-11  flex justify-center items-center border-primary border-4">
        {result}
      </span>
    </div>
  );
};

export default Elective;

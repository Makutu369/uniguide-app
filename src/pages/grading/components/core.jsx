import { Input } from "@nextui-org/react";

const Core = ({ data }) => {
  return (
    <div className="w-[40%] h-[70%] mx-auto">
      <span className="text-3xl">Core subjects</span>
      {data.map((data, index) => (
        <Input
          key={index}
          label={data.label}
          labelPlacement="outside"
          name={data.name}
          type="number"
          placeholder=""
          radius="none"
        />
      ))}
    </div>
  );
};

export default Core;

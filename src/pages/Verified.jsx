import { useParams } from "react-router-dom";

const Verified = () => {
  const { id } = useParams();
  return (
    <div className="h-screen flex justify-center items-center w-full bg-slate-950 text-2xl font-boldm font-extralight">
      <span>Verified {id}</span>
    </div>
  );
};

export default Verified;

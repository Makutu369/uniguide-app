import cap from "../../../assets/graduation.svg";
// eslint-disable-next-line react/prop-types
const Admisions = ({ closed, percentage, number, color }) => {
  return (
    <div className="flex bg-[#121212] h-[35%] rounded-lg p-3 gap-20 justify-between items-center">
      <div className="flex gap-14 justify-center items-center">
        <div className="h-9 w-9 mt-5 p-1 border border-white/20 flex justify-center items-center rounded-xl">
          <img src={cap} alt="" />
        </div>
        <div>
          <span className="block text-base">{closed}</span>
          <span className="text-6xl ml-2 h-14 text-white font-extrabold">
            {number}
          </span>
        </div>
        <span className={"rounded-lg p-1 text-sm " + color}>{percentage}</span>
      </div>
    </div>
  );
};

export default Admisions;

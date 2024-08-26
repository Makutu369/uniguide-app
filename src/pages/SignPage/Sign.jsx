import Form from "../../components/SignPage/Form";
import Navbar from "../../components/SignPage/Navbar";
import EarthSvg from "../../assets/svgs/earthPerson";
const Sign = () => {
  return (
    <div className="overflow-y-auto   font-boldm   text-slate-50 bg-mainbackground w-full h-screen">
      <Navbar route={"/"} />
      <div className="relative h-[90%] ">
        <Form> </Form>
        <div className="h-96 w-[512px] absolute top-2 right-2 ">
          <EarthSvg />
        </div>
      </div>
    </div>
  );
};

export default Sign;

import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { useData } from "../dashboard/store/userData";
import Navbar from "../../components/SignPage/Navbar";
// get user token from local storage
//with users token get details
// allow user to change their detail
const Account = () => {
  const { getDetails, Details } = useData();
  const [change, setChange] = useState();
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="flex flex-col gap-y-2 h-screen">
      <Navbar route={"/dashboard"} />

      <div className="h-[90%] w-full  max-w-[50%] mx-auto border-white/20 border shadow rounded-sm p-[2%]">
        <Input
          isReadOnly={false}
          type="email"
          label="Email"
          variant="bordered"
          defaultValue={""}
          className="max-w-xs"
          radius={0}
        />
        <span>{Details.email}</span>
      </div>
    </div>
  );
};

export { Account };

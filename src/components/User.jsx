import { DropdownMenu, Avatar } from "@radix-ui/themes";
import { useData } from "../pages/dashboard/store/userData";
import { Link, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const { Details } = useData();
  console.log(Details);
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const lastname = String(Details.lastName);
  return (
    <div className="h-12 flex group justify-between items-center text-black/60 dark:border-white/15 border-black/15 dark:hover:border-white/25 hover:border-black/15 transition-colors cursor-pointer border rounded-full px-1 py-1">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="h-11 flex gap-x-1 text-sm  w-32 border-white/10 items-center ">
            <Avatar fallback={lastname.charAt(0)} radius="full" />
            <div className="flex font-semibold dark:group-hover:text-white/90 group-hover:text-black/90 transiton-colors flex-col justify-items-center  dark:text-white/60 ">
              <span>{Details.firstName}</span>
              <span>{Details.lastName}</span>
            </div>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <Link to={"/user/account"}>
            <DropdownMenu.Item shortcut="⌘ N">Account</DropdownMenu.Item>
          </Link>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <Link to={"/faqs"}>
                <DropdownMenu.Item>Faq</DropdownMenu.Item>
              </Link>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Item onClick={handleClick} shortcut="" color="red">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default User;

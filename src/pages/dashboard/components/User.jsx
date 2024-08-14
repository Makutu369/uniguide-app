import { DropdownMenu, Avatar } from "@radix-ui/themes";
import { useData } from "../store/userData";
import { Link, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const { Details } = useData();
  console.log(Details);
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="h-12 flex group justify-between items-center border-white/5 hover:border-white/15 transition-colors cursor-pointer border rounded-full px-2 py-1">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="h-11 flex gap-x-3 text-sm  w-32 border-white/10 items-center">
            <Avatar fallback={"M"} radius="full" />
            <div className="flex group-hover:text-white/90 transiton-colors flex-col justify-items-center text-white/60 font-montserrat">
              <span>{Details.firstName}Makutu</span>
              <span>{Details.lastName}Bright</span>
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

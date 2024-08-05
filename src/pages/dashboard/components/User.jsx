import { DropdownMenu, Avatar } from "@radix-ui/themes";
import { useData } from "../store/userData";
import { useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const { Details } = useData();
  console.log(Details);
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="h-11">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="h-11 flex gap-x-3 text-sm  w-32  sm:border-r border-white/10 items-center">
            <Avatar fallback={"T"} radius="full" />
            <div className="flex flex-col justify-items-center">
              <span>{Details.firstName}</span>
              <span>{Details.lastName}</span>
            </div>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item shortcut="⌘ N">Account</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Separator />
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
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

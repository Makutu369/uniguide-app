import { DropdownMenu, Avatar } from "@radix-ui/themes";
import { useData } from "../store/userData";
const User = () => {
  const { Details } = useData();
  console.log(Details);
  const lastName = Details.lastName;
  return (
    <div className="h-11">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="h-11 flex gap-x-3 text-sm  w-32 rounded-lg border-r border-white/10 items-center">
            <Avatar fallback={"T"} radius="full" />
            <div className="flex flex-col justify-items-center">
              <span>{Details.firstName} Delinto </span>
              <span>{Details.lastName}</span>
            </div>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item shortcut="⌘ N">Account</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="" color="red">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default User;

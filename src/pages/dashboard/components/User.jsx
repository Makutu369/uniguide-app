import { DropdownMenu, Box, Flex, Avatar, Text } from "@radix-ui/themes";
const User = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Box size="2">
          <div className="border border-white/20 p-2 cursor-pointer rounded-xl">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="T" />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Makutu Bright
                </Text>
                <Text as="div" size="2" color="gray">
                  Mawuli School
                </Text>
              </Box>
            </Flex>
          </div>
        </Box>
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
  );
};

export default User;

import {
  Avatar,
  Box,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import { LogoutButton } from "./LogoutButton"
import { User } from "../propsType"

export default function UserMenu(props: User) {
  return (
    <Popover trigger={"hover"} placement={"bottom-start"} isLazy>
      <PopoverTrigger>
        <Avatar />
      </PopoverTrigger>
      <PopoverContent width="150px">
        <UserMenuList user={props.user} listings={undefined} />
      </PopoverContent>
    </Popover>
  )
}

const UserMenuList = (props: User) => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("gray.800", "white")

  return (
    <Stack
      direction={"column"}
      spacing={2}
      alignItems="center"
      paddingTop="5px"
      paddingBottom="5px"
    >
      <Box>Greetings, {props.user?.name}!</Box>
      {USER_MENU_ITEMS.map((menuItem) => (
        <Box key={menuItem.label}>
          <Link
            p={2}
            href={`/profiles/${props.user?.id}` ?? "#"}
            fontSize={"m"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {menuItem.label}
          </Link>
        </Box>
      ))}
      <LogoutButton />
    </Stack>
  )
}

interface UserMenuItem {
  label: string
}

const USER_MENU_ITEMS: Array<UserMenuItem> = [
  {
    label: "Settings",
  },
  {
    label: "Listings",
  },
]

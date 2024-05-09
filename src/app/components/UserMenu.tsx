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

type UserMenuProps = {
  currentUser: {
    id: number
    email: string
    name: string | null
    role: string
  } | null
}
type UserData = {
  name: string | null | undefined
  id: number | null | undefined
}

export default function UserMenu(props: UserMenuProps) {
  return (
    <Popover trigger={"hover"} placement={"bottom-start"} isLazy>
      <PopoverTrigger>
        <Avatar />
      </PopoverTrigger>
      <PopoverContent width="150px">
        <UserMenuList name={props.currentUser?.name} id={props.currentUser?.id} />
      </PopoverContent>
    </Popover>
  )
}

const UserMenuList = (props: UserData) => {
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
      <Box>Greetings, {props.name}!</Box>
      {USER_MENU_ITEMS.map((menuItem) => (
        <Box key={menuItem.label}>
          <Link
            p={2}
            href={`/profiles/${props.id}` ?? "#"}
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

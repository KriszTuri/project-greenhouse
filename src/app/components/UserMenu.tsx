import {
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
type UserName = {
  name: string | null | undefined
}

export default function UserMenu(props: UserMenuProps) {
  return (
    <Popover trigger={"hover"} placement={"bottom-start"} isLazy>
      <PopoverTrigger>
        <Image
          borderRadius="full"
          boxSize="50px"
          src="https://via.placeholder.com/50"
          alt="Profile Picture"
        />
      </PopoverTrigger>
      <PopoverContent width="150px">
        <UserMenuList name={props.currentUser?.name} />
      </PopoverContent>
    </Popover>
  )
}

const UserMenuList = (props: UserName) => {
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
            href={menuItem.href ?? "#"}
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
  href?: string
}

const USER_MENU_ITEMS: Array<UserMenuItem> = [
  {
    label: "Settings",
    href: "#",
  },
  {
    label: "Listings",
    href: "#",
  },
]

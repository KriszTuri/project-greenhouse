import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react"
import ProfileButtons from "./ProfileButtons"
import ProfilePicture from "./ProfilePicture"
import { RequestedUser } from "../../propsType"
import ProfileDescription from "./ProfileDescription"

export default function ProfileCard(props: RequestedUser) {
  return (
    <Center py={6}>
      <Box
        w={"95%"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <ProfilePicture isOnline={props.data?.isOnline} />
        <ProfileDescription name={props.data?.name} description={props.data?.description} />

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #verified
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #plantparent
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #seller
          </Badge>
        </Stack>

        <Stack align={"center"} justify={"center"} mt={8} direction={"row"} spacing={4}>
          <ProfileButtons data={props.data} isCurrentUser={props.isCurrentUser} />
        </Stack>
      </Box>
    </Center>
  )
}

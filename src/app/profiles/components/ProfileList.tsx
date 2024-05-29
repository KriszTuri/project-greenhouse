import { Box } from "@chakra-ui/react"
import Layout from "../../components/Layout"
import { User } from "../../propsType"

export default function ProfileList(user: User) {
  return (
    <Layout
      currentUser={null}
      pageContent={
        <>
          <h1>Profile</h1>
        </>
      }
      pageType={"page"}
    />
  )
}

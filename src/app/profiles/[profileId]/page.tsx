import { Box, ChakraProvider, Stack } from "@chakra-ui/react"
import { invoke } from "../../blitz-server"
import { Profile } from "../components/Profile"
import styles from "../../styles/Profile.module.css"
import { Header } from "../../components/Header"
import getUserById from "../../users/queries/getUserById"
import { CurrentUser } from "../../propsType"
import Layout from "../../components/Layout"

///Page for /profiles/[id] //

export default async function ProfilePage({ params }: { params: { profileId: string } }) {
  const requestedUser = await invoke(getUserById, parseInt(params.profileId))
  function getUserData() {
    if (requestedUser.data) {
      const data: CurrentUser = {
        user: { id: requestedUser.data.id },
        name: requestedUser.data.name,
      }
      return data
    }
    return null
  }
  return (
    <>
      <Layout
        currentUser={getUserData()}
        pageContent={
          <Profile data={requestedUser.data} isCurrentUser={requestedUser.isCurrentUser} />
        }
        pageType={"page"}
      />
    </>
  )
}

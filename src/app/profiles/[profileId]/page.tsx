import { Box, ChakraProvider, Stack } from "@chakra-ui/react"
import { invoke } from "../../blitz-server"
import { Profile } from "../components/Profile"
import styles from "../../styles/Profile.module.css"
import { Header } from "../../components/Header"
import getUserById from "../../users/queries/getUserById"
import getCurrentUser from "../../users/queries/getCurrentUser"

///Page for /profiles/[id] //

export default async function ProfilePage({ params }: { params: { profileId: string } }) {
  const currentUser = await invoke(getCurrentUser, null)
  const requestedUser = await invoke(getUserById, parseInt(params.profileId))

  return (
    <>
      <ChakraProvider>
        <Stack direction="column">
          <Box sx={{ position: "sticky" }} width="100%">
            <Header currentUser={currentUser} />
          </Box>
          <Box>
            <div className={styles.globe} />
            <div className={styles.container}>
              <main className={styles.main}>
                <div className={styles.wrapper}>
                  <Profile requestedUser={requestedUser} currentUser={currentUser} />
                </div>
              </main>
              <footer className={styles.footer}>
                <span>Powered by</span>
                <a
                  href="https://blitzjs.com?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.textLink}
                >
                  Blitz.js
                </a>
                <span>&</span>
                <a
                  href="https://support.freepik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.textLink}
                >
                  Freepik.com
                </a>
              </footer>
            </div>
          </Box>
        </Stack>
      </ChakraProvider>
    </>
  )
}

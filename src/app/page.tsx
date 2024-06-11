import { invoke } from "./blitz-server"
import styles from "./styles/Home.module.css"
import getCurrentUser from "./users/queries/getCurrentUser"
import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "./components/Header"
import LandingPageTextField from "./components/LandingPageTextField"
import Layout from "./components/Layout"
import { setLocalStorage } from "./propsType"
import { useEffect } from "react"

export default async function Home() {
  const currentUser = await invoke(getCurrentUser, null)

  return (
    <Layout pageType="homepage" currentUser={currentUser} pageContent={<LandingPageTextField />} />
  )

  /*return (
    <>
      <ChakraProvider>
        <Box sx={{ position: "sticky" }} width="100%">
          <Header user={currentUser} listings={currentUser?.listings} />
        </Box>

        <div className={styles.globe} />
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.wrapper}>
              <LandingPageTextField />
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
      </ChakraProvider>
    </>
  )*/
}

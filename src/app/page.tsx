import { invoke } from "./blitz-server"
import { LogoutButton } from "./(auth)/components/LogoutButton"
import styles from "./styles/Home.module.css"
import getCurrentUser from "./users/queries/getCurrentUser"
import { ChakraProvider } from "@chakra-ui/react"
import { Header } from "./(auth)/components/Header"
import { HomePageButtons } from "./(auth)/components/HomePageButtons"

export default async function Home() {
  const currentUser = await invoke(getCurrentUser, null)

  return (
    <>
      <ChakraProvider>
        <div className={styles.globe} />
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.wrapper}>
              <div className={styles.header}>
                <Header />
                <div className={styles.logo}></div>
                {/* Auth */}

                <div className={styles.buttonContainer}>
                  {currentUser ? (
                    <>
                      <LogoutButton />
                      <div>
                        User id: <code>{currentUser.id}</code>
                        <br />
                        User role: <code>{currentUser.role}</code>
                      </div>
                    </>
                  ) : (
                    <>
                      <HomePageButtons />
                    </>
                  )}
                </div>
              </div>
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
          </footer>
        </div>
      </ChakraProvider>
    </>
  )
}

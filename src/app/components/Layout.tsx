"use client"
import { ChakraProvider, Stack, Box, useColorModeValue } from "@chakra-ui/react"
import { Profile } from "../profiles/components/Profile"
import { Header } from "./Header"
import pageStyles from "../styles/Profile.module.css"
import homeStyles from "../styles/Home.module.css"
import { useEffect, useState } from "react"
import { useLocalStorage } from "usehooks-ts"
import { LayoutProps, RequestedUser } from "../propsType"
import ReturnUserById from "../(auth)/data-storage/ReturnUserById"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Layout(props: LayoutProps) {
  const [body, setBody] = useState<JSX.Element>()
  const [styles, setStyles] = useState(pageStyles)

  useEffect(() => {
    const storeData = async () => {
      try {
        const userData = await ReturnUserById(props.currentUser?.user?.id)
        const jsonValue = JSON.stringify(userData)
        await AsyncStorage.setItem("user-data", jsonValue)
      } catch (e) {
        // saving error
      }
    }

    window.sessionStorage.setItem("style", props.pageType)
    storeData()
    const pageType = window.sessionStorage.getItem("style")
    const pageContent = async (content: JSX.Element | Promise<JSX.Element>) => {
      return await content
    }
    const getContent = async () => {
      const body = await pageContent(props.pageContent)
      if (pageType == "homepage") {
        setStyles(homeStyles)
      }
      setBody(body)
    }
    getContent().catch(console.error)
  }, [props.currentUser?.user?.id, props.pageContent, props.pageType])

  return (
    <>
      <ChakraProvider>
        <Stack direction="column">
          <Box sx={{ position: "sticky" }} width="100%">
            {props.currentUser ? (
              <Header user={props.currentUser?.user} name={props.currentUser?.name} />
            ) : (
              <Header user={null} name={null} />
            )}
          </Box>
          <Box height="100%" width="100%">
            <div className={styles.globe} />
            <div className={styles.container}>
              <main className={styles.main}>
                <div className={styles.wrapper}>
                  {props.pageType == "page" ? (
                    <Box
                      w={"95%"}
                      bg={"white"}
                      boxShadow={"2xl"}
                      rounded={"lg"}
                      p={6}
                      textAlign={"center"}
                    >
                      {body}
                    </Box>
                  ) : (
                    <>{body}</>
                  )}
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

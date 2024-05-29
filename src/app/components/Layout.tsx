"use client"
import { ChakraProvider, Stack, Box, useColorModeValue } from "@chakra-ui/react"
import { Profile } from "../profiles/components/Profile"
import { LayoutProps } from "../propsType"
import { Header } from "./Header"
import pageStyles from "../styles/Profile.module.css"
import homeStyles from "../styles/Home.module.css"
import { useEffect, useState } from "react"

export default function Layout(props: LayoutProps) {
  const [body, setBody] = useState<JSX.Element>()
  const [styles, setStyles] = useState(pageStyles)
  useEffect(() => {
    const pageContent = async (content: JSX.Element | Promise<JSX.Element>) => {
      return await content
    }
    const getContent = async () => {
      const body = await pageContent(props.pageContent)
      if (props.pageType == "homepage") {
        setStyles(homeStyles)
      }
      setBody(body)
    }
    getContent().catch(console.error)
  }, [props.pageContent, props.pageType])

  return (
    <>
      <ChakraProvider>
        <Stack direction="column">
          <Box sx={{ position: "sticky" }} width="100%">
            <Header user={props.currentUser} listings={undefined} />
          </Box>
          <Box>
            <div className={styles.globe} />
            <div className={styles.container}>
              <main className={styles.main}>
                <div className={styles.wrapper} suppressHydrationWarning>
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

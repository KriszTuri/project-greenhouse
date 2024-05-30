"use client"
import { Box, Container, Image } from "@chakra-ui/react"
import logo from "../public/logo.png"
import Navbar from "./Navbar"
import { CurrentUser, User } from "../propsType"

export function Header(props: CurrentUser) {
  return (
    <Box>
      <Navbar user={props?.user} name={props?.name} />
    </Box>
  )
}

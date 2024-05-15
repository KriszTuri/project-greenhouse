"use client"
import { Box, Container, Image } from "@chakra-ui/react"
import logo from "../public/logo.png"
import Navbar from "./Navbar"
import { User } from "../propsType"

export function Header(props: User) {
  return (
    <Box>
      <Navbar user={props.user} listings={undefined} />
    </Box>
  )
}

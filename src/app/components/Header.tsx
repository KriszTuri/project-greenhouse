"use client"
import { Box, Container, Image } from "@chakra-ui/react"
import logo from "../public/logo.png"
import Navbar from "./Navbar"

type HeaderProps = {
  currentUser: {
    id: number
    email: string
    name: string | null
    role: string
  } | null
}

export function Header(props: HeaderProps) {
  return (
    <Box>
      <Navbar currentUser={props.currentUser} />
    </Box>
  )
}

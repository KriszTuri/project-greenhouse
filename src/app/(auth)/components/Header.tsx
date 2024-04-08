"use client"
import { Container, Image } from '@chakra-ui/react'
import logo from "../public/logo.png"

export function Header() {
  return (
    <>
    <Container centerContent>
        <Image 
            src="/logo.png" 
            boxSize="100px"/>
    </Container>
    </>
  )
}

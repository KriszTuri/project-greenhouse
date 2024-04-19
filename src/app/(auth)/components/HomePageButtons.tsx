"use client"
import { useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { LoginButton } from "./LoginButton"
import { SignUpButton } from "./SignUpButton"

export const HomePageButtons = () => {
  const [modalType, setModalType] = useState("")

  return (
    <>
      <LoginButton modalType={modalType} setModalType={setModalType} />
      <SignUpButton modalType={modalType} setModalType={setModalType} />
    </>
  )
}

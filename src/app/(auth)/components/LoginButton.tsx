"use client"
import styles from "../../styles/Home.module.css"
import { Button, useDisclosure } from "@chakra-ui/react"
import { SignupOrLoginModal } from "./SignupOrLoginModal"

export const LoginButton = (/*props: { setModalType: (arg0: string) => void }*/) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button className={styles.button} colorScheme="green" onClick={onOpen}>
        Log In
      </Button>

      <SignupOrLoginModal modalBody="login" isOpen={isOpen} onClose={onClose} />
    </>
  )
}

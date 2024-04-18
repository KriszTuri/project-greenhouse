"use client"
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import styles from "../../styles/Home.module.css"
import { SignupForm } from "./SignupForm"
import { Dispatch, SetStateAction } from "react"
import { SignupOrLoginModal } from "./SignupOrLoginModal"

type signUpProps = {
  /*modalType: string*/
  setModalType: Dispatch<SetStateAction<string>>
}

export const SignUpButton = (/*props: { setModalType: (arg0: string) => void }*/) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  /*if (isOpen) {
    props.setModalType("signup")
  }*/
  return (
    <>
      <Button className={styles.button} colorScheme="orange" onClick={onOpen}>
        Sign Up
      </Button>

      <SignupOrLoginModal modalBody="signup" isOpen={isOpen} onClose={onClose} />
    </>
  )
}

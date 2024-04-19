"use client"
import styles from "../../styles/Home.module.css"
import { Button, useDisclosure } from "@chakra-ui/react"
import { SignupOrLoginModal } from "./SignupOrLoginModal"
import { Dispatch, SetStateAction } from "react"

type LoginButtonProps = {
  setModalType: Dispatch<SetStateAction<string>>
  modalType: string
}

export const LoginButton = (props: LoginButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function onClickHandler() {
    onOpen(), props.setModalType("login")
  }

  return (
    <>
      <Button
        className={styles.button}
        colorScheme="green"
        onClick={() => {
          onClickHandler()
        }}
      >
        Log In
      </Button>

      <SignupOrLoginModal
        modalType={props.modalType}
        setModalType={props.setModalType}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

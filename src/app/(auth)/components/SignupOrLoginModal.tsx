"use client"
import styles from "../../styles/Home.module.css"
import {
  Box,
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
import { LoginForm } from "./LoginForm"
import { SignupForm } from "./SignupForm"
import { useState } from "react"

type ModalProps = {
  modalBody: string
  isOpen: boolean
  onClose: () => void
}

export const SignupOrLoginModal = (props: ModalProps) => {
  const [modalType, setModalType] = useState(props.modalBody)

  if (modalType == "login") {
    return (
      <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {" "}
              <h1>Login</h1>{" "}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <LoginForm />
            </ModalBody>
            <ModalFooter>
              <div style={{ marginTop: "1rem" }}>
                Already have an account?
                <Button
                  onClick={() => {
                    setModalType("signup")
                  }}
                >
                  Sign up
                </Button>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  if (modalType == "signup") {
    return (
      <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {" "}
              <h1>Sign Up</h1>{" "}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SignupForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  return <></>
}

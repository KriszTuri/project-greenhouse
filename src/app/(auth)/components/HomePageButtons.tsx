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
import { LoginButton } from "./LoginButton"
import { SignUpButton } from "./SignUpButton"

export const HomePageButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <LoginButton /*setModalType={setModalType}*/ />
      <SignUpButton /*setModalType={setModalType}*/ />
    </>
  )
}

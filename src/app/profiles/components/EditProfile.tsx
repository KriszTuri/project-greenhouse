"use client"
import { Suspense, useState } from "react"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"
import { RequestedUser, User, UserLoginData } from "../../propsType"
import { SmallCloseIcon } from "@chakra-ui/icons"
import {
  Flex,
  useColorModeValue,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Center,
  Avatar,
  AvatarBadge,
  IconButton,
  Button,
  Input,
  ChakraProvider,
  FormHelperText,
  Link,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react"
import getCurrentUser from "../../users/queries/getCurrentUser"
import getUserById from "../../users/queries/getUserById"
import updateProfile from "../mutations/updateProfile"
import { FORM_ERROR, ProfileForm } from "../../users/profiles/components/ProfileForm"
import { Field, Form, useField } from "react-final-form"
import { SecurePassword } from "@blitzjs/auth/secure-password"

/// Component rendered at /profiles/[id]/edit ///

export const EditProfile = (props: RequestedUser) => {
  /*const [profile, { setQueryData }] = useQuery(getUserById, props.currentUser?.id, {
    // This ensures the query never refreshes and overwrites the form data while the user is editing.
    staleTime: Infinity,
  })*/

  //const [updatedUser, setUpdatedUser] = useState(props)
  const [updateProfileMutation] = useMutation(updateProfile)
  const router = useRouter()

  function getPlaceholders(user: RequestedUser) {
    const placeholders = {
      name: user.data?.name,
      email: user.data?.user?.email,
    }
    const fallbackPlaceholders = {
      name: "Your Name",
      email: "Your Email",
    }
    if (user) {
      return placeholders
    }
    return fallbackPlaceholders
  }

  function updateUser(values: UserLoginData) {
    const updatedUser = {
      id: props.data?.id,
      email: values.email,
      name: values.name,
      password: values.password,
    }
    return updatedUser
  }

  async function onSubmit(values: UserLoginData) {
    const updatedUser = updateUser(values)
    updateProfileMutation(updatedUser)
    console.log(updateUser(values))
    router.refresh()
  }

  return (
    <>
      <ChakraProvider>
        <Flex
          width="100%"
          minH={"100vh"}
          justify={"left"}
          bg={useColorModeValue("white", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"50%"}
            bg={useColorModeValue("white", "gray.700")}
            p={6}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              {props.data?.name}&apos;s Profile
            </Heading>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, values }: { handleSubmit: any; values: UserLoginData }) => (
                <Box as="form" onSubmit={handleSubmit}>
                  <FormControl id="userName">
                    <FormLabel>Profile Picture</FormLabel>
                    <Stack direction={["column", "row"]} spacing={6}>
                      <Center>
                        <Avatar
                          size="xl"
                          src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        >
                          <AvatarBadge
                            as={IconButton}
                            size="sm"
                            rounded="full"
                            top="-10px"
                            colorScheme="red"
                            aria-label="remove Image"
                            icon={<SmallCloseIcon />}
                          />
                        </Avatar>
                      </Center>

                      <Center w="full">
                        <Input
                          placeholder="Select New Picture"
                          size="md"
                          type="file"
                          accept="image/*"
                          sx={{
                            "::file-selector-button": {
                              height: 10,
                              padding: 0,
                              mr: 4,
                              background: "none",
                              border: "none",
                              fontWeight: "bold",
                            },
                          }}
                        />
                      </Center>
                    </Stack>
                  </FormControl>

                  <InputControl
                    name="name"
                    label="Username:"
                    placeholder={getPlaceholders(props).name?.toString()}
                    type="input"
                  />

                  <InputControl
                    name="email"
                    label="Email:"
                    placeholder={getPlaceholders(props).email}
                    type="input"
                  />

                  <InputControl
                    name="password"
                    label="Password:"
                    placeholder="Your new password"
                    type="password"
                  />
                  <Stack spacing={6} direction={["column", "row"]} paddingTop={"10px"}>
                    <Link href={`/profiles/${props.data?.id}`}>
                      <Button
                        bg={"red.400"}
                        color={"white"}
                        w="full"
                        _hover={{
                          bg: "red.500",
                        }}
                      >
                        Cancel
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={async () => {
                        //setUpdatedUser(exampleUser)
                        //updateProfileMutation(updatedUser)
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                  <pre>{JSON.stringify(values)}</pre>
                </Box>
              )}
            />
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  )
}

/// From: https://codesandbox.io/p/sandbox/chakra-ui-form-with-validation-vzzp8?file=%2Findex.js%3A221%2C7-221%2C28 ///

const Error = ({ name }: { name: string }) => {
  const {
    meta: { error },
  } = useField(name, { subscription: { error: true } })
  return <FormErrorMessage>{error}</FormErrorMessage>
}

const Control = ({ name, ...children }: { name: any; children: any }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...children} isInvalid={error && touched} />
}

const InputControl = ({
  name,
  label,
  placeholder,
  type,
}: {
  name: string
  label: string | undefined
  placeholder: string | undefined
  type: string
}) => {
  const { input, meta } = useField(name)
  return (
    <Control name={name}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={placeholder}
        type={type}
      />
      <Error name={name} />
    </Control>
  )
}

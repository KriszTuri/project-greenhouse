"use client"
import { Suspense, useState } from "react"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"
import { User, UserData, UserLoginData } from "../propsType"
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

/// Component rendered at /profiles/[id]/edit ///

export const EditProfile = (props: User) => {
  /*const [profile, { setQueryData }] = useQuery(getUserById, props.currentUser?.id, {
    // This ensures the query never refreshes and overwrites the form data while the user is editing.
    staleTime: Infinity,
  })*/
  const exampleUser: UserLoginData = {
    email: "asd@asd.com",
    name: "Example",
    password: "dshisgkstheuk",
  }

  const [updatedUser, setUpdatedUser] = useState(props)
  const [updateProfileMutation] = useMutation(updateProfile)
  const router = useRouter()

  async function onSubmit(values: UserLoginData) {
    setUpdatedUser({
      user: {
        id: props.user?.id,
        email: values.email,
        name: values.name,
        hashedPassword: values.password,
      },
    })
    console.log(updatedUser)
    /* const update =  => {
      ;(updatedUser.user.id = props.user?.id),
        (updatedUser.user.email = values.email),
        (updatedUser.user.hashedPassword = values.password)
      return updatedUser
    }
    console.log(updatedUser)*/
    /*return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values.username, null, 2))
        //resolve()
      }, 3000)
    })*/
  }
  return (
    <>
      <ChakraProvider>
        <Flex
          width="100%"
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              {props.user?.name}&apos;s Profile
            </Heading>
            <Form
              onSubmit={onSubmit}
              //validate={validate}
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
                    placeholder={props.user?.email}
                    type="input"
                  />

                  <InputControl
                    name="email"
                    label="Email:"
                    placeholder={props.user?.email}
                    type="input"
                  />

                  <InputControl
                    name="password"
                    label="Password:"
                    placeholder="Your new password"
                    type="password"
                  />
                  <Stack spacing={6} direction={["column", "row"]}>
                    <Link href={`/profiles/${props.user?.id}`}>
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
                      w="full"
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

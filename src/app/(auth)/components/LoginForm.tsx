"use client"
import { AuthenticationError, PromiseReturnType } from "blitz"
import Link from "next/link"
import { LabeledTextField } from "src/app/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/app/components/Form"
import login from "../mutations/login"
import { Login } from "../validations"
import { useMutation } from "@blitzjs/rpc"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import type { Route } from "next"
import { SignUpModal } from "./SignUpButton"
import { Box } from "@chakra-ui/react"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}
export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)
  const router = useRouter()
  const next = useSearchParams()?.get("next")
  return (
    <>
      <Form
        submitText="Login"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            router.refresh()
            if (next) {
              router.push(next as Route)
            } else {
              router.push("/")
            }
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <div>
          <Link href={"/forgot-password"}>Forgot your password?</Link>
        </div>
      </Form>
    </>
  )
}
import { ReactNode } from "react"

type RequestedUser = {
  data: {
    user: {
      listings: {
        id: number
        createdAt: Date
        updatedAt: Date
        userId: number
        description: string
        listingName: string
        price: number
      }[]
      email: string
      hashedPassword: string | null
      role: string
    } | null
    id: number
    name: string | null
    isOnline: boolean
    description: string | null
  } | null
  isCurrentUser: boolean
}

type DescriptionProps = {
  name: string | null | undefined
  description: string | null | undefined
}

type User = {
  user: {
    id: number | undefined
    email: string
  } | null
  listings:
    | {
        id: number
        createdAt: Date
        updatedAt: Date
        userId: number | null
        listingName: string
        price: number
        description: string
      }[]
    | undefined
}
/**
 * Data to update the user's email, name and password.
 *
 * The "id" is only needed for the
 * query, we do not update it, of course. Password
 * is hashed in the query statement.
 *
 *
 */
type UserLoginData = {
  id: number | undefined
  email: string
  name: string | null
  password: string | null
}

type LayoutProps = {
  currentUser: CurrentUser
  pageContent: JSX.Element | Promise<JSX.Element>
  pageType: string
}

type CurrentUser = {
  user: {
    id: number | null
  } | null
  name: string | null | undefined
} | null

export type { CurrentUser, DescriptionProps, User, UserLoginData, LayoutProps, RequestedUser }

import { ReactNode } from "react"

type UserData = {
  requestedUser?: {
    /*listings: {
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      listingName: string
      price: number
      description: string
    }[]*/
    id: number
    email: string
    name: string | null
    isOnline: boolean | null
    description: string | null
  } | null

  currentUser: {
    /*listings: {
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number | null
      listingName: string
      price: number
      description: string
    }[]*/
    id: number
    email: string
    name: string | null
    isOnline: boolean | null
    description: string | null
  } | null
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
  currentUser: {
    id: number
    email: string
    name: string | null
  } | null
  pageContent: JSX.Element | Promise<JSX.Element>
  pageType: string
}

export type { UserData, DescriptionProps, User, UserLoginData, LayoutProps }

import gql from "graphql-tag"

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    password
    name
    events {
      id
      eventId
    }
    lists {
      id
      title
      places {
        id
        placeId
      }
    }
  }
`

export const EVENT_FRAGMENT = gql`
  fragment EventFragment on Event {
    id
    eventId
  }
`

export const LIST_FRAGMENT = gql`
  fragment ListFragment on List {
    id
    title
    places {
      id
      placeId
    }
  }
`

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const ADD_EVENT_MUTATION = gql`
  mutation ADD_EVENT_MUTATION($eventId: String!) {
    addEvent(eventId: $eventId) {
      ...EventFragment
    }
  }
  ${EVENT_FRAGMENT}
`

export const REMOVE_EVENT_MUTATION = gql`
  mutation REMOVE_EVENT_MUTATION($eventId: String!) {
    removeEvent(eventId: $eventId) {
      id
    }
  }
`

export const CREATE_LIST_MUTATION = gql`
  mutation($title: String!, $placeId: String!) {
    createList(title: $title, placeId: $placeId) {
      id
    }
  }
  ${LIST_FRAGMENT}
`

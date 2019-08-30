import gql from "graphql-tag"

export const PetFragment = gql`
  fragment PetFields on Pet {
    id
  }
`

import gql from "graphql-tag"

export const NewPetInputFragment = gql`
  fragment NewPetInputFields on NewPetInput {
    name
    tag
  }
`

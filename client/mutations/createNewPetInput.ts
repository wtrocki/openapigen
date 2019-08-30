import gql from "graphql-tag"
import { NewPetInputFragment } from "../fragments/NewPetInput"

export const createNewPetInput = gql`
  mutation createNewPetInput(name: undefined!, tag: undefined!) {
    createNewPetInput(input: {name: $name, tag: $tag}) {
      ...NewPetInputFields
    }
  }

  ${NewPetInputFragment}
`

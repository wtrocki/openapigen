import gql from "graphql-tag"
import { NewPetInputFragment } from "../fragments/NewPetInput"

export const updateNewPetInput = gql`
  mutation updateNewPetInput($id: ID!, name: undefined!, tag: undefined!) {
    updateNewPetInput(id: $id, input: {name: $name, tag: $tag}) {4
      ...NewPetInputFields
    }
  }

  ${NewPetInputFragment}
`

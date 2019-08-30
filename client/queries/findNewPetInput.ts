import gql from "graphql-tag"
import { NewPetInputFragment } from "../fragments/NewPetInput"

export const findNewPetInput = gql`
  query findNewPetInput(name: undefined!, tag: undefined!) {
    findNewPetInput(fields: {name: $name, tag: $tag}) {
      ...NewPetInputFields
    }
  }

  ${NewPetInputFragment}
`

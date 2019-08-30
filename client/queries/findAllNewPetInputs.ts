import gql from "graphql-tag"
import { NewPetInputFragment } from "../fragments/NewPetInput"

export const findAllNewPetInputs = gql`
  query findAllNewPetInputs {
    findAllNewPetInputs {
      ...NewPetInputFields
    }
  }

  ${NewPetInputFragment}
`

import gql from "graphql-tag"
import { PetFragment } from "../fragments/Pet"

export const createPet = gql`
  mutation createPet(id: Float) {
    createPet(input: {id: $id}) {
      ...PetFields
    }
  }

  ${PetFragment}
`

import gql from "graphql-tag"
import { PetFragment } from "../fragments/Pet"

export const findPet = gql`
  query findPet(id: Float) {
    findPet(fields: {id: $id}) {
      ...PetFields
    }
  }

  ${PetFragment}
`

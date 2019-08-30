import gql from "graphql-tag"
import { PetFragment } from "../fragments/Pet"

export const updatePet = gql`
  mutation updatePet($id: ID!, id: Float) {
    updatePet(id: $id, input: {id: $id}) {4
      ...PetFields
    }
  }

  ${PetFragment}
`

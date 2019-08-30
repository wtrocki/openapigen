import gql from "graphql-tag"
import { PetFragment } from "../fragments/Pet"

export const findAllPets = gql`
  query findAllPets {
    findAllPets {
      ...PetFields
    }
  }

  ${PetFragment}
`

import gql from 'graphql-tag'

export const typeDefs = gql`
  type NewPetInput {
    name: undefined!
    tag: undefined!
  }

  type Pet {
    id: Float
  }

  input NewPetInputInput {
    name: undefined!
    tag: undefined!
  }

  input PetInput {
    id: Float
  }

  input NewPetInputFilter {
    name: undefined
    tag: undefined
  }

  input PetFilter {
    id: Float
  }

  type Query {
    findNewPetInputs(fields: NewPetInputFilter!): [NewPetInput!]!
    findPets(fields: PetFilter!): [Pet!]!
    findAllNewPetInputs: [NewPetInput!]!
    findAllPets: [Pet!]!
    ## Custom queries
    pet(id: Float!): Pet
    pets(limit: Int, tags: [String]): [Pet]
  }

  type Mutation {
    createNewPetInput(input: NewPetInputInput!): NewPetInput!
    createPet(input: PetInput!): Pet!
    updateNewPetInput(id: ID!, input: NewPetInputInput!): NewPetInput!
    updatePet(id: ID!, input: PetInput!): Pet!
    ## Custom mutations
    addPet(newPetInput: NewPetInput!): Pet
  }
`

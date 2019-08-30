import { GraphQLContext } from '../../context'

export const pets = {
  Query: {
    pets: (_: any, args: any, context: GraphQLContext) => {
      // Implementation here
    }
  }
}

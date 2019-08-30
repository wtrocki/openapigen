import { GraphQLContext } from '../../context'

export const petResolvers = {
  Query: {
    findPets: (_: any, args: any, context: GraphQLContext) => {
      return context.db.select().from('pet').where(args.fields)
    },
    findAllPets: (_: any, __: any, context: GraphQLContext) => {
      return context.db.select().from('pet')
    }
  },

  Mutation: {
    createPet: async (_: any, args: any, context: GraphQLContext) => {
      const result = await context.db('pet').insert(args.input).returning('*')
      return result[0]
    },
    updatePet: (_: any, args: any, context: GraphQLContext) => {
      return context.db('pet').where('id', '=' , args.id).update(args.input).then( async () => {
        const result = await context.db.select().from('pet').where('id', '=' , args.id);
        return result[0]
    })}
  }
}

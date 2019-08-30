import { GraphQLContext } from '../../context'

export const newpetinputResolvers = {
  Query: {
    findNewPetInputs: (_: any, args: any, context: GraphQLContext) => {
      return context.db.select().from('newpetinput').where(args.fields)
    },
    findAllNewPetInputs: (_: any, __: any, context: GraphQLContext) => {
      return context.db.select().from('newpetinput')
    }
  },

  Mutation: {
    createNewPetInput: async (_: any, args: any, context: GraphQLContext) => {
      const result = await context.db('newpetinput').insert(args.input).returning('*')
      return result[0]
    },
    updateNewPetInput: (_: any, args: any, context: GraphQLContext) => {
      return context.db('newpetinput').where('id', '=' , args.id).update(args.input).then( async () => {
        const result = await context.db.select().from('newpetinput').where('id', '=' , args.id);
        return result[0]
    })}
  }
}

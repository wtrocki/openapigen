import gql from 'graphql-tag'

export const typeDefs = gql`
  type Task {
    completed: Boolean
    description: String
    name: String
  }

  input TaskInput {
    completed: Boolean
    description: String
    name: String
  }

  input TaskFilter {
    completed: Boolean
    description: String
    name: String
  }

  type Query {
    findTasks(fields: TaskFilter!): [Task!]!
    findAllTasks: [Task!]!
    ## Custom queries
    task(taskId: String!): Task
    tasks: [Task]
  }

  type Mutation {
    createTask(input: TaskInput!): Task!
    updateTask(id: ID!, input: TaskInput!): Task!
  }
`

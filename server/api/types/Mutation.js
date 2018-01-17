const Mutation = `
  type Mutation {
    register(email: String!, password: String!): String
  }
`

module.exports = Mutation

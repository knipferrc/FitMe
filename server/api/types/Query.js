const Query = `
  type Query {
		currentUser(userId: String!): String
	}
`

module.exports = Query

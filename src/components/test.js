import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Test = props => {
  console.log('PROPS: ', props)
  return <h3>Test</h3>
}

const CurrentUser = gql`
  query CurrentUser($userId: String!) {
    currentUser(userId: $userId)
  }
`

const TestWithData = graphql(CurrentUser, {
  options: { variables: { userId: 'test' } }
})(Test)

export default TestWithData

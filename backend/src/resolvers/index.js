const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Event } = require('./Event')
const { List } = require('./List')

const resolvers = {
  Query,
  Mutation,
  User,
  Event,
  List,
}

module.exports = {
  resolvers,
}

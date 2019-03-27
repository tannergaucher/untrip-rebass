const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Event } = require('./Event')
const { List } = require('./List')
const { Place } = require('./Place')

const resolvers = {
  Query,
  Mutation,
  User,
  Event,
  List,
  Place,
}

module.exports = {
  resolvers,
}

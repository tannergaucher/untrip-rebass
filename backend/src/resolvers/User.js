const User = {
  events: ({ id }, args, context) => {
    return context.prisma.user({ id }).events()
  },
  lists: ({ id }, args, context) => {
    return context.prisma.user({ id }).lists()
  },
}

module.exports = {
  User,
}

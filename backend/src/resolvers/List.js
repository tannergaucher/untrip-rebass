const List = {
  places: ({ listId }, args, context) => {
    return context.prisma.list({ listId }).places()
  },
}

module.exports = {
  List,
}

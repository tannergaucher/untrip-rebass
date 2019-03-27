const List = {
  places: ({ id }, args, context) => {
    return context.prisma.list({ id }).places()
  },
}

module.exports = {
  List,
}

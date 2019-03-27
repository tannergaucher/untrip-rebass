const Place = {
  list: ({ placeId }, args, context) => {
    return context.prisma.place({ placeId }).list()
  },
}

module.exports = {
  Place,
}

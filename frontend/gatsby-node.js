const path = require("path")
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        posts: allContentfulPost {
          edges {
            node {
              title
              slug
              containsEvent
              containsPlace
            }
          }
        }
        categories: allContentfulCategory {
          edges {
            node {
              category
            }
          }
        }
        places: allContentfulPlace {
          edges {
            node {
              name
            }
          }
        }
        events: allContentfulEvent {
          edges {
            node {
              name
            }
          }
        }
      }
    `)
      .then(result => {
        const { data } = result
        const posts = data.posts.edges
        const categories = data.categories.edges
        const places = data.places.edges
        const events = data.events.edges

        posts.map(edge => {
          const { slug, containsEvent, containsPlace } = edge.node

          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug,
              containsEvent,
              containsPlace,
            },
          })
        })

        categories.map(edge => {
          const { category } = edge.node
          createPage({
            path: `/categories/${_.kebabCase(category)}`,
            component: path.resolve(`./src/templates/category.js`),
            context: {
              category,
            },
          })
        })

        places.map(edge => {
          const { name } = edge.node
          createPage({
            path: `/places/${_.kebabCase(name)}`,
            component: path.resolve(`./src/templates/place.js`),
            context: {
              name,
            },
          })
        })

        events.map(edge => {
          const { name } = edge.node
          createPage({
            path: `/events/${_.kebabCase(name)}`,
            component: path.resolve(`./src/templates/event.js`),
            context: {
              name,
            },
          })
        })

        resolve()
      })
      .catch(error => console.log(error))
  })
}

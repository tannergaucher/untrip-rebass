import { useStaticQuery, graphql } from "gatsby"

export const useEvent = () => {
  const { event } = useStaticQuery(
    graphql`
      query EventQuery {
        event {
          ...ContentfulEventFragment
        }
      }
    `
  )
  return event
}

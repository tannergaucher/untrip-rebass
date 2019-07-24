import { useStaticQuery, graphql } from "gatsby"

export const usePlace = () => {
  const { place } = useStaticQuery(
    graphql`
      query PlaceQuery {
        place {
          ...ContentfulPlaceFragment
        }
      }
    `
  )
  return place
}

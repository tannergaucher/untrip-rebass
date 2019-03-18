import React from "react"

const Place = ({
  name,
  website,
  description,
  facebook,
  instagram,
  openingHours,
  closingHours,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <h6>{website}</h6>
      <h6>{description}</h6>
      <h6>{facebook}</h6>
      <h6>{instagram}</h6>
      <h6>{openingHours}</h6>
      <h6>{closingHours}</h6>
    </>
  )
}

export default Place

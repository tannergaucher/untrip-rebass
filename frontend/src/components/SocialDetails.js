import React from "react"
import { Box, Button } from "grommet"
import {
  Facebook,
  Instagram,
  Twitter,
  Domain,
  MapLocation,
} from "grommet-icons"
import { navigate } from "@reach/router"
import { kebabCase } from "lodash"

const SocialDetails = ({
  name,
  website,
  twitter,
  instagram,
  facebook,
  address,
}) => (
  <Box direction="row" justify="start" align="center" margin="medium">
    {twitter && (
      <Button icon={<Twitter size="small" color="" />} href={twitter} />
    )}
    {facebook && (
      <Button
        icon={<Facebook size="small" color="#3C5A99" />}
        href={facebook}
      />
    )}
    {instagram && <Button icon={<Instagram size="small" color="#bc2a8d" />} />}
    {website && <Button icon={<Domain size="small" />} href={website} />}
    {address && (
      <Button
        icon={<MapLocation size="small" />}
        onClick={() => navigate(`/places/${kebabCase(name)}`)}
      />
    )}
  </Box>
)

export default SocialDetails

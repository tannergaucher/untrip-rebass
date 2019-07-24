import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

class MapContainer extends React.Component {
  render() {
    const { google, lat, lng, zoom, style, name } = this.props
    return (
      <Map
        google={google}
        initialCenter={{ lat, lng }}
        zoom={zoom}
        style={style}
      >
        <Marker title={name} name={name} position={{ lat, lng }} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_KEY,
})(MapContainer)

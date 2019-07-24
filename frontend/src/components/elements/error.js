import React from "react"
import PropTypes from "prop-types"

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div key={i}>
        <p>{error.message.replace("GraphQL error: ", "")}</p>
      </div>
    ))
  }
  return (
    <>
      <p>{error.message.replace("GraphQL error: ", "")}</p>
    </>
  )
}

DisplayError.defaultProps = {
  error: {},
}

DisplayError.propTypes = {
  error: PropTypes.object,
}

export default DisplayError

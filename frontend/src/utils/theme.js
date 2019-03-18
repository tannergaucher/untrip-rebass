const blue = "dodgerblue"
const lightgray = "lightgrey"
const grey = "grey"
const black = "black"
const red = "tomato"

const theme = {
  fontSizes: [14, 16, 18, 24, 32, 44, 62],
  colors: {
    blue,
    grey,
    lightgray,
    black,
    red,
  },
  buttons: {
    primary: {
      color: "#fff",
      backgroundColor: black,
    },
    outline: {
      color: "lightgrey",
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 2px",
    },
  },
}

export default theme

export const grommetTheme = {
  global: {
    colors: {
      brand: black,
    },
  },
  accordion: {
    border: {
      side: "left",
      color: "blue",
    },
  },
}

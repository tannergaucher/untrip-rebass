import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
 html {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
 body {
   margin: 0;
   padding: 0;
   min-height: 100vh;
 }

 p {
   letter-spacing: .5px;
   line-height: 2
 }

 h1,h2,h3,h4,h5,h6 {
   letter-spacing: .5px;
 }
`

export default GlobalStyles

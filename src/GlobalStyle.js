import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`


* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  background-color: white;
background-image: linear-gradient(315deg, #a55c1b 0%, #000000 74%);
  font-size: 112.5%;
  font-family: 'Work Sans', sans-serif;
  padding: 10px;
  max-width: 600px;
}



input, button {
    font-size: inherit;
padding: 5px;
font-size: 1em;
}

[hidden] {
  display: none !important;
}

`

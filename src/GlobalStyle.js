import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
    --color-blue: linear-gradient(to right,
    rgba(127, 127, 127, 0.15),
    rgba(51, 140, 255, 1));
    --color-grey: linear-gradient(to right, rgba(127,127,127,1), rgba(127,127,127,0.15));
    --color-yellow-interval: linear-gradient(to bottom, rgba(255,204,63,1), rgba(127,127,127,0.15));
    --color-yellow: #ffcc3f;
    --color-red: #a60d29;
    --color-green: #59bf59;
    --color-orange: #ff6639;
  }


* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  background: white;
  font-size: 112.5%;
  font-family: 'Work Sans', sans-serif;
  padding: 10px;
  max-width: 600px;
  color: black;
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

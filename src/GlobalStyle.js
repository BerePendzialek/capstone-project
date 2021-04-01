import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
    --color-grey: #7f7f7f;
    --color-blue-rampUp: linear-gradient(to right,
    rgba(127, 127, 127, 0.15),
    rgba(51, 140, 255, 1));
    --color-grey-rampDown: linear-gradient(to right, rgba(127,127,127,1), rgba(127,127,127,0.15));
    --color-yellow-interval: linear-gradient(to bottom, rgba(255,204,63,1), rgba(127,127,127,0.15));
    --color-yellow: #ffcc3f;
    --color-red: #a60d29;
    --color-green: #59bf59;
    --color-orange: #ff6639;
    --color-blue-interval: linear-gradient(to bottom,
    rgba(51, 140, 255, 1), rgba(127, 127, 127, 0.15)
    ); 
    --color-green-interval: linear-gradient(to bottom,  rgba(89, 191, 89, 1),
    rgba(51, 140, 255, 1)); 
    --color-main-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --color-white-smoked: #f5f5f5;
    --color-dark-grey:#444;
    --color-lila: #7953f5;
    --color-white: #ffffff;
    --color-aqua-blue: #0FFFFF;
    --color-lila-light: #a297c3;
  }


* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  font-size: 112.5%;
  font-family: 'Work Sans', sans-serif;
  padding: 20px;
  max-width: 600px;
  color: var(--color-dark-grey);
  display: grid;
  gap: 20px;
  background: var(--color-white-smoked);
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

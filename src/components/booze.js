import React from 'react'
import Styled, {keyframes} from 'styled-components'

import Media from '../styleComponents/mediaQueries.js'
import Colors from '../styleVariables/colors'

const { white, pink, blue, yellow, brandBlue } = Colors
const size = 160
const rotate360 = keyframes`
from {
  transform: rotate(180deg);
}

to {
  transform: rotate(540deg);
}
`;
const Container = Styled.div`
  width: ${size}px;
  height: ${size}px;
  animation: ${rotate360} 10s linear infinite;
  transform-origin: bottom left;
  transform: rotate(180deg);
  svg{
    width: 100%;
    height: 100%;
    g > path{
      fill: ${yellow};
    }
  }
  ${Media.forTabletLandscapeUp`
    z-index: 100;
  `}
`
const Booze = (props) =>
  <Container>
    <svg id="booze" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1027.52 690">
      <title>booze</title>
      <g>
        <path d="M6615.67-3356.07a22.23,22.23,0,0,1,16.48,6.31,22.07,22.07,0,0,1,7.12,16q0.8,23.12,2.39,69a22.07,22.07,0,0,1-6,16.47,22.21,22.21,0,0,1-16,7.43l-69.33,2.41-45.91,1.59-1.59-45.91-1.6-46.22-1.59-45.91-0.67-19.36q-0.4-11.55-.93-26.86l-1.59-45.91,45.91-1.59,69.33-2.41a22.75,22.75,0,0,1,16.47,6,22.75,22.75,0,0,1,7.12,16q0.8,23.12,2.41,69.33a22.74,22.74,0,0,1-6,16.47A22.75,22.75,0,0,1,6615.67-3356.07Zm-70.12-20.39,46.22-1.6q-0.1-2.81-.28-8.12l-1.32-38.1-46.22,1.6Q6544.47-3407.38,6545.55-3376.46Zm3.2,92.13,46.22-1.6q-0.1-2.81-.28-8.12l-1.32-38.1-46.22,1.6Q6547.67-3315.25,6548.74-3284.33Z" transform="translate(-6496.44 3471.02)"/>
        <path d="M6906.26-3406.62L6860.51-3228a22.07,22.07,0,0,1-10.39,14.11,22.22,22.22,0,0,1-17.45,2.63l-89.3-22.87a21.56,21.56,0,0,1-14-10.69,21.55,21.55,0,0,1-2.63-17.45l17.21-67.21,11.79-46,16.75-65.39a22.21,22.21,0,0,1,10.69-14,22.06,22.06,0,0,1,17.37-2.33l89.3,22.88a22.75,22.75,0,0,1,14.11,10.39A22.75,22.75,0,0,1,6906.26-3406.62ZM6776.87-3273l44.8,11.48,2.25-8.78,32.1-125.33-44.8-11.48-17.14,66.9Z" transform="translate(-6496.44 3471.02)"/>
        <path d="M7154.35-3288.92l-94.61,158.25a22.06,22.06,0,0,1-14,10.58,22.21,22.21,0,0,1-17.48-2.44l-79.12-47.3a21.55,21.55,0,0,1-10.42-14.24,21.56,21.56,0,0,1,2.44-17.48l35.6-59.54,24.37-40.77,34.64-57.94a22.22,22.22,0,0,1,14.24-10.42,22.07,22.07,0,0,1,17.32,2.71l79.13,47.3a22.75,22.75,0,0,1,10.58,14A22.75,22.75,0,0,1,7154.35-3288.92Zm-162,91.37,39.7,23.73,4.65-7.78,66.39-111-39.7-23.73-35.44,59.28Z" transform="translate(-6496.44 3471.02)"/>
        <path d="M7375.53-3121.69l-29.82,27.59-3.9,3.61q-105.66,21.54-158.71,32.3l57.08,61.71-33.72,31.2-93.8-101.39,29.82-27.59,3.9-3.61q119-24.12,158.71-32.3L7248-3191.89l21.1-19.52,12.62-11.67Z" transform="translate(-6496.44 3471.02)"/>
        <path d="M7441.84-2945.53L7400.41-2925l30.83,62.15-41.15,20.41-30.83-62.15L7317.82-2884l41,82.59L7317.63-2781l-41-82.59-20.41-41.15,24.08-11.94,17.08-8.47,41.43-20.55,41.15-20.41,41.43-20.55,41.15-20.41,20.41,41.15,41,82.59-41.15,20.41Z" transform="translate(-6496.44 3471.02)"/>
      </g>
    </svg>
  </Container>

export default Booze
import React from 'react'
import Styled, {keyframes} from 'styled-components'

import Media from '../styleComponents/mediaQueries.js'
import Colors from '../styleVariables/colors'

const { white, pink, blue, yellow, brandBlue } = Colors
const size = 150
const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const PatioContainer = Styled.div`
  width: ${size}px;
  height: ${size}px;
  animation: ${rotate360} 10s linear infinite;
  transform-origin: bottom left;
  svg{
    width: 100%;
    height: 100%;
    g > path{
      fill: ${pink};
    }
  }
  ${Media.forTabletLandscapeUp`
    z-index: 100;
  `}
`
const Patio = (props) =>
  <PatioContainer>
    <svg id="patio" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 947.85 578.57">
      <title>patio</title>
      <g>
        <path d="M5094.94-5202.38q1.07,30.92,3.2,92.13a23.12,23.12,0,0,1-6,16.78,22.75,22.75,0,0,1-16,7.12l-69.33,2.41,3.2,92.13-45.91,1.59q-0.53-15.3-1.33-38.41l-1.87-53.72-1.6-45.91-1.61-46.22-1.59-45.91L5002-5222l69.33-2.41a22.75,22.75,0,0,1,16.47,6A22.75,22.75,0,0,1,5094.94-5202.38Zm-89.72,72.53,46.22-1.61q-0.1-2.81-.28-8.12l-1.32-38.1-46.22,1.61Z" transform="translate(-4956.1 5224.4)"/>
        <path d="M5303.14-4962.55l-44.68-10.69,21.45-89.66-45-10.76L5213.49-4984l-44.68-10.69,18.18-76,12.51-52.27,17.6-73.55a22.21,22.21,0,0,1,10.47-14.2,22.06,22.06,0,0,1,17.33-2.6l89.66,21.45a22.75,22.75,0,0,1,14.28,10.16,22.75,22.75,0,0,1,2.6,17.33Zm-12.53-145,1.89-7.9,8.87-37.08-45-10.76-10.76,45Z" transform="translate(-4956.1 5224.4)"/>
        <path d="M5583.54-5034.57l-40-22.63-90.82,160.45-40.25-22.78L5503.31-5080l-40-22.63,14.16-25,8.47-15,120.2,68Z" transform="translate(-4956.1 5224.4)"/>
        <path d="M5708.23-5000.79l34,30.85-116.06,128-38.62,42.6-34-30.85,57.92-63.9Z" transform="translate(-4956.1 5224.4)"/>
        <path d="M5894.15-4756.34l-150.73,106.17a22.07,22.07,0,0,1-17.06,4,22.22,22.22,0,0,1-15-9.33l-53.09-75.37a21.55,21.55,0,0,1-3.74-17.24,21.55,21.55,0,0,1,9.33-15l56.72-40,38.83-27.35,55.18-38.87a22.22,22.22,0,0,1,17.24-3.74,22.07,22.07,0,0,1,14.72,9.51l53.09,75.37a22.75,22.75,0,0,1,4,17.06A22.75,22.75,0,0,1,5894.15-4756.34ZM5709-4738.67l26.63,37.81,7.41-5.22,105.77-74.5-26.63-37.81-56.46,39.77Z" transform="translate(-4956.1 5224.4)"/>
      </g>
    </svg>
  </PatioContainer>

export default Patio
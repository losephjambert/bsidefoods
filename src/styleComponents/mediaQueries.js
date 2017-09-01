import {css, styled} from 'styled-components'

const sizes = {
  forBigPhonesUp: 414,
  forTabletPortraitUp: 600,
  forTabletLandscapeUp: 900,
  forDesktopUp: 1200,
  forBigMonitorsUp: 1800
}
// Iterate through the sizes and create a media template
const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default Media
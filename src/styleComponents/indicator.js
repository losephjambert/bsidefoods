import Styled from 'styled-components'

const Indicator = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -40;
  background-color: ${props => props.backgroundColor};
  transition: opacity 250ms ease;
`

export default Indicator
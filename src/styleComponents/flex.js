import Styled from 'styled-components'

const FlexColumn = Styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  transition: 300ms linear;
`

export default {FlexColumn}
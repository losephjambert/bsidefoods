import Styled from 'styled-components'

const Hours = Styled.ul`
  max-width: 600px;
  margin: 0 auto;
  height: 600px;
  padding: 25px;
  font-family: ${props => props.headline ? 'Cornerstone' : 'Century'};
  color: ${props => props.color};
  &:hover{cursor:pointer;}
`

export default Hours

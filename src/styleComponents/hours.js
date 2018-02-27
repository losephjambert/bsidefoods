import Styled from 'styled-components'

const Hours = Styled.ul`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;  
  padding: 0;
  margin: 0;
  font-family: ${props => props.headline ? 'Cornerstone' : 'Century'};
`

export default Hours

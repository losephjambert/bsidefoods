import Styled from 'styled-components'

const MenuSection = Styled.section`
  position: fixed;
  width: 100%;
  max-width: 750px;
  min-height: 600px;
  transition: 300ms ease-in-out;
  .is-released{
    position: relative;
  }
  .is-fixed{
    position: fixed;
  }
`

export default MenuSection
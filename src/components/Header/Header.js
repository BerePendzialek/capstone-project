import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const HeaderStyle = styled.div`
  display: grid;
  background: orange;
  height: 58px;
  width: 100%;
  border-radius: 0 0 70px 70px;
  font-size: 1.6em;
  letter-spacing: 0.05em;
  place-items: center;
  text-transform: uppercase;
  -webkit-text-stroke: 0.1rem currentcolor;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
`

const Header = props => <HeaderStyle {...props} />

Header.protoTypes = {
  children: PropTypes.string,
}

export default Header

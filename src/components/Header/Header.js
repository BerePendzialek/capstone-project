import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const HeaderStyle = styled.div`
  display: grid;
  background-image: var(--color-main-gradient);
  color: white;
  height: 58px;
  width: 100%;
  border-radius: 0 0 70px 70px;
  font-size: 1.6em;
  font-weight: 400;
  place-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Header = props => <HeaderStyle {...props} />

Header.protoTypes = {
  children: PropTypes.string,
}

export default Header

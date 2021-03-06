import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const HeaderStyle = styled.div`
  display: grid;
  background-image: var(--color-main-gradient);
  color: white;
  height: 48px;
  width: 100%;
  font-size: 1.6em;
  font-weight: 400;
  font-family: 'Work Sans';
  place-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px 50px 8px;
`

const Header = props => <HeaderStyle {...props} />

Header.protoTypes = {
  children: PropTypes.string,
}

export default Header

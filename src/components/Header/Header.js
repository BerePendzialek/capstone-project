import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const HeaderStyle = styled.div`
  display: grid;
  background: linear-gradient(200deg, #739ebb 0%, #ffa500 60%);
  color: #5e176a;
  height: 58px;
  width: 100%;
  border-radius: 0 0 70px 70px;
  font-size: 1.6em;
  font-weight: 400;
  place-items: center;
  text-transform: uppercase;
`

const Header = props => <HeaderStyle {...props} />

Header.protoTypes = {
  children: PropTypes.string,
}

export default Header

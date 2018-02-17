import PropTypes from 'prop-types'
import styled from 'styled-components';
import { palette } from 'styled-theme';


const Badge = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${props => palette(props.color, 0)};
  border: 2px solid ${props => palette(...props.borderColor)};
  position: absolute;
  top: -3px;
  right: -8px;
`

Badge.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.array,
}

Badge.defaultProps = {
  color: 'red',
  borderColor: ['white', 0],
}

export default Badge;

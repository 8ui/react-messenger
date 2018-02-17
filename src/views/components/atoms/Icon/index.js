// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'


const Wrapper = styled.i`
  display: inline-block;
  font-size: ${props =>props.size}px;
  color: ${props => palette(props.color, 3)};
  margin: 0 0.3em;
  box-sizing: border-box;
`

const Icon = ({ name, type, filled, className, ...props }) => {
  let iconName = [];
  switch (type) {
    case 'fa':
      iconName.push(`fa fa-${name}`)
      break;
    case 'pe':
      iconName.push(`pe-7${filled ? 'f' : 's'}-${name}`)
      break;
  }
  return (
    <Wrapper {...props} className={`${iconName.join(' ')} ${className}`} />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  filled: PropTypes.bool,
  size: PropTypes.number,
}

Icon.defaultProps = {
  type: 'pe',
  color: 'default',
  filled: false,
  className: '',
  size: 24,
}

export default Icon

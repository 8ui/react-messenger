import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { Badge } from 'atoms';

const url = 'http://res.cloudinary.com/ddulqhyfu/image/upload/v1518863445/react-messenger/';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`
const Image = styled.img`
  border-radius: 50%;
  display: block;
`

class Avatar extends React.Component {
  renderBadge = () => this.props.badge && (
    <Badge {...this.props.badge} />
  )
  render () {
    const { image, size, ...props } = this.props
    return (
      <Wrapper {...props}>
        {this.renderBadge()}
        <Image width={size} height={size} src={url + image} />
      </Wrapper>
    );
  }
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  badge: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
}

Avatar.defaultProps = {
  size: 58,
}

export default Avatar;

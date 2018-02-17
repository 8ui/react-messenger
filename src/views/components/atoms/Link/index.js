import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import NavLink from 'react-router-dom/NavLink'


const styles = css`

`

const StyledNavLink = styled(({
  theme, reverse, palette, active, sidebarOpen, ...props
}) => <NavLink {...props} />)`${styles}`

const Anchor = styled.a`${styles}`

const Link = ({ ...props }) => {
  if (props.sidebar) {
    return <Anchor {...props} onClick={() => props.sidebarOpen(props)} />
  }
  if (props.to) {
    return <StyledNavLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  sidebarOpen: PropTypes.func,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  sidebar: PropTypes.bool,
  to: PropTypes.string,
}

Link.defaultProps = {
  palette: 'primary',
}

const mapDispatchToProps = {
}

export default connect(null, mapDispatchToProps)(Link)
